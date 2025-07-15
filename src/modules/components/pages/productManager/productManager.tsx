import './productManager.scss'
import { barcode, add } from "ionicons/icons"
import { IonContent } from "@ionic/react"
import { DashCardHeader } from "../../../../shared/components/dash-card-header/dash-card-header";
import { IonIcon } from "@ionic/react";
import { ButtonDefaultProps } from '../../../../shared/components/buttonDefault/buttonDefault';
import { useState } from 'react';
import Pagination from '../../../../shared/components/pagination/pagination';
import OrderFilterForm from '../ordereds/OrderFilterForm/OrderFilterForm';
import TableOrdereds from '../ordereds/table-ordereds/table-ordereds';
import ProductFilterForm from './productFilterForm/productFilterForm';
import TableProducts from './table-products/table-products';

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


const ProductManager: React.FC = () => {
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
      "id": 1,
      "image": null,
      "hasVariation": true,
      "variationCount": "03",
      "costPrice": "--",
      "title": "CAMISA SOCIAL",
      "code": "--",
      "supplier": "TESTE",
      "retailPrice": "--",
      "wholesalePrice": "--",
      "cardRetailPrice": "--",
      "cardWholesalePrice": "--",
      "category": "CAMISA SOCIAL",
      "stock": "TEM VARIAÇÃO",
      "stockCode": "03",
      "registrationDate": "30/06/2025 ÀS 10:00",
      "status": "ATIVO",
      "statusCode": "03"
    },
    {
      "id": 2,
      "image": null,
      "hasVariation": true,
      "variationCount": "02",
      "costPrice": "--",
      "title": "CAMISA POLO",
      "code": "--",
      "supplier": "TESTE",
      "retailPrice": "--",
      "wholesalePrice": "--",
      "cardRetailPrice": "--",
      "cardWholesalePrice": "--",
      "category": "POLO JUVENIL",
      "stock": "TEM VARIAÇÃO",
      "stockCode": "100000001",
      "registrationDate": "30/06/2025 ÀS 10:00",
      "status": "ATIVO",
      "statusCode": "100000001"
    },
    {
      "id": 3,
      "image": null,
      "hasVariation": false,
      "variation": "SIM",
      "costPrice": "--",
      "title": "528181",
      "code": "--",
      "supplier": "TESTE",
      "retailPrice": "R$ 45,00",
      "wholesalePrice": "R$ 35,00",
      "cardRetailPrice": "R$ 42,00",
      "cardWholesalePrice": "R$ 32,00",
      "category": "SSSS",
      "stock": "TEM VARIAÇÃO",
      "stockCode": "--",
      "registrationDate": "27/06/2025 ÀS 15:34",
      "status": "ATIVO",
      "statusCode": "--"
    },
    {
      "id": 4,
      "image": null,
      "hasVariation": false,
      "variation": "SIM",
      "costPrice": "--",
      "title": "CAMISA",
      "code": "--",
      "supplier": "TESTE",
      "retailPrice": "R$ 50,00",
      "wholesalePrice": "R$ 40,00",
      "cardRetailPrice": "R$ 47,00",
      "cardWholesalePrice": "R$ 37,00",
      "category": "SSSS",
      "stock": "TEM VARIAÇÃO",
      "stockCode": "--",
      "registrationDate": "26/06/2025 ÀS 12:34",
      "status": "ATIVO",
      "statusCode": "--"
    },
    {
      "id": 5,
      "image": null,
      "hasVariation": false,
      "variation": "SIM",
      "costPrice": "--",
      "title": "HJBJHKBKBMJ",
      "code": "--",
      "supplier": "TESTE",
      "retailPrice": "R$ 25,00",
      "wholesalePrice": "R$ 20,00",
      "cardRetailPrice": "R$ 23,00",
      "cardWholesalePrice": "R$ 18,00",
      "category": "BERMUDAS",
      "stock": "TEM VARIAÇÃO",
      "stockCode": "--",
      "registrationDate": "26/06/2025 ÀS 12:23",
      "status": "ATIVO",
      "statusCode": "--"
    }
  ];


  return (
    <>
      <IonContent>
        <main className='product-manager-main-content'>
          <DashCardHeader pageName="Gestor de Produtos"
            actions={buttonActions}
          />
          <ProductFilterForm />

          <div style={{ backgroundColor: "#ffffff" }}>
            <TableProducts data={itensTable} />
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

export default ProductManager;