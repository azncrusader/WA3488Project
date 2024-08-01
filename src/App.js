import './App.css';
import React, {useState, useEffect} from 'react'
import {getAll, deleteById, post, put} from './memdb'
import CustomerList from './CustomerList';
import CustomerAddUpdateForm from './CustomerAddUpdateForm';

function App() {
  let blank = { "id": -1, "name": "", "email": "", "password": "" };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blank);
  let mode = (formObject.id >= 0) ? "Update" : "Add";

  const handleInputChange = function(event) {
    console.log('in handleInputChange()');
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }

  const handleListClick = function(item) {
    console.log('in handleListClick()');
    if (formObject.id === item.id)
      setFormObject(blank);
    else 
      setFormObject(item);
  }
  const onCancelClick = function() {
    console.log('in onCancelClick()');
    if (formObject.id >= 0)
      setFormObject(blank);
  }

  const onDeleteClick = function() {
    console.log('in onDeleteClick()');
    if (formObject.id >= 0) {
      deleteById(formObject.id);
      setFormObject(blank);
    }
  }

  const onSaveClick = function() {
    console.log('in onSaveClick()');
    if (mode === "Add")
      post(formObject);
    else
      put(formObject.id, formObject);
    setFormObject(blank);
  }

  const getCustomers = function() {
    console.log("in getCustomers()");
    setCustomers(getAll());
  }

  useEffect( ()=>{
    getCustomers();
  },[])

  return (
    <div>
      <CustomerList 
      customers={customers} 
      formObject={formObject} 
      handleListClick={handleListClick} />
      <CustomerAddUpdateForm
      mode={mode}
      handleInputChange={handleInputChange}
      formObject={formObject}
      onDeleteClick={onDeleteClick}
      onSaveClick={onSaveClick}
      onCancelClick={onCancelClick}
      />
      <div class="shaq-container">
        <img src="./shaqseal.jpg" alt="Funny Shaq" class="shaq-image"/>
      </div>
    </div>
  );
}

export default App;

