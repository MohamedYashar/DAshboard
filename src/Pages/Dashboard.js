import React from 'react'

export default function Dashboard() {

  const salesDetails = [
    {
        
        invoice_ID: "#AHGA68",
        Date: "D23/09/2023",
        Customer: "Joseph Murphy",
        Payable_Amount: "$100",
        Paid_Amount: "$000",
        Due: "000",
    },
    {
      invoice_ID: "#AHGA68",
      Date: "D23/09/2023",
      Customer: "Joseph Murphy",
      Payable_Amount: "$100",
      Paid_Amount: "$000",
      Due: "000",
  },
  {
    invoice_ID: "#AHGA68",
    Date: "D23/09/2023",
    Customer: "Joseph Murphy",
    Payable_Amount: "$100",
    Paid_Amount: "$000",
    Due: "000",
},
{
  invoice_ID: "#AHGA68",
  Date: "D23/09/2023",
  Customer: "Joseph Murphy",
  Payable_Amount: "$100",
  Paid_Amount: "$000",
  Due: "000",
},
{
  invoice_ID: "#AHGA68",
  Date: "D23/09/2023",
  Customer: "Joseph Murphy",
  Payable_Amount: "$100",
  Paid_Amount: "$000",
  Due: "000",
},
{
invoice_ID: "#AHGA68",
Date: "D23/09/2023",
Customer: "Joseph Murphy",
Payable_Amount: "$100",
Paid_Amount: "$000",
Due: "000",
},
{
invoice_ID: "#AHGA68",
Date: "D23/09/2023",
Customer: "Joseph Murphy",
Payable_Amount: "$100",
Paid_Amount: "$000",
Due: "000",
},
{
invoice_ID: "#AHGA68",
Date: "D23/09/2023",
Customer: "Joseph Murphy",
Payable_Amount: "$100",
Paid_Amount: "$000",
Due: "000",
},
    
]
  return (
    <div className='Dashboard'>
      

      <div>
        <input placeholder='Search' />
      </div>
      <div className='inputBox'>
        <div >
          <label for="inputField"> Customer </label><br></br>
          <input type="text" id="inputField" placeholder ="Enter Customer name "name="name"/>

        </div>
        <div>
          <label for="inputField"> Invoice ID </label><br></br>
          <input type="text" id="inputField" placeholder ="Enter Customer name "name="name"/>

        </div>
        <div>
          <label for="inputField"> Start Date </label> <br></br>
          <input type="text" id="inputField" placeholder ="Start Date"name="name"/>

        </div>
        <div>
          <label for="inputField"> End Date </label> <br></br>
          <input type="text" id="inputField" placeholder ="End Date "name="name"/>

        </div>
      </div>

      <div className='Table'>

        <div>
        <input type="checkbox" name="myCheckbox"/>


        </div>

        <div ><h5>Invoice ID</h5>
        <p className='invoice_ID'>
        { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.invoice_ID}</div>))}

        </p>
        </div>
        <div><h5>Date</h5>              
              { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.Date}</div>))}
        </div>
        <div><h5>Customer</h5>
              { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.Customer}</div>))}  
        </div>
        <div><h5>Payable_Amount</h5>
        { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.Payable_Amount}</div>))}
        </div>
        <div><h5>Paid_Amount</h5>
        { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.Paid_Amount}</div>))}
        </div>
        <div><h5>Due</h5>
        { salesDetails.map(((item,index) => <div className='invoice_ID'>{item.Due}</div>))}
        </div>

      </div>
    </div>
  )
}
