import { Redirect, Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import ProductManagerRoutes from "./product-manager/product-manager.routes";
import MyStoreRoutes from "./my-store/my-store.routes";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <MyStoreRoutes />
            <ProductManagerRoutes />

            <Route exact path="/home">
                <Redirect to="/home/dash" />
            </Route>
        </>
    )
}

export default HomeRoutes