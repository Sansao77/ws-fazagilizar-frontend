import { arrowBackOutline, funnelOutline } from 'ionicons/icons';
import DashHeader from '../../../../../shared/components/dash-header/DashHeader';
import DefaultButton from '../../../../../shared/components/default-button/DefaultButton';
import { buttonColors } from '../../../../../shared/enums';
import { IBreadcrumbs } from '../../../../interfaces/sidebar';
import './notifications.scss'
import { IonContent, IonSelect, IonSelectOption } from "@ionic/react"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';

const Nofications: React.FC = () =>{
    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            },
            {
                text: 'Gestor de Filiais',
                route: '/home/my-store/branch-manager'
            },
            {
                text: 'Dispositivos para notificação',
                route: '/home/my-store/branch-manager/notifications'
            },
        ]
    }

    return (
        <IonContent>
            <main>
                <DashHeader title='Dispositivos para notificação | Gestor de Filiais' breadcrumbs={breadcrumbs.breadcrumbs} />

                <div style={{'width':'100%', 'display':'inline-flex','justifyContent':'end'}}>
                    <DefaultButton text="voltar" icon={arrowBackOutline} backgroundColor={buttonColors.VERMELHO}/>
                </div>

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
                        class='item-a'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">ATIVO</IonSelectOption>
                            <IonSelectOption value="bloqueado">BLOQUEADO</IonSelectOption>
                        </IonSelect>

                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker 
                            label="DT/ Inicial"
                            className='item-b'
                            ></DatePicker>
                            <DatePicker label="DT/ Final" className='item-c'></DatePicker>
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
                                <TableCell>Dispositivo</TableCell>
                                <TableCell>Ativado por</TableCell>
                                <TableCell>DT de Cadastro</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'backgroundColor': '#eceeef' }}
                            className='table-row-body'
                            >
                                <TableCell 
                                colSpan={5} 
                                style={{'textTransform':'uppercase', 'textAlign':'center', 'fontWeight':'bolder'}}
                                >
                                    Nenhum registro encontrado.
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>Exibindo de 0 até 0</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </main>
        </IonContent>
    )
}

export default Nofications;