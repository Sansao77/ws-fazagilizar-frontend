import { ITableRequests, ITableSalers } from "../../modules/interfaces/table";

export const lastRequests:ITableRequests[] = [
    {
        date: '30/12/23',
        loja: 'FEIRA',
        vendedor: 'MARIA',
        codigo: '698FD53S85',
        descricao: 'CALÇA JEANS',
        quantidade: 50,
        valor: 3200.00,
    },
    {
        date: '30/12/23',
        loja: 'ONLINE',
        vendedor: 'JOSÉ',
        codigo: '698FD53S85',
        descricao: 'CROPPED',
        quantidade: 100,
        valor: 8200.00,
    },
    {
        date: '30/12/23',
        loja: 'LOJA 1',
        vendedor: 'ANA',
        codigo: '698FD53S85',
        descricao: 'VESTIDO EST.',
        quantidade: 25,
        valor: 1200.00,
    }
];

export const bestSalers:ITableSalers[] = [
    {
        loja: 'FEIRA',
        vendedor: 'MARIA',
        venda_total: 35200.00,
    },
    {
        loja: 'ONLINE',
        vendedor: 'JOSÉ',
        venda_total: 12000.00,
    },
    {
        loja: 'LOJA 1',
        vendedor: 'ANA',
        venda_total: 11200.00,
    }
]