import React from 'react';
import './sidebar.scss';
import { allMenu } from './sidebar-content';
import { IonContent, IonHeader, IonIcon, IonImg, IonMenu } from '@ionic/react';
import { chevronUp,chevronDown } from 'ionicons/icons';

const Sidebar: React.FC = () => {
    return (
        <IonMenu side='start' contentId='app' menuId='side-menu'>
            <IonHeader>
                <header>
                    <img 
                    src="/fazAgilizar.png" 
                    alt="logo" 
                    className='img-logo'
                    />

                    <div className='text-content'>
                        <span className='red-title'>EMPRESA ATUAL:</span>
                        <span className='enterprise-title'>SUPORTE 2025</span>
                        <a href="" className='link'>ACESSAR LOJA</a>
                    </div>

                    <span>NAVEGAÇÃO</span>
                </header>
            </IonHeader>

            <IonContent>
                <div>
                    {allMenu.map((x)=>
                        <a href={x.route} className='align-component'>
                            <div className='align-link'>
                                <IonIcon 
                                slot='icon-only'
                                icon={x.icon}
                                />

                                <span>{x.title}</span>
                            </div>

                            {x.children && 
                            <IonIcon
                            slot='icon-only'
                            icon={x.showChildren ? chevronUp: chevronDown}
                            />
                            }
                        </a>
                    )}
                </div>
            </IonContent>
        </IonMenu>
    );
}

export default Sidebar;