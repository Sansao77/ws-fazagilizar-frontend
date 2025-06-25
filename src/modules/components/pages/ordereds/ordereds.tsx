import './ordereds.scss'
import { barcode, add } from "ionicons/icons"
import { IonContent } from "@ionic/react"
import { DashCardHeader } from "../../../../shared/components/dash-card-header/dash-card-header";
import { IonIcon } from "@ionic/react";
import OrderFilterForm from './OrderFilterForm/OrderFilterForm';
import { ButtonDefaultProps } from '../../../../shared/components/buttonDefault/buttonDefault';
import TableOrdereds from './table-ordereds/table-ordereds';
import { useState } from 'react';
import Pagination from '../../../../shared/components/pagination/pagination';

const mockPaginationData = {
  current_page: 1,
  data: [
    {
      id: 2,
      id_categoria: 1,
      token: "7552e6c8-b9e9-4b8c-9eb2-39bbe699e019",
      ref: "ABC123",
      titulo: "Produto de Exemplo",
      descricao: "Descrição do produto de exemplo.",
      preco_varejo: 49.9,
    }
  ],
  first_page_url: "http://localhost:8000/api/products?page=1",
  from: 1,
  last_page: 20,
  last_page_url: "http://localhost:8000/api/products?page=20",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=1",
      label: "1",
      active: true
    },
    {
      url: "http://localhost:8000/api/products?page=2",
      label: "2",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=3",
      label: "3",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=4",
      label: "4",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=5",
      label: "5",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=6",
      label: "6",
      active: false
    },
    {
      url: "http://localhost:8000/api/products?page=2",
      label: "Next &raquo;",
      active: false
    }
  ],
  next_page_url: "http://localhost:8000/api/products?page=2",
  path: "http://localhost:8000/api/products",
  per_page: 15,
  prev_page_url: null,
  to: 15,
  total: 2054
};


