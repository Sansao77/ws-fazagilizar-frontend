import { 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonBadge, 
    IonIcon, 
    IonCardContent, 
    IonSelect, 
    IonSelectOption 
} from "@ionic/react"
import { trendingDownOutline, trendingUpOutline } from "ionicons/icons";
import './sale-card.scss'
import { ISaleCard } from "../../../modules/interfaces/sale-card";

interface Props{
    data: ISaleCard,
}

const SaleCard = ({data}:Props) =>{
    return (
        <IonCard className="ion-card default-container">
            <IonCardHeader className="header">
                <IonCardTitle class="title">Total de Vendas</IonCardTitle>
                <IonBadge class="data-bagde" style={
                    (data.trendingValue < 0)?
                    {"backgroundColor": "#F47A362B", "color":"#F44236"}
                    :
                    {"backgroundColor": "#0AC17426", "color":"#20B9AE"}
                    }>
                    <IonIcon 
                    icon={(data.trendingValue < 0)? trendingDownOutline: trendingUpOutline}
                    size="small"
                    />

                    <span>{data.trendingValue.toFixed(1)}%</span>
                </IonBadge>
            </IonCardHeader>

            <IonCardContent class="content">
                <h1>{data.salesValue}</h1>

                <IonSelect 
                aria-label="Fruit" 
                interface="popover"
                justify="start"
                label="Este "
                value="mes"
                class="select-month"
                >
                    <IonSelectOption value="semana">Semana</IonSelectOption>
                    <IonSelectOption value="mes">Mês</IonSelectOption>
                    <IonSelectOption value="ano">Ano</IonSelectOption>
                </IonSelect>
            </IonCardContent>
        </IonCard>
    )
}

export default SaleCard;