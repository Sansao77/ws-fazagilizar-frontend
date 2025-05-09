import { 
    IonAlert,
    IonButton,
    IonContent, 
    IonIcon, 
    IonInput, 
    IonInputPasswordToggle, 
    IonPage 
} from "@ionic/react";
import ReCAPTCHA from "react-google-recaptcha";

import './login.scss'
import { checkmark, keyOutline, personOutline } from "ionicons/icons";

const Login:React.FC = () =>{
    return (
        <IonPage>
            <IonContent>
                <div className="background-login">
                    <div className="login default-container">
                        <img src="/logo-login.png" alt="logo" className="logo"/>

                        <form className="form-data">
                            <IonInput 
                            placeholder="Nome de usuário"
                            fill="outline">
                                <IonIcon slot="start" icon={personOutline} aria-hidden></IonIcon>
                            </IonInput>

                            <IonInput 
                            placeholder="Senha"
                            fill="outline"
                            type="password"
                            >
                                <IonIcon slot="start" icon={keyOutline} aria-hidden></IonIcon>

                                <IonInputPasswordToggle slot="end" />
                            </IonInput>

                            <ReCAPTCHA sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY} />

                            <IonButton 
                            expand="block"
                            routerLink="/home/dash"
                            className="enter">
                                <IonIcon slot="start" icon={checkmark} aria-hidden></IonIcon>
                                ENTRAR
                            </IonButton>
                        </form>

                        <a id="forgot-password">Esqueci minha senha</a>
                    </div>
                </div>
            </IonContent>

            <IonAlert
            trigger="forgot-password"
            header="Recuperar Senha"
            buttons={['ENVIAR']}
            inputs={[
                {
                    placeholder: 'Digite seu e-mail'
                }
            ]}
            ></IonAlert>
        </IonPage>
    )
};

export default Login;