const Ordereds: React.FC = () => {
  const [currentPaginationData, setCurrentPaginationData] = useState<any>(mockPaginationData);

  const handlePageChange = (page: number) => {
    console.log(`Mudando para página ${page}`);

    // Aqui você faria a chamada para sua API
    // fetchProducts(page).then(response => {
    //   setCurrentPaginationData(response.data);
    // });

    // Para demonstração, vamos simular a mudança de página
    const newData = {
      ...currentPaginationData,
      current_page: page,
      from: (page - 1) * currentPaginationData.per_page + 1,
      to: Math.min(page * currentPaginationData.per_page, currentPaginationData.total),
      prev_page_url: page > 1 ? `http://localhost:8000/api/products?page=${page - 1}` : null,
      next_page_url: page < currentPaginationData.last_page ? `http://localhost:8000/api/products?page=${page + 1}` : null,
      links: currentPaginationData.links.map((link: any) => ({
        ...link,
        active: link.label === page.toString()
      }))
    };

    setCurrentPaginationData(newData);
  };


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
    },
    {
      "internalId": 508187,
      "order": 2055,
      "shippingMethodAndPaymentMethod": "Entrega - Cartão de Crédito",
      "valueAndQuantity": "R$ 267.45",
      quantity: 1,
      "store": "MODAS ELITE",
      seller: "MARINA SANTOS",
      "client": "JOÃO SILVA OLIVEIRA",
      clientPhone: "+55 (11) 99234-5678",
      registrationDate: "14/01/2024 at 09:15",
      registrationStatus: "CRIADO",
      "sent": false,
      "checked": true,
      "sentToERP": false
    },
    {
      "internalId": 508188,
      "order": 2056,
      "shippingMethodAndPaymentMethod": "Retirada na Loja - PIX",
      "valueAndQuantity": "R$ 89.90",
      quantity: 2,
      "store": "FASHION CENTER",
      seller: "RODRIGO LIMA",
      "client": "MARIA FERNANDA COSTA",
      clientPhone: "+55 (21) 97665-4321",
      registrationDate: "14/01/2024 at 11:42",
      registrationStatus: "EM TRANSPORTE",
      "sent": true,
      "checked": false,
      "sentToERP": true
    },
    {
      "internalId": 508189,
      "order": 2057,
      "shippingMethodAndPaymentMethod": "Entrega - Boleto Bancário",
      "valueAndQuantity": "R$ 445.60",
      quantity: 5,
      "store": "MEGA STORE",
      seller: "FELIPE ARAÚJO",
      "client": "CARLOS EDUARDO MENDES",
      clientPhone: "+55 (85) 98123-9876",
      registrationDate: "14/01/2024 at 14:28",
      registrationStatus: "FINALIZADO",
      "sent": true,
      "checked": true,
      "sentToERP": true
    },
    {
      "internalId": 508190,
      "order": 2058,
      "shippingMethodAndPaymentMethod": "Retirada na Loja - Cartão de Débito",
      "valueAndQuantity": "R$ 78.50",
      quantity: 1,
      "store": "BOUTIQUE ELEGANCE",
      seller: "ANA PAULA",
      "client": "LUCIANA MOREIRA SANTOS",
      clientPhone: "+55 (31) 99887-1234",
      registrationDate: "15/01/2024 at 08:33",
      registrationStatus: "CANCELADO",
      "sent": false,
      "checked": false,
      "sentToERP": false
    },
    {
      "internalId": 508191,
      "order": 2059,
      "shippingMethodAndPaymentMethod": "Entrega - PIX",
      "valueAndQuantity": "R$ 198.75",
      quantity: 3,
      "store": "URBAN STYLE",
      seller: "THIAGO COSTA",
      "client": "RAFAELA ALMEIDA SILVA",
      clientPhone: "+55 (47) 98765-4321",
      registrationDate: "15/01/2024 at 16:07",
      registrationStatus: "CRIADO",
      "sent": false,
      "checked": true,
      "sentToERP": false
    },
    {
      "internalId": 508192,
      "order": 2060,
      "shippingMethodAndPaymentMethod": "Retirada na Loja - Dinheiro",
      "valueAndQuantity": "R$ 356.20",
      quantity: 4,
      "store": "PREMIUM OUTLET",
      seller: "GABRIELA ROCHA",
      "client": "ANTONIO JOSÉ FERREIRA",
      clientPhone: "+55 (62) 99456-7890",
      registrationDate: "15/01/2024 at 19:51",
      registrationStatus: "EM TRANSPORTE",
      "sent": true,
      "checked": false,
      "sentToERP": false
    },
    {
      "internalId": 508193,
      "order": 2061,
      "shippingMethodAndPaymentMethod": "Entrega - Cartão de Crédito",
      "valueAndQuantity": "R$ 523.90",
      quantity: 6,
      "store": "SUPER FASHION",
      seller: "RICARDO SANTOS",
      "client": "PATRÍCIA LIMA OLIVEIRA",
      clientPhone: "+55 (71) 98234-5678",
      registrationDate: "16/01/2024 at 10:22",
      registrationStatus: "FINALIZADO",
      "sent": true,
      "checked": true,
      "sentToERP": true
    },
    {
      "internalId": 508194,
      "order": 2062,
      "shippingMethodAndPaymentMethod": "Retirada na Loja - PIX",
      "valueAndQuantity": "R$ 67.40",
      quantity: 1,
      "store": "TREND STORE",
      seller: "VANESSA CARVALHO",
      "client": "BRUNO HENRIQUE DIAS",
      clientPhone: "+55 (51) 97123-4567",
      registrationDate: "16/01/2024 at 13:15",
      registrationStatus: "CRIADO",
      "sent": false,
      "checked": false,
      "sentToERP": false
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

          <div style={{ backgroundColor: "#ffffff" }}>
            <TableOrdereds data={itensTable} />
            <Pagination
              paginationData={currentPaginationData}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
      </IonContent>
    </>
  )
};

export default Ordereds;