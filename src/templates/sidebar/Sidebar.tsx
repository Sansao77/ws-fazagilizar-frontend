import React, { useState } from 'react';
import './sidebar.scss';
import { allMenu } from './sidebar-content';
import { IonContent, IonHeader, IonIcon, IonImg, IonMenu } from '@ionic/react';
import { chevronUp,chevronDown } from 'ionicons/icons';
import { IMenuItem } from '../../interfaces/sidebar';

const Sidebar: React.FC = () => {
    const [sideContent, setSideContent] = useState(allMenu);

    function setVisibility(title: string){
        const updateSideBar = (sideContent:IMenuItem[], title: string):IMenuItem[] => 
            sideContent.map((content) => 
                content.title === title?
                { ...content, showChildren: !content.showChildren }
                : content.children
                ? { ...content, children: updateSideBar(content.children, title)}
                : content
            )

        setSideContent((content) => updateSideBar(content, title));
    }

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
                <div className='padding-inside'>
                    {sideContent.map((x)=>
                        (x.children === undefined)? 
                        (
                        <a href={x.route} key={x.title} className='align-component first-component'>
                            <div className='align-link'>
                                {x.icon &&
                                    <IonIcon 
                                    slot='icon-only'
                                    icon={x.icon}
                                    />
                                }

                                <span>{x.title}</span>
                            </div>
                        </a>
                        ):
                        (
                        <div key={x.title}>
                            <span className='align-component first-component' onClick={() => setVisibility(x.title)}>
                                <div className='align-link'>
                                    {x.icon &&
                                        <IonIcon 
                                        slot='icon-only'
                                        icon={x.icon}
                                        />
                                    }

                                    <span>{x.title}</span>
                                </div>

                                <IonIcon
                                slot='icon-only'
                                icon={x.showChildren ? chevronUp: chevronDown} />
                            </span>

                            {(x.showChildren === true) && 
                                x.children.map(y => 
                                    (y.children === undefined)?
                                    (
                                        <a href={y.route} key={y.title}  className='align-component'>
                                            <div className='align-link'>
                                                {y.icon &&
                                                    <IonIcon 
                                                    slot='icon-only'
                                                    icon={y.icon}
                                                    className='border-inside'
                                                    />
                                                }

                                                <span className={y.icon? '' : 'border-inside'}>{y.title}</span>
                                            </div>
                                        </a>
                                    ):
                                    (
                                        <div key={y.title}>
                                            <span className='align-component'>
                                                <div className='align-link'>
                                                    {y.icon &&
                                                        <IonIcon 
                                                        slot='icon-only'
                                                        icon={y.icon}
                                                        className='border-inside'
                                                        />
                                                    }

                                                    <span className={y.icon? '' : 'border-inside'}>{y.title}</span>
                                                </div>
                                            </span>

                                            <div className='padding-inside'>
                                                {y.children.map(z =>
                                                    <a href={z.route} key={z.title} className='align-component'>
                                                        <div className='align-link gray-component'>
                                                            {z.icon &&
                                                                <IonIcon 
                                                                slot='icon-only'
                                                                icon={z.icon}
                                                                className='border-inside'
                                                                />
                                                            }

                                                            <span className={z.icon? '' : 'border-inside'}>{z.title}</span>
                                                        </div>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        )
                    )}
                </div>
            </IonContent>
        </IonMenu>
    );
}

export default Sidebar;