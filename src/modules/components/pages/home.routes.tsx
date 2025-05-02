import { Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import ProductManagerRoutes from "./product-manager/product-manager.routes";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <ProductManagerRoutes />
        </>
    )
}

export default HomeRoutes