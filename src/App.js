import React from 'react';
import './App.css';
import Newfile2 from './compponent/Newfile2';
import Webserviceone from './compponent/Webserviceone';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }


MyThirdButton=()=>{
  alert('In the Name Of Allah');
}


  render() {

  return(
    <div>
      <Webserviceone />
      <Newfile2 />
  
   <button onClick={this.MyThirdButton}>Third Button</button>



    </div>
    );

  }

  componentDidMount(){
      console.log("Checking Console");
  }

}

export default App;