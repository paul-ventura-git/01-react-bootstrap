import NavScrollExample from "./components/MainNavbar";
import ResponsiveTable from './components/ResponsiveTable';
import MainForm from "./components/MainForm";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">      
      <NavScrollExample></NavScrollExample>      
      <MainForm></MainForm>
      <ResponsiveTable></ResponsiveTable>
      <Container className='d-flex justify-content-between'>
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </Container>

    </div>
  );
}

export default App;
