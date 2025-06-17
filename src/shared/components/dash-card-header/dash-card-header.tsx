import { IonIcon } from "@ionic/react"
import { homeOutline } from "ionicons/icons"
import './dash-card-header.scss'
import { ButtonDefault, ButtonDefaultProps } from "../buttonDefault/buttonDefault";

export type DashCardHeaderProps = {
    actions?: ButtonDefaultProps[];
    pageName?: string;
}

export function DashCardHeader({ pageName, actions }: DashCardHeaderProps) {

    function capitalize(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <section className="dash-header">
            <div className="leftContainer">
                <span className="title">
                    Dashboard
                    <span className="pageName">
                        {pageName && pageName.length > 0 && `/${pageName.toUpperCase()}`}
                    </span>
                </span>
                <div className="dash-outline">
                    <IonIcon
                        icon={homeOutline}
                        size="small"
                    />
                    <span>{capitalize(pageName!)}</span>
                </div>
            </div>

            <div className="containerButtons">
                {actions!.map((action, index) => (
                    <ButtonDefault
                        color={action.color}
                        icon={action.icon}
                        label={action.label}
                        strongColor={action.strongColor}
                        onclick={action.onclick}
                        key={index} />
                ))}
            </div>
        </section>
    );
}
