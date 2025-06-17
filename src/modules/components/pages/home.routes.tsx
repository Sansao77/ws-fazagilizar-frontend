import { Redirect, Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import ProductManagerRoutes from "./product-manager/product-manager.routes";
import Ordereds from "./ordereds/ordereds";
import MyStoreRoutes from "./my-store/my-store.routes";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <Route exact path="/home/ordereds" component={Ordereds}/>
            <MyStoreRoutes />
            <ProductManagerRoutes />

            <Route exact path="/home">
                <Redirect to="/home/dash" />
            </Route>
        </>
    )
}

export default HomeRoutes