import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import DashHeader from '../../../../../shared/components/dash-header/DashHeader'
import { IBreadcrumbs } from '../../../../interfaces/sidebar'
import './users.scss'
import { IonContent, IonAlert } from "@ionic/react"
import DefaultButton from '../../../../../shared/components/default-button/DefaultButton'
import { buttonColors } from '../../../../../shared/enums'
import { informationCircleOutline, trashOutline } from 'ionicons/icons'
import DefaultTag from '../../../../../shared/components/default-tag/DefaultTag'

const Users:React.FC = () =>{
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
                text: 'sapatariateste',
                route: '/404'
            },
            {
                text: 'Usuários',
                route: '/home/my-store/users'
            },
        ]
    }

    return (
        <IonContent>
            <main>
                <DashHeader title='Usuários | SAPATARIA TESTE' breadcrumbs={breadcrumbs.breadcrumbs}/>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='default-container'>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Nome/Link Loja</TableCell>
                                <TableCell>E-mail/Login</TableCell>
                                <TableCell>Tipo/Status</TableCell>
                                <TableCell>Dt. de Cadastro</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'backgroundColor': '#eceeef' }}
                            className='table-row-body'
                            >
                                <TableCell component="th" scope="row">
                                    2535
                                </TableCell>

                                <TableCell>
                                    <span>pedro suporte</span>
                                </TableCell>

                                <TableCell>
                                    <span>programacao10@GMAIL.COM</span>
                                    <span>programacao10</span>
                                </TableCell>

                                <TableCell align='center'>
                                    <span>Desenvolvedor</span>
                                    <br />
                                    <DefaultTag text='ativo' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell>
                                    <span>16/05/2025 às 09:53</span>
                                </TableCell>

                                <TableCell>
                                    <DefaultButton 
                                    icon={trashOutline}
                                    backgroundColor={buttonColors.VERMELHO}
                                    iconOnly={true}
                                    id="alerta"
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

            <IonAlert
            header='Atenção!'
            subHeader='Você tem certeza que quer remover esse registro?'
            trigger='alerta'
            className='alert'
            buttons={
                [
                    {
                        text: 'Sim',
                        role: 'confirmar',
                        cssClass: 'confirm-button',
                        handler: () => {
                            alert('Usuário deletado');
                        },
                    },
                    {
                        text: 'Não',
                        role: 'cancelar',
                        cssClass: 'cancel-button',
                        handler: () => {
                            alert('Solicitação cancelada');
                        },
                    },
                ]
            }
            />
        </IonContent>
    )
}

export default Users;