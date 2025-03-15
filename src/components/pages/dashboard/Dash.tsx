import { IonButton, IonContent, IonIcon } from "@ionic/react"
import './dash.scss'
import { homeOutline } from "ionicons/icons"
import Bundle from "./bundle/Bundle"

const Dash: React.FC = () =>{
    return (
        <>
        <IonContent>
            <main>
                <Bundle />

                <section className="dash-header">
                    <span className="title">Dashboard</span>

                    <div className="dash-outline">
                        <IonIcon
                        icon={homeOutline}
                        size="small"
                        />

                        <span>Dashboard</span>
                    </div>
                </section>

                <section className="notifications">
                    <span>Receba push notificações de novos pedidos em seu dispositivo</span>

                    <IonButton>Ativar Notificações Navegador</IonButton>
                </section>

                <section></section>
            </main>
        </IonContent>
        </>
    )
}

export default Dash