import React, { Component } from "react";
class Webserviceone extends Component{
    constructor(props){
        super(props);
    }
    MyfirstButton=()=>{
        alert('In the Name Of Allah');
      }
    render(){
return(<>
            <button onClick={this.MyfirstButton}>First Button</button>
      </>
     )
   }
}
export default Webserviceone;