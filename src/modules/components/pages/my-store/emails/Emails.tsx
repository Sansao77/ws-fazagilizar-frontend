import { addOutline, arrowBackOutline, saveOutline } from 'ionicons/icons';
import DashHeader from '../../../../../shared/components/dash-header/DashHeader';
import DefaultButton from '../../../../../shared/components/default-button/DefaultButton';
import { buttonColors } from '../../../../../shared/enums';
import { IBreadcrumbs } from '../../../../interfaces/sidebar';
import './emails.scss';
import { IonContent, IonSelect, IonSelectOption } from "@ionic/react"
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material';

const Emails:React.FC = () =>{
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
            {
                text: 'Empresa',
                route: '/404'
            },
            {
                text: 'Grupo de E-mails',
                route: '/home/my-store/email'
            }
        ]
    }

    return (
        <IonContent>
            <main>
                <DashHeader title='Gestor de Filial' breadcrumbs={breadcrumbs.breadcrumbs}/>

                <div style={{'width':'100%', 'display':'inline-flex','justifyContent':'end'}}>
                    <DefaultButton text="voltar" icon={arrowBackOutline} backgroundColor={buttonColors.VERMELHO}/>
                    <DefaultButton text="novo" icon={addOutline} backgroundColor={buttonColors.VERDE_CLARO}/>
                </div>

                <form action="" method="get" className='white-container'>
                    <div className='form-header'>
                        <span>Ativat receber e-mail</span>
                    </div>

                    <div className='extra-padding'>
                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Status:'
                        labelPlacement='stacked'
                        value='nao'
                        fill='outline'
                        style={{'color':'black'}}
                        >
                            <IonSelectOption value="nao">NÃO</IonSelectOption>
                            <IonSelectOption value="sim">SIM</IonSelectOption>
                        </IonSelect>
                        
                    </div>

                    <div className='form-footer extra-padding'>
                        <DefaultButton 
                        text='Filtrar'
                        icon={saveOutline}
                        backgroundColor={buttonColors.VERDE_CLARO} 
                        />
                    </div>
                </form>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='default-container'>
                        <TableHead>
                            <TableRow className='table-header'>
                                <TableCell>E-mail</TableCell>
                                <TableCell>DT de Cadastro</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow className='not-found-data' >
                                <TableCell 
                                colSpan={3}
                                style={{'textTransform':'uppercase', 'textAlign':'center', 'fontWeight':'bold'}}
                                >
                                    Nenhum registro encontrado
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </main>
        </IonContent>
    )
}

export default Emails;