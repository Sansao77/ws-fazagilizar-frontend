import { Route } from "react-router"
import ProductManager from "./ProductManager"

const ProductManagerRoutes = () =>{
    return (
        <>
            <Route exact path="/home/product-manager" component={ProductManager} />
            <Route exact path="/home/product-manager/filter" />
        </>
    )
}

export default ProductManagerRoutes;