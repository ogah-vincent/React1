import './App.css';
//import Home from './Component/Home';
import Home from './Component/About';
import ControlledCarousel from './Component/caurosel';
import BasicExample from './Component/Navbar';
import FormExample from './Component/Form';

function App() {
  return (
    <div className="App">
      < h1 style={{color: "blue", fontSize: "30px" }}>FORM TO VALIDATE USER INFORMATION</h1>
      <BasicExample></BasicExample>
    <FormExample></FormExample>
    <ControlledCarousel></ControlledCarousel>
    <a href=''><footers style={{color: "blue", fontSize: "20px"}} > For more info contact us on our social media handles!  </footers></a> 
    </div>
  );
}

export default App;
