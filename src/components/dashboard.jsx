// import Appcard from "../components/card";
// import Applayout from "../components/layout";
import {Component} from 'react';

class Button extends Component {
  constructor(){
     super()
    this.state = {
    myName : "MARIYAM"
    } 
  }

  updateName= () => {
console.log(this.state.myName);
this.setState(
  {
    myName : "FATIMA"
  }
)
  }

render() {
  // const {children} = this.props;
  return (
    <div>
     <h1>{this.state.myName}</h1>
     <button onClick={this.updateName}>
      update
     </button>
     </div>
  )
}
}

class Dashboard extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div 
      style={{
        textAlign : 'center',
        padding : '15px',
        fontSize : '26px'
      }}>
        <Button/>
      </div>
    )
  }
}

// const Dashboard = () => {
//     return (
//     <div className="container">
//        <Applayout title='smit'>
//         <div>
//         <Appcard/>  
//         </div>
//        </Applayout>
//   </div>
//     )
//   }
  
  export default Dashboard;