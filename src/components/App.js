import React, { Component } from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state={ 
      userdate:'',
      bdate:'1996-06-02'
    }
  }
  changeval()
  {
    console.log(this.state);
    this.setState({bdate:this.state.userdate});
    console.log(this.state.bdate);
  }

  render() {
    return (
      <div className="App">
         
           <h1>Age Teller</h1>
           
              <Form inline >
                <FormControl type="date" onChange={event => this.setState({userdate: event.target.value})}></FormControl>
                <Button bsStyle="danger" onClick={()=> this.changeval()}>
                  submit
                </Button>
              </Form>
          
       </div>
    );
  }
}

export default App;
