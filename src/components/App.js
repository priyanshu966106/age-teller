import React, { Component } from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './App.css';
import AgeStat from './agestat';



class App extends Component {

  constructor(){
    super();
    this.state={ 
      userdate:'',
      bdate:'1996-06-02',
      showStat:false
    }
  }
  changeval()
  {
    console.log(this.state);
    this.setState({bdate:this.state.userdate});
    this.setState({showStat:true})
    console.log(this.state.bdate);
  }

  render() {
    return (
      <div className="App">
         <center>
         <h1>Age Teller</h1>
         <br/>
           
            <Form className="fc" >
              
                <FormControl type="date" onChange={event => this.setState({userdate: event.target.value})}></FormControl>
                <br/>
                <Button bsStyle="danger" onClick={()=> this.changeval()}>
                  Tell my age
                </Button>
                
            </Form><br/>{
            this.state.showStat?
            <div className="fade age-stats">
            <AgeStat date={this.state.bdate}/>
            </div>:
            <div></div>
            
            }

            </center>
        </div>
    );
  }
}

export default App;
