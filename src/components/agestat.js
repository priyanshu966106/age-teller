import React,{Component} from 'react';
import congo from './cg.jpg';
import './age.css';

class AgeStat extends Component{
    TimeOnEarth(date)
    {
     let today =new Date().getTime();
     let other_date=new Date(date).getTime();
     let difference=Math.abs(today-other_date);
     let days=Math.floor(difference/(1000*3600*24));
     let years=Math.floor(days/365);
     days -= years*365;
     let moth=Math.floor(days/31);
     days -= moth*31;
     return `${years} years, ${moth} months, and ${days} days`
    }
    
render(){
return(
<div className="AgeStat">
<center>
   <h3>{this.TimeOnEarth(this.props.date)}</h3>
   
   <img src={congo} alt="congo" className="congo" /></center>
</div>
);
}
}

export default AgeStat