import { Route } from "react-router-dom";
import Dash from "./dashboard/Dash";
import Ordereds from "./ordereds/ordereds";
import ProductManager from "./productManager/productManager";
import ShippingConfig from "./shippingConfig/ShippingConfig";
import PaymentIntegration from "./paymentIntegration/PaymentIntegration";

const HomeRoutes = () =>{
    return (
        <>
            <Route exact path="/home/dash" component={Dash}/>
            <Route exact path="/home/ordereds" component={Ordereds}/>
            <Route exact path="/home/product-manager" component={ProductManager}/>
            <Route exact path="/home/shipping-config" component={ShippingConfig}/>
            <Route exact path="/home/payment-integration" component={PaymentIntegration}/>
        </>
    )
}

export default HomeRoutes