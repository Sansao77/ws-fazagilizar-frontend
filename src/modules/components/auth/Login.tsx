import { 
    IonAlert,
    IonButton,
    IonContent, 
    IonIcon, 
    IonInput, 
    IonInputPasswordToggle, 
    IonPage 
} from "@ionic/react";
import { useState } from "react";
import './login.scss';
import { checkmark, keyOutline, personOutline } from "ionicons/icons";
//import { AuthService } from "../../../shared/services/AuthService";
//import { TokenManager } from "../../../shared/utils/TokenManager";

const Login:React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const SubmitForm = async () => {
        //const authService = new AuthService();

        try {
            //const result = await authService.login(username, password);
            
            if(username === 'user' && password === '123456'){
                window.location.href = "/home";
                //TokenManager.saveToken(result);
            } else {
                alert("Usuário ou senha incorretos!");
            }

        } catch (error) {
            console.error("Erro ao realizar login", error);
            alert("Erro ao tentar realizar login, tente novamente.");
        }
    };

    return (
        <IonPage>
            <IonContent>
                <div className="background-login">
                    <div className="login default-container">
                        <img src="/logo-login.png" alt="logo" className="logo"/>

                        <form className="form-data">
                            <IonInput 
                                placeholder="Nome de usuário"
                                fill="outline"
                                value={username}
                                onIonInput={(e) => setUsername(e.detail.value!)}
                            >
                                <IonIcon slot="start" icon={personOutline} aria-hidden />
                            </IonInput>

                            <IonInput 
                                placeholder="Senha"
                                fill="outline"
                                type="password"
                                value={password}
                                onIonInput={(e) => setPassword(e.detail.value!)}
                            >
                                <IonIcon slot="start" icon={keyOutline} aria-hidden />
                                <IonInputPasswordToggle slot="end" />
                            </IonInput>
                            <IonButton 
                                expand="block"
                                className="enter"
                                onClick={SubmitForm}
                            >
                                <IonIcon slot="start" icon={checkmark} aria-hidden />
                                ENTRAR
                            </IonButton>

                            <a id="forgot-password">Esqueci minha senha</a>
                        </form>
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
            />
        </IonPage>
    )
};

export default Login;
