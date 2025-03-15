import { Redirect, Route } from "react-router-dom";
import HomeRoutes from "./components/pages/home.routes";
import NotFound from "./shared/components/404/NotFound";
import React from "react";
import { IonRouterOutlet } from "@ionic/react";

const AppRoutes: React.FC = () =>{
    return (
        <IonRouterOutlet>
            <HomeRoutes />

            <Route exact path="/">
                <Redirect to="/home/dash"/>
            </Route>

            {/* Rotas de segurança */}
            <Route exact path="/404" component={NotFound}/>
        </IonRouterOutlet>
    )
}

export default AppRoutes