import React, { Component } from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
         
           <h1>Age Teller</h1>
           
              <Form inline >
                <FormControl type="date"></FormControl>
                <Button bsStyle="success">
                  submit
                </Button>
              </Form>
          
       </div>
    );
  }
}

export default App;
