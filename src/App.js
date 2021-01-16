// import logo from './logo.svg';

import React from 'react';

import './App.css';
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data:"ravikiran",
         data1 : 0,
         data2: [],
         data3: ['teja', 'ravi', 'devika'],
         data4 : [1, 2, 3, 4, 5]
      }
   };

   // componentDidMount() {
   //    axios.get("https://jsonplaceholder.typicode.com/posts")
   //    .then ((resp) => {
   //       this.setState({data2: resp.data2});

   //    }).catch ((error) => {

   //    });
   // }

   // componentDidMount() {
   //    axios
   //    .get("https://jsonplaceholder.typicode.com/posts")
   //    .then((response) => {
   //      this.setState({data2: response.data2});
   //    })
   //    .catch((e) => 
   //    {
   //      console.error(e);
   //    });
   //  }

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              data2: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              data2: []
            });
          }
        )
    }
    
   setNewName = () => {
      this.setState({data: "billa"})
   }
   setNewNumber = () => {
    this.setState({data1:this.state.data1+1})
 
      }

      getData = () => {
         if(this.state.data2 && this.state.data2.length) {
            return(
               <ul>
                  {this.state.data2.map((item) => {
                     return(
                        <React.Fragment>
                         <li key={item.id}>
                         {item.id}: {item.title}
                      </li>
                      <li>{item.body}</li>
                      </React.Fragment>
                     )
                  }
               )}
               </ul>
            )}
         return null;
      }
      getData3 = () => {
         return(
            <>
            {this.state.data3.map((item) => {
               return(
                  <div key={item}>
                  {item}
                  </div>
               )
            })
            }
            </>
         ) 
      }
      getData4 = () => {
         return(
            <>
            {this.state.data4.map((item) => {
            
               return(
                  <div key={item}>
                     {item}
                  </div>
               )
            }
            )
         }
            </>
         )
      }
         render() {
      return (
         <div>
            <button onClick = {this.setNewName}>Namechange</button>
            <div>{this.state.data}</div>
            <button onClick = {this.setNewNumber}>number increment  </button>
            <div>{this.state.data1}</div>
            {/* {this.getData()} */}
            {/* {this.getData3()} */}
            {this.getData4()}
         </div>
      );
   }
}

export default App;
