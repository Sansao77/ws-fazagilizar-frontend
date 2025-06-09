import { Redirect, Route } from "react-router-dom";
import NotFound from "./shared/components/404/NotFound";
import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./modules/components/home/Home";
import AuthRoutes from "./modules/components/auth/auth.routes";

const AppRoutes: React.FC = () =>{
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <AuthRoutes />
                <Route path="/home" component={Home} />

                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>

                {/* Rotas de segurança */}
                <Route exact path="/404" component={NotFound}/>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default AppRoutes