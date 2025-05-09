import { IonPage, IonRouterOutlet, IonTabs } from "@ionic/react"
import Header from "../templates/header/Header"
import Sidebar from "../templates/sidebar/Sidebar"
import HomeRoutes from "../pages/home.routes"

const Home:React.FC = () =>{
    return (
        <IonPage>
            <Sidebar />
            <Header name="Julia Costa"/>

            <IonRouterOutlet>
                <HomeRoutes />
            </IonRouterOutlet>
        </IonPage>
    )
}

export default Home