import { 
    Table, 
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
//import { ITableRequests, ITableSalers } from "../../../../interfaces/table";
import './table.scss'

interface Props{
    data: any[],
    type: string
    width: number
}

const TableComponent: React.FC<Props> = ({data, type, width}) =>{

    return (
        <TableContainer>
            <Table sx={{ minWidth: width }} size="small" aria-label="a dense table">
                <TableHead>
                    {(type === "pedidos")? (
                        <TableRow sx={{ '& th': { fontWeight: 'bold' } }}>
                            <TableCell>Data</TableCell>
                            <TableCell>LOJA</TableCell>
                            <TableCell>VENDEDOR</TableCell>
                            <TableCell>CÓDIGO</TableCell>
                            <TableCell>DESCRIÇÃO</TableCell>
                            <TableCell>QTD.</TableCell>
                            <TableCell>VALOR</TableCell>
                        </TableRow>
                        ):
                        (
                        <TableRow sx={{ '& th': { fontWeight: 'bold' } }}>
                            <TableCell>LOJA</TableCell>
                            <TableCell>VENDEDOR</TableCell>
                            <TableCell>TOTAL VENDAS</TableCell>
                        </TableRow>
                        )
                    }
                </TableHead>

                <TableBody>
                    {data.map((row) =>(
                        <TableRow
                        key={row.vendedor}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {(type === "pedidos")? (
                                <>
                                    <TableCell component="th" scope="row">{(row.date)? row.date : "-"}</TableCell>
                                    <TableCell component="th" scope="row">{row.loja}</TableCell>
                                    <TableCell component="th" scope="row">{row.vendedor}</TableCell>
                                    <TableCell component="th" scope="row">{row.codigo}</TableCell>
                                    <TableCell component="th" scope="row">{row.descricao}</TableCell>
                                    <TableCell component="th" scope="row">{row.quantidade} PÇ</TableCell>
                                    <TableCell component="th" scope="row">R$ {row.valor}</TableCell>
                                </>
                                ):
                                (
                                    <>
                                        <TableCell component="th" scope="row">{row.loja}</TableCell>
                                        <TableCell component="th" scope="row">{row.vendedor}</TableCell>
                                        <TableCell component="th" scope="row">R$ {row.venda_total}</TableCell>
                                    </>
                                )
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;