import { IonContent } from "@ionic/react";
import DefaultButton from "../../../../shared/components/default-button/DefaultButton";
import { buttonsContent } from "./buttons-content";
import './product-manager.scss'
import { buttonColors } from "../../../../shared/enums";

import { addOutline, funnelOutline } from 'ionicons/icons'

const ProductManager: React.FC = () => {
    return (
        <IonContent>
            <main>
                <div className="grid-routes">
                    {buttonsContent.map(button => (
                        <DefaultButton 
                        icon={button.icon} 
                        text={button.text} 
                        backgroundColor={button.backgroundColor}
                        route={button.route}
                        />
                    ))}
                </div>

                <div style={{display: "grid"}}>
                    <DefaultButton text="Adicionar Produto" icon={addOutline} backgroundColor={buttonColors.VERDE_ESCURO} />
                    <DefaultButton text="Filtrar" icon={funnelOutline} backgroundColor={buttonColors.VERDE_ESCURO} />
                    <DefaultButton text="Adicionar Produtos em Massa" icon={addOutline} backgroundColor={buttonColors.VERDE_ESCURO} />
                </div>
            </main>
        </IonContent>
    );
};

export default ProductManager;