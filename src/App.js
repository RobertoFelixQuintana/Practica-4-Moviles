import './App.css';
import Header from './Components/Header';
import Libros from './Components/Libros';
import LibreriaProvider from './Context/LibrosContext';
import Lista from './Components/Lista';

function App() {
  return (
    <div className="App">
      <LibreriaProvider>
        <Header/>
        <div className="containerApp">
          <Libros/>
          <Lista/>
        </div>
      </LibreriaProvider>
    </div>
  );
}

export default App;
