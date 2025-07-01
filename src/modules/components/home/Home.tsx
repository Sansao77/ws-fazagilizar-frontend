import { IonContent, IonPage, IonRouterOutlet, IonSplitPane } from "@ionic/react"
import Header from "../templates/header/Header"
import Sidebar from "../templates/sidebar/Sidebar"
import HomeRoutes from "../pages/home.routes"

const Home:React.FC = () =>{
    return (
        <IonPage>
            <IonSplitPane when='lg' contentId="home" style={{ '--side-width': '20%' }}>
                <Sidebar 
                side='start' 
                type='push'
                menuId="sidebar"
                contentId='home' 
                swipeGesture={false}
                disabled={false}
                />

                <IonContent id="home">
                    <Header name="Julia Costa"/>

                    <IonRouterOutlet>
                        <HomeRoutes />
                    </IonRouterOutlet>
                </IonContent>
            </IonSplitPane>
        </IonPage>
    )
}

export default Home