import { IonButton, IonIcon } from "@ionic/react"
import './default-button.scss'
import { IDefaultButton } from "../../../modules/interfaces/default-button";

interface Props extends IDefaultButton{};

const DefaultButton: React.FC<Props> = ({text, icon, iconOnly, backgroundColor, route}) => {
    return (
        <IonButton 
        routerLink={route}
        slot={iconOnly? "icon-only": ""}
        style={{
            '--background': backgroundColor,
        }}>
            <IonIcon className="ion-icon" slot="start" icon={icon}></IonIcon>

            <span className="button-text">{text}</span>
        </IonButton>
    )
}

export default DefaultButton;