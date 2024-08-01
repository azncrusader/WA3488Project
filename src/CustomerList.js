function CustomerList(params) {  
    return(  
        <div align="center">
            <div className="title-container">
                <h4 className="scrolling-title">Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp;
                Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp;  
                </h4>
                <h4 className="scrolling-title">Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp;
                Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List &nbsp; Customer List    
                </h4>
            </div>
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
                    params.customers.map((item, index) =>
                    <tr key={item.id} 
                    className={(item.id === params.formObject.id) ? 'selected': ''}
                    onClick={() => {params.handleListClick(item)}}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                </tr>)
                }
            </tbody>
            </table>
        </div>
    )
}

export default CustomerList;