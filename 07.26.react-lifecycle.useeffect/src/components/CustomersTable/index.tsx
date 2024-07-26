import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

// const endpoints = {
//   customers: "customers",
//   suppliers: "suppliers"
// }

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";

  const getData = async (endpoint: string) => {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}/${endpoint}`);
      // console.log(response.data);

      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are u sure ti delete customer??")) {
        const response = await axios.delete(`${BASE_URL}/customers/${id}`);

        if (response.status === 200) {
          const updatedCustomers = customers.filter((q) => q.id !== id);
          // console.log(updatedCustomers);
          setCustomers([...updatedCustomers]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData("customers");
  }, []);

  return (
    <div>
      <h1>Customers Table</h1>

      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>CompanyName</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 &&
              customers.map((q) => {
                return (
                  <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.companyName}</td>
                    <td>{q.address?.phone}</td>
                    <td>
                      {q.address?.city}, {q.address?.country}
                    </td>
                    <td>
                      <button onClick={() => handleDelete(q.id)}>DELETE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomersTable;
