import "./OrderFilterForm.scss";
import { ButtonDefault } from "../../../../../shared/components/buttonDefault/buttonDefault";
import { printOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons"
import HideableComponent from "../../../../../shared/components/hideable-component/hideable-component";

const OrderFilterForm = () => {

  return (
    <div>
      <HideableComponent>
        <form className="order-filter-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Código Pedido:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>ID Pedido Interno:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>DT/Inicial:</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>DT/Final:</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Status:</label>
              <select multiple>
                <option>Opção 1</option>
                <option>Opção 2</option>
              </select>
            </div>

            <div className="form-group">
              <label>Buscar cliente por nome:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Buscar cliente por telefone:</label>
              <input type="tel" placeholder="(+55) BRASIL" />
            </div>

            <div className="form-group">
              <label>Forma de Pagamento:</label>
              <select multiple></select>
            </div>

            <div className="form-group">
              <label>Forma de Envio:</label>
              <select multiple></select>
            </div>

            <div className="form-group">
              <label>Loja:</label>
              <select>
                <option>-- TODAS --</option>
              </select>
            </div>

            <div className="form-group">
              <label>Vendedor/Gerente:</label>
              <select>
                <option>-- TODOS --</option>
              </select>
            </div>

            {/* Radio button groups */}
            {[
              { label: "Foi Enviado?" },
              { label: "Unificado:" },
              { label: "É PDV:" },
              { label: "Utilizou Cupom:" },
              { label: "Enviado ERP:" },
              { label: "É da Feira:" },
              { label: "Conferido:" },
            ].map((item, idx) => (
              <div className="form-group radio-group" key={idx}>
                <label>{item.label}</label>
                <label><input type="radio" name={item.label} defaultChecked /> TODOS</label>
                <label><input type="radio" name={item.label} /> SIM</label>
                <label><input type="radio" name={item.label} /> NÃO</label>
              </div>
            ))}
          </div>
        </form>

        <div className="buttons-filter-container">
          <ButtonDefault
            color="#20B9AE"
            label="Imprimir busca"
            strongColor="#1ba79d"
            icon={<IonIcon icon={printOutline} size="small" />}
          />
          <ButtonDefault
            color="#3E70C9"
            label="Filtrar"
            strongColor="#3865b5"
            icon={<IonIcon icon={printOutline} size="small" />}
          />
        </div>
      </HideableComponent>
    </div>
  );
};

export default OrderFilterForm;