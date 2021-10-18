import React, { Component } from "react";
class Newfile2 extends Component{
    constructor(props){
        super(props);
    }
    
MySecondButton=()=>{
    alert('In the Name Of Allah');
  }
    render(){
return(<>
            
   <button onClick={this.MySecondButton}>Second Button</button>
      </>
     )
   }
}
export default Newfile2;