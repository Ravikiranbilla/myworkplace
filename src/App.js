// import logo from './logo.svg';

import React from 'react';

import './App.css';
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data:"ravikiran",
         data1 : 0
      }
   };
   setNewName = () => {
      this.setState({data: "billa"})
   }
   setNewNumber = () => {
    this.setState({data1:this.state.data1+1})
 
      }
         render() {
      return (
         <div>
            <button onClick = {this.setNewName}>Namechange</button>
            <div>{this.state.data}</div>
            <button onClick = {this.setNewNumber}>number increment  </button>
            <div>{this.state.data1}</div>
         </div>
      );
   }
}

export default App;
