import './ordereds.scss'
import { barcode, add } from "ionicons/icons"
import { IonContent } from "@ionic/react"
import { DashCardHeader } from "../../../../shared/components/dash-card-header/dash-card-header";
import { IonIcon } from "@ionic/react";
import OrderFilterForm from './OrderFilterForm/OrderFilterForm';
import { ButtonDefaultProps } from '../../../../shared/components/buttonDefault/buttonDefault';
const Ordereds: React.FC = () => {

  const buttonActions: ButtonDefaultProps[] = [
    {
      label: 'Conferir Pedido',
      color: '#20B9AE',
      strongColor: '#1ba79d',
      onclick: () => alert('aqiioooo'),
      icon: <IonIcon
        icon={barcode}
        size="small"
      />
    },
    {
      label: 'Criar Pedido',
      color: '#42B968',
      onclick: () => alert('aqiioooo'),
      strongColor: '#3ba75e',
      icon: <IonIcon
        icon={add}
        size="small"
      />
    }
  ];

  return (
    <>
      <IonContent>
        <main className='oredereds-main-content'>
          <DashCardHeader pageName="Gestor de Pedidos"
            actions={buttonActions}
          />
          <OrderFilterForm />
        </main>
      </IonContent>
    </>
  )
};

export default Ordereds;