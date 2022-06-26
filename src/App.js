import React from 'react';
import Homepage from './Home';
import Notfound from './404';
import Job_details from './Job_details';
import Qaybdetails from './Qayb_details';
import Profile from './Profile';
import ComplatedOrder from './components/Profile/Order_complate';
import OrderDetailscheckh from './components/Profile/Order_details';
import Orders_Free from './components/Profile/Orders_F';
import Bugscroll from './components/scrolltotop';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Acount/Login';
import SingUp from './components/Acount/Sinup';
import ChatOnline from './components/Profile/Online_chat';
import OrderUsers from './components/Profile/Orders_s';
import Gudoon from './components/Profile/Order_s_details';
import My_Orders from './components/Profile/freeOrder';
import Gudbin_dalab from './components/Profile/Gudbin';
import Add_servece from './components/Profile/Add_serv';
import Lacag_La_bixid from './components/Profile/Cash_out';
import Labxaday from './components/Profile/cashout_msg';
import Upadate_job from './components/Profile/Update_Job';


function App(){
    return(
      <Router>
      <div>
      <Bugscroll />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/Jobs/:id/User/:user">
            <Job_details />
          </Route>
          <Route exact path="/Qayb/:id">
            <Qaybdetails />
          </Route>
          <Route exact path="/Order/:id">
            <OrderDetailscheckh />
          </Route>
          <Route exact path="/Acount/:name/:id">
            <Profile />
          </Route>
          <Route exact path="/Order/Complated/:id">
            <ComplatedOrder />
          </Route>
          <Route exact path="/Acount/Login">
            <Login />
          </Route>
          <Route exact path="/Acount/Singup">
            <SingUp />
          </Route>
          <Route exact path="/Acount/Online/chat/:id">
            <ChatOnline />
          </Route>
          <Route exact path="/Acount/orders">
            <OrderUsers />
          </Route>
          <Route exact path="/Acount/order/Info/:id/:userid">
            <Gudoon />
          </Route>
          <Route exact path="/Acount/Myorder">
            <Orders_Free />
          </Route>
          <Route exact path="/Acount/Myorder/info/:id">
            <My_Orders />
          </Route>
          <Route exact path="/Acount/gudbi">
            <Gudbin_dalab />
          </Route>
          <Route exact path="/Acount/Add_Job">
            <Add_servece />
          </Route>
          <Route exact path="/job/upadate/:id">
            <Upadate_job />
          </Route>
          <Route exact path="/Acount/Cashout">
            <Lacag_La_bixid />
          </Route>
          <Route exact path="/Acount/Cashout_sax">
            <Labxaday />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
      </Router>
    )
}
export default App
