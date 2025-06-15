import { IonContent, IonIcon, IonItem, IonList, IonPopover } from "@ionic/react";
import DashHeader from "../../../../../shared/components/dash-header/DashHeader";
import { IBreadcrumbs } from "../../../../interfaces/sidebar";
import './configurations.scss'
import { 
    barChartOutline, 
    cashOutline, 
    cogOutline, 
    copyOutline, 
    expandOutline, 
    informationCircleOutline, 
    logoWhatsapp, 
    mapOutline, 
    pricetagOutline, 
    printOutline, 
    serverOutline, 
    timeOutline 
} from "ionicons/icons";
import { useState } from "react";

const ButtonConfig: React.FC<{id?:string, icon:string, title: string}> = ({id,icon, title}) =>{
    return (
        <button id={id} className="config-button">
            <IonIcon icon={icon} className="icon" />

            <span className="title">{title}</span>
        </button>
    )
}

const Configurations:React.FC = () =>{
    
    const buttons = [
        {icon: copyOutline, title: "Layout"},
        {icon: barChartOutline, title: "Banners Promocionais"},
        {icon: expandOutline, title: "Definir tamanhos"},
        {icon: serverOutline, title: "Categorias"},
        {icon: cogOutline, title: "Dados"},
        {icon: logoWhatsapp, title: "Configuração Chatbot"},
        {icon: timeOutline, title: "Tempo de Cancelamento \n Automatico Pedido"},
        {icon: informationCircleOutline, title: "Botões Informações"},
        {id: "hover-configurations-store", icon: printOutline, title: "Configurações \n loja / impressão"},
        {id: "hover-configurations-discount", icon: pricetagOutline, title: "Configurações \n Desconto"},
    ]

    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            },
            {
                text: 'Gestor de Empresas',
                route: '/home/my-store/branch-manager'
            },
            {
                text: 'sapatariateste',
                route: '/404'
            },
            {
                text: 'Configurações',
                route: '/home/my-store/configurations'
            },
        ]
    }

    return (
        <IonContent>
            <main>
                <DashHeader title="Configurações | SAPATARIA TESTE" breadcrumbs={breadcrumbs.breadcrumbs}/>

                <section className="grid-buttons">
                    {buttons.map(x=>(
                        <ButtonConfig id={x.id} icon={x.icon} title={x.title}></ButtonConfig>
                    ))}
                </section>
            </main>

            <IonPopover 
            trigger="hover-configurations-store"
            side="bottom"
            alignment="center"
            triggerAction="hover"
            >
                <IonContent>
                    <IonItem color='primary'>
                        <IonIcon slot="start" icon={mapOutline}></IonIcon>
                        <span>Lojas</span>
                    </IonItem>

                    <IonItem color='primary'>
                        <IonIcon slot="start" icon={printOutline}></IonIcon>
                        <span>Formas de impressão</span>
                    </IonItem>
                </IonContent>
            </IonPopover>

            <IonPopover 
            trigger="hover-configurations-discount"
            triggerAction="hover"
            alignment="center"
            side="bottom"
            >
                <IonContent>
                    <IonItem color='primary'>
                        <IonIcon slot="start" icon={cashOutline}></IonIcon>
                        <span>Desconto Pagamento</span>
                    </IonItem>

                    <IonItem color='primary'>
                        <IonIcon slot="start" icon={cashOutline}></IonIcon>
                        <span>Desconto Produtos</span>
                    </IonItem>

                    <IonItem color='primary'>
                        <IonIcon slot="start" icon={pricetagOutline}></IonIcon>
                        <span>Gestor de Cupons</span>
                    </IonItem>
                </IonContent>
            </IonPopover>
        </IonContent>
    );
}

export default Configurations;