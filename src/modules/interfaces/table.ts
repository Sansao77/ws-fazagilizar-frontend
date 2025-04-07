export interface ITableRequests{
    date?: string;
    loja: string;
    vendedor: string;
    codigo: string;
    descricao: string;
    quantidade: number;
    valor: number;
}

export interface ITableSalers{
    loja: string;
    vendedor: string;
    venda_total: number;
}