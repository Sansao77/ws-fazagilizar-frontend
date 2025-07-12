import { IonContent, IonIcon, IonInput, IonSelect, IonSelectOption } from "@ionic/react"
import DashHeader from "../../../../../shared/components/dash-header/DashHeader";
import DefaultButton from "@shared/components/default-button/DefaultButton";
import { addOutline, call, documentOutline, funnelOutline, lockClosedOutline, logoWhatsapp, pencilOutline, printOutline, shareOutline } from "ionicons/icons";
import { buttonColors } from "@shared/enums";

import './clients.scss'

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from "@mui/material";
import DefaultTag from "@shared/components/default-tag/DefaultTag";

const Clients:React.FC = () =>{
    return (
        <IonContent>
            <main>
                <DashHeader title="Meus Clientes" breadcrumbs={['Dashboard', 'Meus Clientes']}/>

                <div style={{'width':'100%', 'display':'inline-flex','justifyContent':'end'}}>
                    <DefaultButton text="exportações CSV" icon={documentOutline} backgroundColor={buttonColors.AZUL}/>
                    <DefaultButton text="novo cliente" icon={addOutline} backgroundColor={buttonColors.VERDE_CLARO}/>
                </div>

                <form action="" method="get" className='white-container'>
                    <div className="grid-form extra-padding">
                        <IonInput 
                        label='Buscar por: nome'
                        labelPlacement='stacked'
                        fill='outline'
                        class='area-nome'
                        />

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Já comprou:'
                        labelPlacement='stacked'
                        value='todos'
                        fill='outline'
                        class='area-comprou'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">SIM</IonSelectOption>
                            <IonSelectOption value="bloqueado">NÃO</IonSelectOption>
                        </IonSelect>

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
                            <IonSelectOption value="ativo">SIM</IonSelectOption>
                            <IonSelectOption value="bloqueado">NÃO</IonSelectOption>
                        </IonSelect>

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Tem Email:'
                        labelPlacement='stacked'
                        value='todos'
                        fill='outline'
                        class='area-email'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">SIM</IonSelectOption>
                            <IonSelectOption value="bloqueado">NÃO</IonSelectOption>
                        </IonSelect>

                        <div className="area-celular">
                            <IonSelect
                            aria-label="status" 
                            interface="popover"
                            justify="start"
                            value='brasil'
                            fill="outline"
                            >
                                <IonSelectOption value="brasil">(+55) BRASIL</IonSelectOption>
                            </IonSelect>

                            <IonInput type="tel" fill="outline"/>
                        </div>

                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker 
                            label="DT/ Inicial"
                            className='area-inicial'
                            ></DatePicker>
                            <DatePicker label="DT/ Final" className='area-final'></DatePicker>
                        </LocalizationProvider>

                        <IonSelect
                        aria-label="status" 
                        interface="popover"
                        justify="start"
                        label='Estado'
                        labelPlacement='stacked'
                        value='todos'
                        fill='outline'
                        class='area-estado'
                        >
                            <IonSelectOption value="todos">-- TODOS --</IonSelectOption>
                            <IonSelectOption value="ativo">SIM</IonSelectOption>
                            <IonSelectOption value="bloqueado">NÃO</IonSelectOption>
                        </IonSelect>

                        <IonInput 
                        label='Cidade'
                        labelPlacement='stacked'
                        fill='outline'
                        class='area-cidade'
                        />
                    </div>

                    <div className='form-footer extra-padding'>
                        <div>
                            <DefaultButton 
                            text='Exportar Busca (CSV)'
                            icon={shareOutline}
                            backgroundColor={buttonColors.VERDE_ESCURO} 
                            />

                            <DefaultButton 
                            text='Gerar PDF'
                            icon={printOutline}
                            backgroundColor={buttonColors.VERDE_ESCURO} 
                            />
                        </div>

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
                                <TableCell align='center'>Nome/Status</TableCell>
                                <TableCell align='center'>Celular</TableCell>
                                <TableCell align='center'>E-mail</TableCell>
                                <TableCell align='center'>DT. Criação Já Comprou</TableCell>
                                <TableCell align='center'>Ações</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'backgroundColor': '#eceeef' }}
                            className='table-row-body'
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    2776911
                                </TableCell>

                                <TableCell align='left'>
                                    <span>sapatariateste</span>
                                    <br />
                                    <DefaultTag text='ativo' backgroundColor={buttonColors.VERDE_CLARO}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <a style={{'color':'#3e70c9', 'textAlign':'center', 'gap':'0.3rem'}}>
                                        <IonIcon icon={call} size="small"/>
                                        <span>(81)99894-7390</span>
                                    </a>
                                    <br />
                                    <a style={{'color':'#43b968', 'textAlign':'center'}}>
                                        <IonIcon icon={logoWhatsapp} size="small"/>
                                        <span>(81)99894-7390</span>
                                    </a>
                                </TableCell>

                                <TableCell align='center'>
                                    joseluan74@gmail.com
                                </TableCell>

                                <TableCell align='center'>
                                    <span>21/06/2025 11:33</span>
                                    <br />
                                    <DefaultTag text='Não Comprou' backgroundColor={buttonColors.LARANJA}/>
                                </TableCell>

                                <TableCell align='center'>
                                    <DefaultButton 
                                    icon={pencilOutline}
                                    backgroundColor={buttonColors.AZUL}
                                    iconOnly={true}
                                    />

                                    <DefaultButton 
                                    icon={lockClosedOutline}
                                    backgroundColor={buttonColors.VERMELHO}
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

export default Clients;