import { IonContent } from "@ionic/react";
import DashHeader from "../../../../../shared/components/dash-header/DashHeader";
import { IBreadcrumbs } from "../../../../interfaces/sidebar";

const Configurations:React.FC = () =>{
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

                <section>
                    
                </section>
            </main>
        </IonContent>
    );
}

export default Configurations;