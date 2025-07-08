import React, { useState } from 'react';
import { 
    IonContent, 
    IonInput, 
    IonSelect, 
    IonSelectOption, 
    IonIcon
} from '@ionic/react';
import { arrowBackOutline, saveOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { DashCardHeader } from '../../../../shared/components/dash-card-header/dash-card-header';
import { ButtonDefault } from '../../../../shared/components/buttonDefault/buttonDefault';
import './payment-integration.scss';

const PaymentIntegration: React.FC = () => {
    const history = useHistory();
    const [status, setStatus] = useState('Sim');
    const [integracao, setIntegracao] = useState('Asaas');
    const [tokenAcesso, setTokenAcesso] = useState('$aact_YTU5YTE0M2M2N2I4MTliN2kOYTI5MzZmNDAwQGJAwMDAwMDAwMDAwMDAwMDAwOGRhOWiIYWNxVkQDVhNJY4WRjY2YnGJYi1NDUSLTUYL6YjFKN2Q1ZQ==');

    const handleVoltar = () => {
        history.goBack();
    };

    const handleSalvar = () => {
        // Implementar lógica de salvamento
        console.log('Salvando configurações de integração de pagamento...');
        alert('Configurações salvas com sucesso!');
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
            <main className="payment-integration-main">
                <DashCardHeader 
                    pageName="Integração de Pagamento" 
                    actions={headerActions}
                />

                <div className="breadcrumb">
                    <span>Dashboard / Gestor de Empresas / teste / Configurações / Integração de Pagamento</span>
                </div>

                <div className="config-section">
                    <h2>INTEGRAÇÃO DE PAGAMENTO | CONFIGURAÇÕES | TESTE</h2>
                    
                    <div className="config-grid">
                        <div className="config-item">
                            <label>Status:</label>
                            <IonSelect
                                value={status}
                                onIonChange={(e) => setStatus(e.detail.value)}
                                fill="outline"
                                className="config-select"
                            >
                                <IonSelectOption value="Sim">Sim</IonSelectOption>
                                <IonSelectOption value="Não">Não</IonSelectOption>
                            </IonSelect>
                        </div>

                        <div className="config-item">
                            <label>Integração:</label>
                            <IonSelect
                                value={integracao}
                                onIonChange={(e) => setIntegracao(e.detail.value)}
                                fill="outline"
                                className="config-select"
                            >
                                <IonSelectOption value="Asaas">Asaas</IonSelectOption>
                                <IonSelectOption value="Stripe">Stripe</IonSelectOption>
                                <IonSelectOption value="PayPal">PayPal</IonSelectOption>
                                <IonSelectOption value="Mercado Pago">Mercado Pago</IonSelectOption>
                            </IonSelect>
                        </div>
                    </div>

                    <div className="config-item token-section">
                        <label>Token de Acesso: [?]</label>
                        <IonInput
                            value={tokenAcesso}
                            onIonInput={(e) => setTokenAcesso(e.detail.value!)}
                            fill="outline"
                            className="config-input token-input"
                        />
                    </div>
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

export default PaymentIntegration; 