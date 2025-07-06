import "./productFilterForm.scss";
import { ButtonDefault } from "../../../../../shared/components/buttonDefault/buttonDefault";
import HideableComponent from "../../../../../shared/components/hideable-component/hideable-component";

const ProductFilterForm = () => {

  return (
    <div>
      <HideableComponent>
        <form className="product-filter-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Referência:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Buscar por título ou descrição:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Categoria: [?]</label>
              <select>
                <option>-- TODAS --</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status:</label>
              <select>
                <option>ATIVO</option>
                <option>INATIVO</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tem Variação:</label>
              <select>
                <option>-- TODOS --</option>
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </div>

            <div className="form-group">
              <label>Com Estoque: [?]</label>
              <select>
                <option>-- TODOS --</option>
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </div>

            <div className="form-group">
              <label>Peso Cadastrado? [?]</label>
              <select>
                <option>-- TODOS --</option>
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </div>

            <div className="form-group">
              <label>DT/Inicial:</label>
              <input type="date" placeholder="DD/MM/AAAA" />
            </div>

            <div className="form-group">
              <label>DT/Final:</label>
              <input type="date" placeholder="DD/MM/AAAA" />
            </div>

            <div className="form-group">
              <label>Fornecedor:</label>
              <select>
                <option>-- TODOS --</option>
              </select>
            </div>

            <div className="form-group">
              <label>Código de Barras: [?]</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Tem Código de Barras:</label>
              <select>
                <option>-- TODOS --</option>
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tipo:</label>
              <select>
                <option>-- TODOS --</option>
              </select>
            </div>
          </div>
        </form>

        <div className="filter-footer">
          <p className="filter-note">Os produtos serão carregados como padrão os "ativos"</p>
          <div className="buttons-filter-container">
            <ButtonDefault
              color="#3E70C9"
              label="Filtrar"
              strongColor="#3865b5"
            />
          </div>
        </div>
      </HideableComponent>
    </div>
  );
};

export default ProductFilterForm;