import './table-ordereds.scss'
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox
} from "@mui/material";
import { checkmarkDoneOutline, documentTextOutline, printOutline } from "ionicons/icons";
import { ButtonDefault } from '../../../../../shared/components/buttonDefault/buttonDefault';
import { IonIcon } from '@ionic/react';

export type TableOrderedsProps = {
  data: any[];
}

const statusColors = {
  'FINALIZADO': '#42B968',
  'CANCELADO': '#F44236',
  'CRIADO': '#3E70C9',
  'EM TRANSPORTE': '#A567E2',
}


const TableOrdereds: React.FC<TableOrderedsProps> = ({ data }: TableOrderedsProps) => {

  return (
    <TableContainer>
      <Table className="table-ordereds" size="small" aria-label="Tabela de pedidos">
        <TableHead>
          <TableRow sx={{ '& th': { fontWeight: 'bold' } }}>
            <TableCell style={{ border: 'none' }}></TableCell> {/* Célula vazia para a coluna de checkbox */}
            <TableCell>ID <br /> Interno</TableCell>
            <TableCell>Pedido</TableCell>
            <TableCell>
              Forma Envio/
              <br />
              Pagamento
            </TableCell>
            <TableCell>Valor/Quant
              <br />
              Produtos</TableCell>
            <TableCell>Loja/Vendedor</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Dt. Cadastro/Status</TableCell>
            <TableCell>Enviado</TableCell>
            <TableCell>Conferido</TableCell>
            <TableCell>Enviado ERP</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.vendedor}
            >
              <TableCell>
                <Checkbox 
                  size="small"
                  // Você pode adicionar aqui as props necessárias como onChange, checked, etc.
                />
              </TableCell>
              <TableCell component="th" scope="row">{row.internalId}</TableCell>
              <TableCell component="th" scope="row">{row.order}</TableCell>
              <TableCell component="th" scope="row">{row.shippingMethodAndPaymentMethod}</TableCell>
              <TableCell component="th" scope="row">{row.valueAndQuantity} <br /> {row.quantity}</TableCell>
              <TableCell component="th" scope="row">{row.store} <br /> <strong>{row.seller}</strong></TableCell>
              <TableCell component="th" scope="row">{row.client} <br /> <strong>{row.clientPhone}</strong></TableCell>
              <TableCell component="th" scope="row">
                {row.registrationDate} <br />
                <span style={{
                  backgroundColor: statusColors[row.registrationStatus as keyof typeof statusColors],
                  color: '#fff',
                  padding: '0.2rem 0.5rem'
                }}>
                  <strong>{row.registrationStatus}</strong>
                </span>
              </TableCell>              
              <TableCell component="th" scope="row"> <span style={{ backgroundColor: row.sent ? '#42B968' : '#F44236', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>{row.sent ? "Sim" : "Não"}</span></TableCell>
              <TableCell component="th" scope="row"> <span style={{ backgroundColor: row.checked ? '#42B968' : '#F44236', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>{row.checked ? "Sim" : "Não"}</span></TableCell>
              <TableCell component="th" scope="row"> <span style={{ backgroundColor: row.sentToERP ? '#42B968' : '#F44236', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>{row.sentToERP ? "Sim" : "Não"}</span></TableCell>
              <TableCell component="th" scope="row" >
                <div style={{ display: 'flex', gap: '0rem', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                <ButtonDefault
                  icon={<IonIcon
                    icon={checkmarkDoneOutline}
                    size="small"
                  />}
                  strongColor='#20B9AE'
                  color='#20B9AE'
                />
                <ButtonDefault
                  icon={<IonIcon
                    icon={documentTextOutline}
                    size="small"
                  />}
                  strongColor='#3E70C9'
                  color='#3E70C9'
                />
                <ButtonDefault
                  icon={<IonIcon
                    icon={printOutline}
                    size="small"
                  />}
                  strongColor='#36394F'
                  color='#36394F'
                />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TableOrdereds;