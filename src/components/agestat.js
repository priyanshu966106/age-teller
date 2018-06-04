import React,{Component} from 'react';


class AgeStat extends Component{
    
render(){
return(
<div  className="AgeStat">
   <h3>{this.props.date}</h3>
</div>
);
}
}

export default AgeStat