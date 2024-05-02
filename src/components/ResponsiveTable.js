import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ResponsiveTable() {
  return (
    <Container className='d-flex justify-content-between'>
        <Table responsive>
        <thead>
            <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
            ))}
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
        </tbody>
        </Table>
    </Container>
  );
}

export default ResponsiveTable;