import { IonButton, IonIcon } from "@ionic/react"
import './default-button.scss'
import { IDefaultButton } from "../../../modules/interfaces/default-button";

interface Props extends IDefaultButton{};

const DefaultButton: React.FC<Props> = ({id, text, icon, iconOnly, backgroundColor, route, ...rest}) => {
    return (
        <IonButton
        {...rest}
        id={id}
        routerLink={route}
        slot={iconOnly? "icon-only": ""}
        style={{
            '--background': backgroundColor,
        }}>
            <IonIcon className="ion-icon" slot={iconOnly? 'icon-only':'start'} icon={icon}></IonIcon>

            <span className="button-text">{text}</span>
        </IonButton>
    )
}

export default DefaultButton;