import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Search/>
      <List/>
    </div>
  );
}

class ListItem extends React.Component{
  render(){
    return(
      <li className="list-item">List Item</li>
    )
  }
}

class List extends React.Component{
  render(){
    return(
      <div className="list">
        <h3>Favorite Cars</h3>
        <ul>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </ul>
      </div>
    )
  }
}

class Search extends React.Component{
  render(){
    return(
      <div className="search">
        <input/>
        <button>Add Car</button>
      </div>
    )
  }
}




export default App;
