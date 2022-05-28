import React from 'react';
import useTools from '../Shared/Hook/useTools'
const ManageProducts = () => {
       const [tools, setTools] = useTools();

           const handleDelete = (id) => {
             const proceed = window.confirm("Are you sure you want to delete?");
             if (proceed) {
               const url = `http://localhost:5000/product/${id}`;
               fetch(url, {
                 method: "DELETE",
               })
                 .then((res) => res.json())
                 .then((result) => {
                   const remaining = tools.filter((item) => item._id !== id);
                   setTools(remaining);
                 });
             }
           };
    return (
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ProductName</th>
                <th>Product Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((product, index) => (
                <tr>
                  <th>{index}</th>
                  <td>{product.name}</td>
                  <td>{product.available_quanity}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProducts;