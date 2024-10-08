function CustomerAddUpdateForm(params){
    return (
        <div align="center">
            <form>
            <h4 align="center">{params.mode}</h4>
            <table className="customer-edit">
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td><input 
                    type="text"
                    name="name"
                    onChange={(e) => params.handleInputChange(e)}
                    value={params.formObject.name}
                    placeholder="Customer Name"></input></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input 
                    type="text"
                    name="email"
                    onChange={(e) => params.handleInputChange(e)}
                    value={params.formObject.email}
                    placeholder="name@company.com"></input></td>
                </tr>
                <tr>
                    <td>Pass:</td>
                    <td><input 
                    type="text"
                    name="password"
                    onChange={(e) => params.handleInputChange(e)}
                    value={params.formObject.password}
                    placeholder="password"></input></td>
                </tr>
                <tr>
                    <td colSpan="2" className="buttons">
                    <input type="button" value="Delete" onClick={params.onDeleteClick}/>
                    <input type="button" value="Save" onClick={params.onSaveClick}/>
                    <input type="button" value="Cancel" onClick={params.onCancelClick}/>
                    </td>
                </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default CustomerAddUpdateForm;