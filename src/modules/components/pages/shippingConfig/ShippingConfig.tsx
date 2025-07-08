import React, { useState } from 'react';
import { 
    IonContent, 
    IonButton, 
    IonInput, 
    IonSelect, 
    IonSelectOption, 
    IonChip, 
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';
import { arrowBackOutline, saveOutline, addOutline, removeOutline, sendOutline, cubeOutline, businessOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { DashCardHeader } from '../../../../shared/components/dash-card-header/dash-card-header';
import { ButtonDefault } from '../../../../shared/components/buttonDefault/buttonDefault';
import './shipping-config.scss';

const ShippingConfig: React.FC = () => {
    const history = useHistory();
    const [cepOrigem, setCepOrigem] = useState('55012-590');
    const [usaTaxasFixas, setUsaTaxasFixas] = useState('SIM');
    const [formasEnvio, setFormasEnvio] = useState(['Retirada na Loja', 'Entrega', 'Excursão', 'Correios a Combinar']);
    const [excursoes, setExcursoes] = useState(['PÃO DE AÇÚCAR', 'TORITAMA-PE', 'SANTA CRUZ-PE', 'CARUARU-PE']);

    const handleVoltar = () => {
        history.goBack();
    };

    const handleSalvar = () => {
        // Implementar lógica de salvamento
        console.log('Salvando configurações...');
        alert('Configurações salvas com sucesso!');
    };

    const removerItem = (lista: string[], item: string, setLista: React.Dispatch<React.SetStateAction<string[]>>) => {
        setLista(lista.filter(i => i !== item));
    };

    const headerActions = [
        {
            label: 'Voltar',
            color: '#F44236',
            strongColor: '#d32f2f',
            onclick: handleVoltar,
            icon: <IonIcon icon={arrowBackOutline} size="small" />
        }
    ];

    return (
        <IonContent>
            <main className="shipping-config-main">
                <DashCardHeader 
                    pageName="Configurações de Envio" 
                    actions={headerActions}
                />

                <div className="breadcrumb">
                    <span>Dashboard / Gestor de Empresas / teste / Configurações de Envio</span>
                </div>

                <div className="alert-info">
                    <span>Aqui você pode configurar as suas formas de envio! Integração com transportadoras e mais!</span>
                </div>

                <div className="config-section">
                    <h2>Configurações Gerais</h2>
                    
                    <div className="config-grid">
                        <div className="config-item">
                            <label>CEP de Origem: [?]</label>
                            <IonInput
                                value={cepOrigem}
                                onIonInput={(e) => setCepOrigem(e.detail.value!)}
                                placeholder="00000-000"
                                fill="outline"
                                className="config-input"
                            />
                        </div>

                        <div className="config-item">
                            <label>Usa Taxas Fixas Excursão: [?]</label>
                            <IonSelect
                                value={usaTaxasFixas}
                                onIonChange={(e) => setUsaTaxasFixas(e.detail.value)}
                                fill="outline"
                                className="config-select"
                            >
                                <IonSelectOption value="SIM">SIM</IonSelectOption>
                                <IonSelectOption value="NÃO">NÃO</IonSelectOption>
                            </IonSelect>
                        </div>
                    </div>

                    <div className="config-item">
                        <label>Formas de Envio: [?]</label>
                        <div className="chips-container">
                            {formasEnvio.map((forma, index) => (
                                <IonChip key={index} className="custom-chip">
                                    <span>{forma}</span>
                                    <IonIcon 
                                        icon={removeOutline} 
                                        onClick={() => removerItem(formasEnvio, forma, setFormasEnvio)}
                                        className="remove-icon"
                                    />
                                </IonChip>
                            ))}
                        </div>
                    </div>

                    <div className="config-item">
                        <label>Selecione as Excursões: [?]</label>
                        <div className="chips-container">
                            {excursoes.map((excursao, index) => (
                                <IonChip key={index} className="custom-chip">
                                    <span>{excursao}</span>
                                    <IonIcon 
                                        icon={removeOutline} 
                                        onClick={() => removerItem(excursoes, excursao, setExcursoes)}
                                        className="remove-icon"
                                    />
                                </IonChip>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="options-section">
                    <h2>Opções</h2>
                    <div className="options-grid">
                        <IonCard className="option-card">
                            <IonCardContent>
                                <div className="option-content">
                                    <IonIcon icon={sendOutline} className="option-icon" />
                                    <span>MAIS FORMAS DE ENTREGA</span>
                                </div>
                            </IonCardContent>
                        </IonCard>

                        <IonCard className="option-card">
                            <IonCardContent>
                                <div className="option-content">
                                    <IonIcon icon={cubeOutline} className="option-icon" />
                                    <span>FRETES POR FAIXA CEP</span>
                                </div>
                            </IonCardContent>
                        </IonCard>

                        <IonCard className="option-card">
                            <IonCardContent>
                                <div className="option-content">
                                    <IonIcon icon={businessOutline} className="option-icon" />
                                    <span>FRETES LOCALIDADE/EXCURSÃO</span>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </div>

                <div className="transportadoras-section">
                    <h2>Transportadoras Com Contrato</h2>
                    <IonCard className="transportadora-card">
                        <IonCardHeader>
                            <div className="transportadora-header">
                                <img src="/favicon.png" alt="Correios" className="transportadora-logo" />
                                <div className="transportadora-info">
                                    <IonCardTitle>Correios</IonCardTitle>
                                    <span className="status-badge">NÃO CADASTRADO</span>
                                </div>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonButton fill="outline" size="small" className="config-button">
                                Configurar
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </div>

                <div className="actions-section">
                    <ButtonDefault
                        label="Salvar"
                        color="#42B968"
                        strongColor="#3ba75e"
                        onclick={handleSalvar}
                        icon={<IonIcon icon={saveOutline} size="small" />}
                    />
                </div>
            </main>
        </IonContent>
    );
};

export default ShippingConfig; 