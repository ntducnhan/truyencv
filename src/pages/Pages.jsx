import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Index from "./Index";
import Details from './Details'
import SignInUp from "./SignInUp";
import SignUp from "../components/SignUp";
import DetailChap from "./DetailChap";
import DetailSearch from "./DetailSearch";
import Account from "./Account";

export default function Pages(){
    return<>
        <Router>
                <Route path='/' exact component={Index}/>
                <Route path='/index' component={Index}/>
                <Route path='/details/:novelId' component={Details} />
                <Route path='/sign-in' component={SignInUp} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/chap/:chapId' component={DetailChap} />
                <Route path='/tim-kiem' component={DetailSearch} />
                <Route path='/account' component={Account}/>
         
        </Router>

    
    </>
}