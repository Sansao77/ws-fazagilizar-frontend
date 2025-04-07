import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Dash from "./dashboard/Dash";

const HomeRoutes = () =>{
    return (
        <IonRouterOutlet>
            <Route exact path="/home/dash" component={Dash}/>
        </IonRouterOutlet>
    )
}

export default HomeRoutes