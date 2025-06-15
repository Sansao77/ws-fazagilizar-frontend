import { Route } from "react-router"
import Configurations from "./configurations/Configurations";
import BranchManager from "./branch-manager/BranchManager";
import CounterSale from "./counter-sale/CounterSale";
import Users from "./users/Users";
import Emails from "./emails/Emails";
import Notifications from "./notifications/Notifications";


const MyStoreRoutes = () =>{
    return (
        <>
            <Route exact path='/home/my-store/configurations' component={Configurations}/>
            <Route exact path='/home/my-store/branch-manager' component={BranchManager}/>
            <Route exact path='/home/my-store/counter-sale' component={CounterSale} />
            <Route exact path='/home/my-store/users' component={Users} />
            <Route exact path='/home/my-store/email' component={Emails} />
            <Route exact path='/home/my-store/branch-manager/notifications' component={Notifications} />
        </>
    )
}

export default MyStoreRoutes;