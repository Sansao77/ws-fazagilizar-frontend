import { Route } from "react-router"
import Configurations from "./configurations/Configurations";


const MyStoreRoutes = () =>{
    return (
        <>
        <Route exact path='/home/my-store/configurations' component={Configurations}/>
        </>
    )
}

export default MyStoreRoutes;