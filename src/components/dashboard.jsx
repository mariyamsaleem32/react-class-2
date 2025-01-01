import Appcard from "../components/card";
import Applayout from "../components/layout";


const Dashboard = () => {
    return (
    <div className="container">
       <Applayout title='smit'>
        <div>
        <Appcard/>  
        </div>
       </Applayout>
  </div>
    )
  }
  
  export default Dashboard;