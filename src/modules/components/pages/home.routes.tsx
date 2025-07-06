import { Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import Ordereds from "./ordereds/ordereds";
import ProductManager from "./productManager/productManager";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <Route exact path="/home/ordereds" component={Ordereds}/>
            <Route exact path="/home/product-manager" component={ProductManager}/>
        </>
    )
}

export default HomeRoutes