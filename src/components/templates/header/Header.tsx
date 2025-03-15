import React from 'react';
import './header.scss';
import { IonHeader, IonIcon, IonButton, IonToolbar, IonMenuButton } from '@ionic/react';
import { menuController } from '@ionic/core';
import { briefcaseOutline, expandOutline, informationCircleOutline, personCircleOutline } from 'ionicons/icons';

interface Props{
    name: string,
}

const Header:React.FC<Props> = ({name}:Props) => {
    const openMenu = async() =>{
        await menuController.open('side-menu');
    }

    return (
        <IonHeader id='app'>
            <IonToolbar>
                <div className='header'>
                    <IonMenuButton />
                    {/*<IonButton onClick={openMenu} fill='clear'>
                        <IonIcon 
                        slot='icon-only' 
                        icon={expandOutline}
                        className='gray-element' />
                    </IonButton>*/}

                    <div className='user-data'>
                        <div className='products-display'>
                            <span className='products-value'>
                                0
                            </span>

                            <IonIcon 
                            slot='icon-only' 
                            icon={briefcaseOutline}
                            className='gray-element' />
                        </div>

                        <div className='content spacing-text'>
                            <IonIcon 
                            slot='icon-only' 
                            icon={informationCircleOutline} 
                            className='gray-element' />

                            <p className='gray-element'>
                                Atualizações
                            </p>
                        </div>

                        <div className='content'>
                            <IonIcon 
                            slot='icon-only' 
                            icon={personCircleOutline} 
                            size='large' />

                            <p className='upper-text'>{name}</p>
                        </div>
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;