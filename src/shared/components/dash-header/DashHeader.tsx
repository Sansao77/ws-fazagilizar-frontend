import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { IBreadcrumbs } from '../../../modules/interfaces/sidebar';

import './dash-header.scss';
import { fullMenu } from '../../../modules/components/templates/sidebar/sidebar-content';

interface Props extends IBreadcrumbs{};

function createBreadcrumbsRoutes(titles: string[]):{text:string, route?:string}[]{
    const breadcrumbs:{text:string, route?:string}[] = [];

    titles.forEach(x =>{
        breadcrumbs.push({text: x, route: (fullMenu.find(e => e.title == x)?.route) || '/404'});
    });

    return breadcrumbs;
}

const DashHeader:React.FC<Props> = ({title, breadcrumbs}:Props) =>{
    const routes = createBreadcrumbsRoutes(breadcrumbs);

    return (
        <section className="dash-header">
            <span className="title">{title}</span>

            <div>
                <IonIcon
                icon={homeOutline}
                size="small"
                />

                <IonBreadcrumbs maxItems={4}>
                    {routes && (
                        routes.map((e, index) => (
                            <IonBreadcrumb key={index} href={e.route} style={index === 0? {"color":"#73439A"}:{"color":"#000000"}}>
                                {e.text}
                            </IonBreadcrumb>
                        ))
                    )}
                </IonBreadcrumbs>
            </div>
        </section>
    )
};

export default DashHeader;