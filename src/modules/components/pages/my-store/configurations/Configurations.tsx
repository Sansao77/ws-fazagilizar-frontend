import { IonContent, IonIcon } from "@ionic/react";
import DashHeader from "../../../../../shared/components/dash-header/DashHeader";
import { IBreadcrumbs } from "../../../../interfaces/sidebar";
import './configurations.scss'
import { barChartOutline, codeSlashOutline, cogOutline, copyOutline, expandOutline, informationCircleOutline, logoWhatsapp, pricetagOutline, printOutline, serverOutline, timeOutline } from "ionicons/icons";

const ButtonConfig: React.FC<{icon:string, title: string}> = ({icon, title}) =>{
    return (
        <div className="config-button">
            <IonIcon icon={icon} className="icon" style={{}}/>

            <span className="title">{title}</span>
        </div>
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
        {icon: printOutline, title: "Configurações \n loja / impressão"},
        {icon: pricetagOutline, title: "Configurações \n Desconto"},
    ]

    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            },
            {
                text: 'Gestor de Empresas',
                route: '/404'
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
                        <ButtonConfig icon={x.icon} title={x.title}></ButtonConfig>
                    ))}
                </section>
            </main>
        </IonContent>
    );
}

export default Configurations;