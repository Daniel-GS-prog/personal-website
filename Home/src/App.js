
import './App.css';
import Navbar from './Components/Navbar';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Content1/>
      <Content2>
        <Content3/>
        <Content4/>
      </Content2>
    </div>
  );
}

export default App;
