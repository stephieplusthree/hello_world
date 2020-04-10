import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="search">
        <input/>
        <button>Add Car</button>
      </div>
      <div className="list">
        <h3>Favorite Cars</h3>
        <ul>
          <li className="list-item">Lexus IS250</li>
          <li className="list-item">Infiniti Q50</li>
          <li className="list-item">Maclaren</li>
        </ul>
      </div>
    </div>
  );
}

class Search extends React.Component{
  render(){
    return
  }
}




export default App;
