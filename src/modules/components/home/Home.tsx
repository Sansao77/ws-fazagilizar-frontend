import { IonPage, IonRouterOutlet, IonTabs } from "@ionic/react"
import Header from "../templates/header/Header"
import Sidebar from "../templates/sidebar/Sidebar"
import AppRoutes from "../../../app.routes"

const Home:React.FC = () =>{
    return (
        <IonPage>
            <Sidebar />
            <Header name="Julia Costa"/>

            <IonTabs>
                <IonRouterOutlet>
                    <AppRoutes />
                </IonRouterOutlet>
            </IonTabs>
        </IonPage>
    )
}

export default Home