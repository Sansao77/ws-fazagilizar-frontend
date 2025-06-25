import './ordereds.scss'
import { barcode, add } from "ionicons/icons"
import { IonContent } from "@ionic/react"
import { DashCardHeader } from "../../../../shared/components/dash-card-header/dash-card-header";
import { IonIcon } from "@ionic/react";
import OrderFilterForm from './OrderFilterForm/OrderFilterForm';
import { ButtonDefaultProps } from '../../../../shared/components/buttonDefault/buttonDefault';
import TableOrdereds from './table-ordereds/table-ordereds';
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


  const itensTable = [
  {
    "internalId": 508186,
    "order": 2054,
    "shippingMethodAndPaymentMethod": "Retirada na Loja - Dinheiro",
    "valueAndQuantity": "R$ 132.81",
    quantity: 3,
    "store": "TEST SELLERS",
    seller: "CAVANI",
    "client": "WESLEI BARROS SOUZA",
    clientPhone: "+55 (81) 98577-7883",
    registrationDate: "13/01/2024 at 18:59",
    registrationStatus: "FINALIZADO",
    "sent": true,
    "checked": false,
    "sentToERP": false
  }
]

  
  return (
    <>
      <IonContent>
        <main className='oredereds-main-content'>
          <DashCardHeader pageName="Gestor de Pedidos"
            actions={buttonActions}
          />
          <OrderFilterForm />

          <div>
          <TableOrdereds data={itensTable}/>
          </div>
        </main>
      </IonContent>
    </>
  )
};

export default Ordereds;