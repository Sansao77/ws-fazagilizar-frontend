import { Redirect, Route } from "react-router-dom";
import HomeRoutes from "./modules/components/pages/home.routes";
import NotFound from "./shared/components/404/NotFound";
import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

const AppRoutes: React.FC = () =>{
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <HomeRoutes />

                <Route exact path="/">
                    <Redirect to="/home/dash"/>
                </Route>

                {/* Rotas de segurança */}
                <Route exact path="/404" component={NotFound}/>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default AppRoutes