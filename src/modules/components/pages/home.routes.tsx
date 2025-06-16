import { Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import ProductManagerRoutes from "./product-manager/product-manager.routes";
import Ordereds from "./ordereds/ordereds";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <Route exact path="/home/ordereds" component={Ordereds}/>
            <ProductManagerRoutes />
        </>
    )
}

export default HomeRoutes