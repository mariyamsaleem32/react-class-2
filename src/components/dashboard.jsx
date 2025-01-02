// import Appcard from "../components/card";
// import Applayout from "../components/layout";
import {Component} from 'react';

class Button extends Component {
  constructor(){
     super()
    this.state = {
    myName : "mariyam"
    }
    
  }
  abc(){
console.log("hi");

  }
render(){
 
  const {children} = this.props;
  return (
  // <button onClick={this.abc}>{children}</button>
  <h1>{this.state.myName}</h1>
  )
}
}
class Dashboard extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Button>click me</Button>
        <Button>update me</Button>
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