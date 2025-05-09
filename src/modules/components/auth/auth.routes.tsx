import { Route } from "react-router"
import Login from "./Login"

const AuthRoutes = () =>{
    return (
        <>
            <Route exact path="/login" component={Login}/>
        </>
    )
}

export default AuthRoutes