import { IonSelect, IonSelectOption } from "@ionic/react";
import './date-component.scss';

const DateComponent: React.FC = () =>{
    return (
        <div className="align-selects">
            <IonSelect
            aria-label="mes-inicial" 
            interface="popover"
            justify="start"
            label="De "
            value="janeiro"
            class="select-month"
            >
                <IonSelectOption value='janeiro'>JAN</IonSelectOption>
                <IonSelectOption value='fevereiro'>FEV</IonSelectOption>
                <IonSelectOption value='marco'>MAR</IonSelectOption>
                <IonSelectOption value='abril'>ABR</IonSelectOption>
                <IonSelectOption value='maio'>MAI</IonSelectOption>
                <IonSelectOption value='junho'>JUN</IonSelectOption>
                <IonSelectOption value='julho'>JUL</IonSelectOption>
                <IonSelectOption value='agosto'>AGO</IonSelectOption>
                <IonSelectOption value='setembro'>SET</IonSelectOption>
                <IonSelectOption value='outubro'>OUT</IonSelectOption>
                <IonSelectOption value='novembro'>NOV</IonSelectOption>
                <IonSelectOption value='dezembro'>DEZ</IonSelectOption>
            </IonSelect>

            <IonSelect
            aria-label="mes-final" 
            interface="popover"
            justify="start"
            label=" Até "
            value="dezembro"
            class="select-month"
            >
                <IonSelectOption value='janeiro'>JAN</IonSelectOption>
                <IonSelectOption value='fevereiro'>FEV</IonSelectOption>
                <IonSelectOption value='marco'>MAR</IonSelectOption>
                <IonSelectOption value='abril'>ABR</IonSelectOption>
                <IonSelectOption value='maio'>MAI</IonSelectOption>
                <IonSelectOption value='junho'>JUN</IonSelectOption>
                <IonSelectOption value='julho'>JUL</IonSelectOption>
                <IonSelectOption value='agosto'>AGO</IonSelectOption>
                <IonSelectOption value='setembro'>SET</IonSelectOption>
                <IonSelectOption value='outubro'>OUT</IonSelectOption>
                <IonSelectOption value='novembro'>NOV</IonSelectOption>
                <IonSelectOption value='dezembro'>DEZ</IonSelectOption>
            </IonSelect>

            <IonSelect
            aria-label="ano" 
            interface="popover"
            justify="start"
            label=" Ano "
            value="2024"
            class="select-month"
            >
                <IonSelectOption value='2025'>2025</IonSelectOption>
                <IonSelectOption value='2024'>2024</IonSelectOption>
            </IonSelect>
        </div>
    )
}

export default DateComponent;