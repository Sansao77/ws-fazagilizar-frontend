import { IonButton, IonContent, IonPage } from "@ionic/react"
import { useHistory } from 'react-router-dom'
import './not-found.scss'

const NotFound: React.FC = () =>{
    const history  = useHistory();

    return (
        <IonPage>
            <IonContent>
                <div className="align-middle">
                    <div className="container-component">
                        <h1>Rota 404</h1>
                        <h2>Página não encontrada!</h2>
                        <IonButton onClick={() => history.goBack()}>Retornar para rota anterior</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default NotFound