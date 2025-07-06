import './table-products.scss'
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox
} from "@mui/material";
import { 
  checkmarkDoneOutline, 
  documentTextOutline, 
  printOutline,
  imageOutline,
  closeOutline,
  createOutline
} from "ionicons/icons";
import { ButtonDefault } from '../../../../../shared/components/buttonDefault/buttonDefault';
import { IonIcon } from '@ionic/react';

export type TableProductsProps = {
  data: any[];
}

const statusColors = {
  'ATIVO': '#42B968',
  'INATIVO': '#F44236',
  'PENDENTE': '#FFA500',
  'VARIAÇÕES': '#3E70C9',
}

const TableProducts: React.FC<TableProductsProps> = ({ data }: TableProductsProps) => {

  return (
    <TableContainer>
      <Table className="table-products" size="small" aria-label="Tabela de produtos">
        <TableHead>
          <TableRow sx={{ '& th': { fontWeight: 'bold' } }}>
            <TableCell style={{ border: 'none' }}></TableCell> {/* Célula vazia para a coluna de checkbox */}
            <TableCell>Imagem</TableCell>
            <TableCell>Variação/Preço<br/>Custo</TableCell>
            <TableCell>Título/Referência/Fornecedor</TableCell>
            <TableCell>Preço<br/>Atacado/Varejo</TableCell>
            <TableCell>Preço Cartão<br/>Atacado/Varejo</TableCell>
            <TableCell>Categoria/Estoque</TableCell>
            <TableCell>Dt. de Cadastro/Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id || index}
            >
              <TableCell>
                <Checkbox 
                  size="small"
                  // Você pode adicionar aqui as props necessárias como onChange, checked, etc.
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.image ? (
                  <img 
                    src={row.image} 
                    alt={row.title || 'Produto'} 
                    style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                ) : (
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#f0f0f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: '4px'
                  }}>
                    <IonIcon icon={imageOutline} size="small" />
                  </div>
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.hasVariation ? (
                  <span style={{
                    backgroundColor: '#3E70C9',
                    color: '#fff',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    {row.variationCount || '03'}
                  </span>
                ) : (
                  row.variation || 'SIM'
                )}
                <br />
                {row.costPrice && (
                  <span style={{ fontSize: '0.8rem', color: '#666' }}>
                    {row.costPrice}
                  </span>
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                <div style={{ textAlign: 'left' }}>
                  <strong>{row.title || 'CAMISA SOCIAL'}</strong>
                  <br />
                  {row.code && (
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>
                      CÓD ERP: {row.code}
                    </span>
                  )}
                  <br />
                  {row.supplier && (
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>
                      {row.supplier}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <div style={{ textAlign: 'center' }}>
                  {row.hasVariation ? (
                    <span style={{
                      backgroundColor: '#3E70C9',
                      color: '#fff',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem'
                    }}>
                      VARIAÇÕES
                    </span>
                  ) : (
                    <>
                      <div>{row.retailPrice || '--'}</div>
                      <div>{row.wholesalePrice || '--'}</div>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <div style={{ textAlign: 'center' }}>
                  {row.hasVariation ? (
                    <span style={{
                      backgroundColor: '#3E70C9',
                      color: '#fff',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem'
                    }}>
                      VARIAÇÕES
                    </span>
                  ) : (
                    <>
                      <div>{row.cardRetailPrice || '--'}</div>
                      <div>{row.cardWholesalePrice || '--'}</div>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <div style={{ textAlign: 'center' }}>
                  <div><strong>{row.category || 'CAMISA SOCIAL'}</strong></div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    {row.hasVariation ? 'TEM VARIAÇÃO' : row.stock || 'SEM ESTOQUE'}
                  </div>
                  {row.stockCode && (
                    <div style={{ fontSize: '0.7rem', color: '#999' }}>
                      {row.stockCode}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem' }}>
                    {row.registrationDate || '30/06/2025 ÀS 10:00'}
                  </div>
                  <span style={{
                    backgroundColor: statusColors[row.status as keyof typeof statusColors] || '#42B968',
                    color: '#fff',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    {row.status || 'ATIVO'}
                  </span>
                  {row.statusCode && (
                    <div style={{ fontSize: '0.7rem', color: '#999' }}>
                      {row.statusCode}
                    </div>
                  )}
                </div>
              </TableCell>
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
                      icon={closeOutline}
                      size="small"
                    />}
                    strongColor='#F44236'
                    color='#F44236'
                  />
                  <ButtonDefault
                    icon={<IonIcon
                      icon={createOutline}
                      size="small"
                    />}
                    strongColor='#A567E2'
                    color='#A567E2'
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

export default TableProducts;