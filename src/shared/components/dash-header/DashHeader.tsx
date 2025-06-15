import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { IBreadcrumbs } from '../../../modules/interfaces/sidebar';

import './dash-header.scss';

interface Props extends IBreadcrumbs{};

const DashHeader:React.FC<Props> = ({title, breadcrumbs}:Props) =>{
    return (
        <section className="dash-header">
            <span className="title">{title}</span>

            <div className="dash-outline">
                <IonIcon
                icon={homeOutline}
                size="small"
                />

                <IonBreadcrumbs>
                    {breadcrumbs && (
                        breadcrumbs.map((breadcrumb, index) => (
                            <IonBreadcrumb key={index} href={breadcrumb.route} style={index === 0? {"color":"#73439A"}:{"color":"#000000"}}>
                                {breadcrumb.text}
                            </IonBreadcrumb>
                        ))
                    )}
                </IonBreadcrumbs>
            </div>
        </section>
    )
};

export default DashHeader;