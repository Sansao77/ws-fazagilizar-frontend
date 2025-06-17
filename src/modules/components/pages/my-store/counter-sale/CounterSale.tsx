import './counter-sale.scss'
import { IonButton, IonButtons, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react"
import { IBreadcrumbs } from "../../../../interfaces/sidebar"
import DashHeader from "../../../../../shared/components/dash-header/DashHeader"
import DefaultButton from "../../../../../shared/components/default-button/DefaultButton"
import { buttonColors } from "../../../../../shared/enums"
import { addOutline, checkmarkOutline, cogOutline, removeOutline, trashOutline } from "ionicons/icons"

const CounterSale:React.FC = () =>{
    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            },
            {
                text: 'Venda Balcão (PDV)',
                route: '/home/my-store/counter-sale'
            },
        ]
    }

    return (
        <IonContent>
            <main>
                <DashHeader title='Venda Balcão (PDV)' breadcrumbs={breadcrumbs.breadcrumbs}/>

                <div style={{'width':'100%', 'display':'inline-flex','justifyContent':'end'}}>
                    <DefaultButton text="configurações pdv" icon={cogOutline} backgroundColor={buttonColors.AZUL}/>
                </div>

                <section className="forms-counter">
                    <div className="item-a">
                        <div className='produtos-itens'>
                            <div className='title-element'>
                                <span>Adicionar Produto</span>
                            </div>

                            <form action="" method="get" className='form-product default-container'>
                                <IonInput 
                                label='Cód Barras, Título ou descrição:'
                                labelPlacement='stacked'
                                fill='outline'
                                />

                                <div className='item'>
                                    <IonInput 
                                    label='Quantidade:'
                                    labelPlacement='stacked'
                                    type='number'
                                    min='0'
                                    fill='outline'
                                    />

                                    <div style={{'display':'flex'}}>
                                        <IonButton color='success'>
                                            <IonIcon slot='icon-only' icon={addOutline}></IonIcon>
                                        </IonButton>

                                        <IonButton color='danger'>
                                            <IonIcon slot='icon-only' icon={removeOutline}></IonIcon>
                                        </IonButton>
                                    </div>
                                </div>

                                <IonInput 
                                label='Produto Selecionado:'
                                labelPlacement='stacked'
                                placeholder='Selecionar um produto ao digitar ou bipar'
                                fill='outline'
                                disabled
                                />

                                <div className='item'>
                                    <IonInput 
                                    label='Valor Unitário:'
                                    labelPlacement='stacked'
                                    placeholder='Selecionar um produto ao digitar ou bipar'
                                    fill='outline'
                                    disabled
                                    />

                                    <IonInput 
                                    label='Valor Desconto:'
                                    labelPlacement='stacked'
                                    placeholder='Selecionar um produto ao digitar ou bipar'
                                    fill='outline'
                                    disabled
                                    />
                                </div>

                                <IonInput 
                                label='Total:'
                                labelPlacement='stacked'
                                placeholder='Selecionar um produto ao digitar ou bipar'
                                fill='outline'
                                disabled
                                />
                            </form>
                        </div>

                        <div>
                            <div className='title-element'>
                                <span>Itens do Pedido</span>

                                <DefaultButton 
                                text="Remover todos" 
                                icon={trashOutline} 
                                backgroundColor={buttonColors.VERMELHO}
                                size='small'
                                />
                            </div>

                            <form action="" method="get"></form>
                        </div>
                    </div>

                    <div className="item-b">
                        <div className='title-element'>
                            <span>Informações do Pedido</span>
                        </div>

                        <form action="" method="post" className='form-requests'>
                            <div className='default-container gap-values'>
                                <IonInput 
                                label='Qtde Itens:' 
                                fill='outline'
                                value={0}
                                readonly
                                />

                                <IonInput 
                                label='Subtotal:' 
                                fill='outline'
                                value='R$ 0,00'
                                readonly
                                />

                                <IonInput 
                                label='Frete (R$):' 
                                fill='outline'
                                value={0.00.toFixed(2)}
                                readonly
                                />

                                <IonSelect
                                disabled
                                value='selecione'
                                label='Forma de Pagamento:'
                                justify='space-between'
                                fill='outline'
                                >
                                    <IonSelectOption value='selecione'>-- SELECIONE --</IonSelectOption>
                                </IonSelect>

                                <IonInput 
                                label='Desconto (R$):' 
                                fill='outline'
                                value={0.00.toFixed(2)}
                                readonly
                                />

                                <IonInput 
                                label='Total:' 
                                fill='outline'
                                value='R$ 0,00'
                                readonly
                                />

                                <IonSelect
                                disabled
                                value='selecione'
                                label='Vendedor:'
                                justify='space-between'
                                fill='outline'
                                >
                                    <IonSelectOption value='selecione'>-- SELECIONE --</IonSelectOption>
                                </IonSelect>
                            </div>

                            <DefaultButton 
                            text="Finalizar Pedido" 
                            icon={checkmarkOutline} 
                            backgroundColor={buttonColors.VERDE_CLARO}
                            expand='full'
                            />
                        </form>
                    </div>
                </section>
            </main>
        </IonContent>
    )
}

export default CounterSale;