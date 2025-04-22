import { ISaleCard } from "../../modules/interfaces/sale-card";

export const SalesCardData:ISaleCard[] = [
    {
        id: "1",
        salesValue: 3856,
        trendingValue: 10
    },
    {
        id: "2",
        salesValue: 1052,
        trendingValue: 30
    },
    {
        id: "3",
        salesValue: 980,
        trendingValue: 5
    },
    {
        id: "4",
        salesValue: 750,
        trendingValue: -1
    },
    {
        id: "5",
        salesValue: 856,
        trendingValue: 5
    }
]

export const FormDataPayment = [
    {title: " dinheiro"},
    {title: " pix"},
    {title: " transferência"},
    {title: " boleto"},
    {title: " cheque"},
    {title: " depósito"},
    {title: " débito"},
    {title: " crédito"},
    {title: " fiado"},
    {title: " picPay"},
    {title: " mercado Pago"},
    {title: " Pic Seguro"},
];

export const FormDataDelivery = [
    {title: " retirada na loja"},
    {title: " correios (PAC)"},
    {title: " sedex"},
    {title: " excursão"},
    {title: " motoTaxi"},
    {title: " uber"},
    {title: " aéreo"},
    {title: " transportadora"},
    {title: " jadlog"},
    {title: " braspress"},
    {title: " jamef"},
    {title: " mandacaru"},
];

export const FormDataIntegration = [
    {title: " whatsapp"},
    {title: " sacolinha do instagram"},
    {title: " facebook pixel"},
    {title: " boleto"},
    {title: " google analitics"},
    {title: " google tag manager"},
    {title: " débito"},
];