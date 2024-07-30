import './App.css';
import members from './custodb'
import React, {useState} from 'react'

function App() {
  let blank = { "id": -1, "name": "", "email": "", "password": "" };
  const [formObject, setFormObject] = useState(blank);
  let mode = (formObject.id >= 0) ? "Update" : "Add";

  const handleInputChange = function(event) {
    console.log('in handleInputChange()');
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
  }

  const onDeleteClick = function() {
    console.log('in onDeleteClick()');
  }

  const onSaveClick = function() {
    console.log('in onSaveClick()');
  }

  

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
              members.map((item, index) =>
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
                onChange={handleInputChange}
                value={formObject.name}
                placeholder="Customer Name"></input></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input 
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formObject.email}
                placeholder="name@company.com"></input></td>
              </tr>
              <tr>
                <td>Pass:</td>
                <td><input 
                type="text"
                name="name"
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
