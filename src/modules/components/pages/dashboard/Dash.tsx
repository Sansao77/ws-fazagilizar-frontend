import { IonButton, IonContent } from "@ionic/react"
import './dash.scss'
import Bundle from "./bundle/Bundle"
import SaleCard from "../../../../shared/components/sale-card/SaleCard"
import { FormDataDelivery, FormDataIntegration, FormDataPayment, SalesCardData } from "../../../../shared/mock/card-data"
import Statistics from "../../../../shared/components/statistics/Statistics"
import TableComponent from "./table-component/TableComponent"
import { bestSalers, lastRequests } from "../../../../shared/mock/table-data"
import { dataStoreFull } from "../../../../shared/mock/stores-data"
import StoreComponent from "./store-component/StoreComponent"
import FormElement from "../../../../shared/components/form-element/FormElement"
import DateComponent from "./date-component/DateComponent"
import SlideData from "./slide-data/SlideData"
import { productsBestSold, topClients } from "../../../../shared/mock/slides"
import DashHeader from "../../../../shared/components/dash-header/DashHeader"
import { IBreadcrumbs } from "../../../interfaces/sidebar"

const Dash: React.FC = () =>{
    const breadcrumbs:Readonly<Partial<IBreadcrumbs>> = {
        breadcrumbs: [
            {
                text: 'Dashboard',
                route: '/home/dash'
            }
        ]
    }

    return (
        <IonContent>
            <main>
                <Bundle />

                <DashHeader title="Dashboard" breadcrumbs={breadcrumbs.breadcrumbs}/>

                <section className="notifications">
                    <span>Receba push notificações de novos pedidos em seu dispositivo</span>

                    <IonButton className="ion-button">Ativar Notificações Navegador</IonButton>
                </section>

                <section className="dash-data">
                    <section className="sales">
                        {SalesCardData.map(i =>
                            <SaleCard key={i.id} data={i}/>
                        )}
                    </section>

                    <section className="section-container">
                        <span className="title">Produtos mais Vendidos</span>

                        <SlideData data={productsBestSold}/>
                    </section>

                    <section className="section-container">
                        <span className="title">Top Clientes</span>

                        <SlideData data={topClients}/>
                    </section>

                    <section className="section-container">
                        <span className="title">vENDAS aTIVAS</span>

                        <div className="container-grid">
                            <div className="default-container bigger-element">
                                <span className="title">ultimos pedidos</span>

                                <TableComponent data={lastRequests} type="pedidos" width={650}/>
                            </div>

                            <div className="default-container center-elements">
                                <span className="title">VENDEDORES DESTACADOS</span>

                                <DateComponent />

                                <TableComponent data={bestSalers} type="vendedores" width={300}/>
                            </div>
                        </div>
                    </section>

                    <section className="section-container">
                        <span className="title">Estatísticas</span>

                        <div className="container-grid">
                            <div className="default-container bigger-element">
                                <span className="title">gráfico de Faturamento</span>

                                <Statistics />
                            </div>

                            <div className="default-container center-elements">
                                <span className="title">Faturamento período</span>

                                <DateComponent />

                                <div className="store-components">
                                    {dataStoreFull.map(store =>(
                                        <StoreComponent
                                        key={store.name}
                                        name={store.name}
                                        value={store.value}
                                        color={store.color}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-container">
                        <span className="title">FORMAS DE pAGAMENTO</span>

                        <div className="form-grid">
                            {FormDataPayment.map(x =>(
                                <FormElement key={x.title} title={x.title} imgSrc={x.img}/>
                            ))}
                        </div>
                    </section>

                    <section className="section-container">
                        <span className="title">FORMAS DE envio</span>

                        <div className="form-grid">
                            {FormDataDelivery.map(x =>(
                                <FormElement key={x.title} title={x.title} imgSrc={x.img}/>
                            ))}
                        </div>
                    </section>

                    <section className="section-container">
                        <span className="title">interações</span>

                        <div className="form-grid">
                            {FormDataIntegration.map(x =>(
                                <FormElement key={x.title} title={x.title} imgSrc={x.img}/>
                            ))}
                        </div>
                    </section>
                </section>
            </main>
        </IonContent>
    )
}

export default Dash