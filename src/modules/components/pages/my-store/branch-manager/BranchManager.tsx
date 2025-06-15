import { IonContent, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import './branch-manager.scss'
import DashHeader from '../../../../../shared/components/dash-header/DashHeader';
import { IBreadcrumbs } from '../../../../interfaces/sidebar';
import DefaultButton from '../../../../../shared/components/default-button/DefaultButton';
import { buttonColors } from '../../../../../shared/enums';
import { briefcaseOutline, cogOutline, funnelOutline, linkOutline } from 'ionicons/icons';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br'
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import DefaultTag from '../../../../../shared/components/default-tag/DefaultTag';

const BranchManager:React.FC = () =>{
    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            },
            {
                text: 'Gestor de Empresas',
                route: '/home/my-store/branch-manager'
            },
        ]
    }
    
    return (
        <IonContent>
            <main>
                <DashHeader title='Gestor de Filial' breadcrumbs={breadcrumbs.breadcrumbs}/>

                <form action="" method="get" className='white-container'>
                    <div className='grid-form extra-padding'>
                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Status:'
                        labelPlacement='stacked'
                        value='todos'
                        fill='outline'
                        class='item-1'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">ATIVO</IonSelectOption>
                            <IonSelectOption value="bloqueado">BLOQUEADO</IonSelectOption>
                        </IonSelect>

                        <IonInput 
                        label='Buscar por: nome ou url'
                        labelPlacement='stacked'
                        placeholder='Ex: Francisco ou https://exemplo.com'
                        fill='outline'
                        class='item-2'
                        />

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        label='Usa feira:'
                        labelPlacement='stacked'
                        justify="start"
                        value='todos'
                        fill='outline'
                        class='item-3'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">NÃO</IonSelectOption>
                            <IonSelectOption value="bloqueado">SIM</IonSelectOption>
                        </IonSelect>

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        label='Usa Venda Balcão:'
                        labelPlacement='stacked'
                        justify="start"
                        value='todos'
                        fill='outline'
                        class='item-4'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">NÃO</IonSelectOption>
                            <IonSelectOption value="bloqueado">SIM</IonSelectOption>
                        </IonSelect>

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        label='Tipo:'
                        labelPlacement='stacked'
                        justify="start"
                        value='todos'
                        fill='outline'
                        class='item-5'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="comercio">COMÉRCIO</IonSelectOption>
                            <IonSelectOption value="delivery">DELIVERY</IonSelectOption>
                            <IonSelectOption value="anunciante">ANUNCIANTE</IonSelectOption>
                            <IonSelectOption value="ecommerce">ECOMMERCE</IonSelectOption>
                            <IonSelectOption value="ecommerce_catalogo">ECOMMERCE & CATÁLOGO</IonSelectOption>
                        </IonSelect>

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        label='Utiliza novo carrinho:'
                        labelPlacement='stacked'
                        justify="start"
                        value='todos'
                        fill='outline'
                        class='item-6'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">NÃO</IonSelectOption>
                            <IonSelectOption value="bloqueado">SIM</IonSelectOption>
                        </IonSelect>

                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker 
                            label="DT/ Inicial"
                            className='item-7'
                            ></DatePicker>
                            <DatePicker label="DT/ Final" className='item-8'></DatePicker>
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
                                <TableCell align='center'>Nome/Link Loja</TableCell>
                                <TableCell align='center'>Url Amigável/Tipo</TableCell>
                                <TableCell align='center'>Dt. de Cadastro Status</TableCell>
                                <TableCell align='center'>Subdomínio</TableCell>
                                <TableCell align='center'>Domínio</TableCell>
                                <TableCell align='center'>Unifica Pedidos</TableCell>
                                <TableCell align='center'>Usa Feira Usa Catálogo</TableCell>
                                <TableCell align='center'>Usa Venda Balcão</TableCell>
                                <TableCell align='center'>Tabela Estoque/ Impressão/ Tags</TableCell>
                                <TableCell align='center'>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'backgroundColor': '#eceeef' }}
                            className='table-row-body'
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    279
                                </TableCell>

                                <TableCell align='center'>
                                    <span>SAPATARIA TESTE</span>

                                    <DefaultButton text='acessar loja' icon={linkOutline} backgroundColor={buttonColors.AZUL}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <span>sapatariateste</span>

                                    <DefaultTag text='comércio' backgroundColor={buttonColors.AZUL}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <span>29/03/2022 às 08:30</span>
                                    <br />
                                    <DefaultTag text='ativo' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                    <a style={{'color':'#43B968'}}>Acessar</a>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='não' backgroundColor={buttonColors.VERMELHO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='não' backgroundColor={buttonColors.VERMELHO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                    <DefaultTag text='sim' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell align='center' className='buttons-table'>
                                    <DefaultButton 
                                    icon={cogOutline}
                                    backgroundColor={buttonColors.AZUL}
                                    iconOnly={true}
                                    route='/home/my-store/configurations'
                                    />

                                    <DefaultButton 
                                    icon={briefcaseOutline}
                                    backgroundColor={buttonColors.VERDE_CLARO}
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
    )
}

export default BranchManager;