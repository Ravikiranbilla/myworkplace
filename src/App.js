// import logo from './logo.svg';

import React from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import './App.css';
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data:"ravikiran",
         data1 : 0,
         data2: [],
         data3: ['teja', 'ravi', 'devika'],
         data4 : [1, 2, 3, 4, 5],
         show: false,
         userId: '',
         title: '',
         body: ''
      }
   };

   componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then ((resp) => {
         this.setState({data2: resp.data});

      }).catch ((error) => {
         this.setState({data2: []});
      });
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
                        <React.Fragment key={item.id}>
                         <li>
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

      handleClose = () => {
         this.setState({show: false});
         this.clearFormData();
      }

      handleShow=()=> {
         this.setState({show: true});
      }

      handleChange = (e) => {
         this.setState({[e.target.name]: e.target.value});
      }

      clearFormData = () => {
         this.setState({
            userId: '',
            title: '',
            body: ''
         })
      }

      submitFormData = () => {
         const userId = this.state.userId;
         const title = this.state.title;
         const body = this.state.body;
         axios.post("https://jsonplaceholder.typicode.com/posts", {
            "title": title,
            "body": body,
            "userId": userId
         }).then((resp) => {
            this.setState({show: false});
            this.clearFormData();
            const updateData = this.state.data2.concat({
               "title": resp.data.title,
               "body": resp.data.body,
               "id": resp.data.id
            });
            this.setState({data2: updateData});
         }).catch((err) => {

         });
      }
         render() {
      return (
         <div>
            {/* <button onClick = {this.setNewName}>Namechange</button>
            <div>{this.state.data}</div>
            <button onClick = {this.setNewNumber}>number increment  </button>
            <div>{this.state.data1}</div> */}
            {this.getData()}
            {/* {this.getData3()} */}
            {/* {this.getData4()} */}

            <>
      <Button variant="primary" onClick={() => this.handleShow()}>
        Add New Post
      </Button>

      <Modal
        show={this.state.show}
        onHide={() => this.handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control type="number" placeholder="Enter user id" 
            name="userId"
            value={this.state.userId}
            onChange={(e) => this.handleChange(e)}/>
         </Form.Group>
         <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" 
            className="test"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}/>
         </Form.Group>
         <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Body</Form.Label>
    <Form.Control as="textarea" rows={3} 
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleChange(e)}/>
  </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.submitFormData()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
            
         </div>
      );
   }
}

export default App;
