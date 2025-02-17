import React from 'react';
import './header.scss';
import { IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import { briefcaseOutline, expandOutline, informationCircleOutline, personCircleOutline } from 'ionicons/icons';

const Header:React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <div className='header'>
                    <IonIcon 
                    slot='icon-only' 
                    icon={expandOutline}
                    className='gray-element'
                    ></IonIcon>

                    <div className='user-data'>
                        <div className='products-display'>
                            <span className='products-value'>
                                0
                            </span>

                            <IonIcon 
                            slot='icon-only' 
                            icon={briefcaseOutline}
                            className='gray-element'
                            ></IonIcon>
                        </div>

                        <div className='content'>
                            <IonIcon 
                            slot='icon-only' 
                            icon={informationCircleOutline}
                            className='gray-element'
                            ></IonIcon>

                            <p className='gray-text'>Atualizações</p>
                        </div>

                        <div className='content'>
                            <IonIcon 
                            slot='icon-only' 
                            icon={personCircleOutline} 
                            size='large'
                            ></IonIcon>

                            <p>JULY BEATRIZ</p>
                        </div>
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;