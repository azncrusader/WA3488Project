import './App.css';
import React, {useState, useEffect} from 'react'
import {getAll, deleteById, post, put} from './memdb'

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
      <div align="center">
        <h4>Customer List</h4>
        <table className="customer-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((item, index) =>
                <tr key={item.id} 
                className={(item.id === formObject.id) ? 'selected': ''}
                onClick={() => {handleListClick(item)}}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div align="center">
        <form>
          <table className="customer-edit">
            <h4>{mode}</h4>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><input 
                type="text"
                name="name"
                onChange={(e) => handleInputChange(e)}
                value={formObject.name}
                placeholder="Customer Name"></input></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input 
                type="text"
                name="email"
                onChange={(e) => handleInputChange(e)}
                value={formObject.email}
                placeholder="name@company.com"></input></td>
              </tr>
              <tr>
                <td>Pass:</td>
                <td><input 
                type="text"
                name="password"
                onChange={handleInputChange}
                value={formObject.password}
                placeholder="password"></input></td>
              </tr>
              <tr>
                <td>
                  <input type="button" value="Delete" onClick={onDeleteClick}/>
                  <input type="button" value="Save" onClick={onSaveClick}/>
                  <input type="button" value="Cancel" onClick={onCancelClick}/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
