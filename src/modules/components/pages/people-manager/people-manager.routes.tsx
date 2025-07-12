import { Redirect, Route } from "react-router"
import Clients from "./clients/Clients";
import Sellers from "./sellers/Sellers";
import Managers from "./managers/Managers";

const PeopleManagerRoutes = () =>{
    return (
        <>
            <Route exact path="/home/people-manager/clients" component={Clients}/>
            <Route exact path='/home/people-manager/sellers' component={Sellers}/>
            <Route exact path='/home/people-manager/managers' component={Managers}/>

            <Route exact path="/home/people-manager/">
                <Redirect to="/home/people-manager/clients"/>
            </Route>
        </>
    )
}

export default PeopleManagerRoutes;