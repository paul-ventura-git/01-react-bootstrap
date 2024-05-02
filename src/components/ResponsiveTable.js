import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from "react"

function ResponsiveTable() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      fetch("https://fake-store-api.mock.beeceptor.com/api/products")
        .then(response => response.json()) 
        .then(json => setProducts(json)) 
        .finally(() => {
          setLoading(false)
        })
    }, [])

  return (
    <Container className='d-flex justify-content-between'>
    {loading ? (
        <div>Loading...</div>
      ) : (
        <>
        <Table responsive>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Discount</th>
                <th>Availability</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {products.map(user => (
                <tr key={user.product_id}>
                    <td>{user.product_id}</td>
                    <td>{user.name}</td>
                    <td>{user.description}</td>
                    <td>{user.price}</td>
                    <td>{user.unit}</td>
                    <td>{user.discount}</td>
                    <td>{user.availability}</td>
                    <td>{user.brand}</td>
                    <td>{user.category}</td>
                    <td>{user.rating}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        </>
    )}
    </Container>
  );
}

export default ResponsiveTable;