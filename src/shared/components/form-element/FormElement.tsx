import { IonButton, IonImg } from '@ionic/react';
import './form-element.scss'
import { useState } from 'react';

interface Props{
    title: string,
    imgSrc?: string,
}

const FormElement = ({title, imgSrc}:Props) =>{
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className='form default-container'>
            <div className='type-pay'>
                <IonImg
                src={imgSrc}
                alt='imagem_pagamento'
                class='img-pay'
                />

                <span style={{'textTransform': 'capitalize'}}>{title}</span>
            </div>

            <IonButton 
            onClick={() => setIsSelected(!isSelected)}
            color={isSelected? "": "success"}
            className='button-pay'>
                {isSelected? 'Selecionado':'Selecionar'}
            </IonButton>
        </div>
    )
}

export default FormElement;