import { IonContent, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import './sellers.scss'
import DefaultButton from '@shared/components/default-button/DefaultButton';
import { buttonColors } from '@shared/enums';
import { addOutline, funnelOutline, lockClosedOutline, pencilOutline, trashOutline } from 'ionicons/icons';
import DashHeader from '@shared/components/dash-header/DashHeader';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TableContainer } from '@mui/material';

const Sellers:React.FC = () =>{
    return (
        <IonContent>
            <main>
                <DashHeader title='Gestor de Vendedores' breadcrumbs={['Dashboard', 'Gestor de Vendas']}/>
                <div style={{'width':'100%', 'display':'inline-flex','justifyContent':'end'}}>
                    <DefaultButton text="novo vendedor" icon={addOutline} backgroundColor={buttonColors.VERDE_CLARO}/>
                </div>

                <form action="" method="get" className='white-container'>
                    <div className="grid-form extra-padding">
                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Status:'
                        labelPlacement='stacked'
                        value='todos'
                        fill='outline'
                        class='area-status'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">ATIVO</IonSelectOption>
                            <IonSelectOption value="bloqueado">BLOQUEADO</IonSelectOption>
                        </IonSelect>

                        <IonInput
                        label='Buscar por: nome ou url'
                        labelPlacement='stacked'
                        fill='outline'
                        class='area-input'
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker 
                            label="DT/ Inicial"
                            className='area-inicial'
                            ></DatePicker>

                            <DatePicker label="DT/ Final" className='area-final'></DatePicker>
                        </LocalizationProvider>
                    </div>

                    <div className='form-footer extra-padding'>
                        <DefaultButton 
                        text='Filtrar'
                        icon={funnelOutline}
                        backgroundColor={buttonColors.AZUL} 
                        />
                    </div>
                </form>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='default-container'>
                        <TableHead>
                            <TableRow className='table-header'>
                                <TableCell align='center'>#</TableCell>
                                <TableCell align='left'>Nome</TableCell>
                                <TableCell align='center'>Dt. de Cadastro</TableCell>
                                <TableCell align='center'>Email/Usuário</TableCell>
                                <TableCell align='center'>Whatsapp</TableCell>
                                <TableCell align='center'>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'backgroundColor': '#eceeef' }}
                            className='table-row-body'
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    2573
                                </TableCell>

                                <TableCell align='left'>
                                    <span>LOJA ESCRITORIO</span>
                                </TableCell>

                                <TableCell align='center'>
                                    09/06/2025 às 15:21
                                </TableCell>

                                <TableCell align='center'>
                                    <span>TESTEDCVSDHBC@GMAIL.COM</span>
                                    <br />
                                    <span style={{'fontWeight':'bold'}}>loja-escritorio</span>
                                </TableCell>

                                <TableCell align='center'>
                                    (81) 99702-2695
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultButton 
                                    icon={pencilOutline}
                                    backgroundColor={buttonColors.VERDE_ESCURO}
                                    iconOnly={true}
                                    />

                                    <DefaultButton 
                                    icon={lockClosedOutline}
                                    backgroundColor={buttonColors.VERMELHO}
                                    iconOnly={true} 
                                    />

                                    <DefaultButton 
                                    icon={trashOutline}
                                    backgroundColor={buttonColors.PRETO}
                                    iconOnly={true} 
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                                <TableCell>Componente de paginação</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </main>
        </IonContent>
    );
}

export default Sellers;