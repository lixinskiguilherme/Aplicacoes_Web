export default function CadastroProfessor() {
  return (
    <div className="p-4 bg-white rounded shadow-sm border-top border-primary border-5 mt-4">
      <h2 className="text-primary mb-4 text-center">Cadastro de Professor</h2>
      
      <form className="row g-3">
        {/* Dados Pessoais */}
        <div className="col-md-6">
          <label className="form-label fw-bold">Nome Completo</label>
          <input type="text" className="form-control" placeholder="Ex: João Silva" required />
        </div>
        
        <div className="col-md-3">
          <label className="form-label fw-bold">CPF</label>
          <input type="text" className="form-control" placeholder="000.000.000-00" required />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-bold">Data de Nascimento</label>
          <input type="date" className="form-control" />
        </div>

        {/* Contato */}
        <div className="col-md-6">
          <label className="form-label fw-bold">E-mail</label>
          <input type="email" className="form-control" placeholder="professor@email.com" required />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Telefone/WhatsApp</label>
          <input type="tel" className="form-control" placeholder="(00) 00000-0000" />
        </div>

        {/* Acadêmico */}
        <div className="col-md-6">
          <label className="form-label fw-bold">Formação Acadêmica</label>
          <select className="form-select">
            <option defaultValue>Selecione...</option>
            <option>Graduação</option>
            <option>Pós-Graduação</option>
            <option>Mestrado</option>
            <option>Doutorado</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Especialização/Área</label>
          <input type="text" className="form-control" placeholder="Ex: Inteligência Artificial" />
        </div>

        {/* Endereço */}
        <div className="col-md-8">
          <label className="form-label fw-bold">Endereço</label>
          <input type="text" className="form-control" placeholder="Rua, Número, Bairro" />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-bold">Cidade</label>
          <input type="text" className="form-control" placeholder="Cidade" />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-bold">Estado</label>
          <select className="form-select">
            <option defaultValue>Selecione...</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="SC">Santa Catarina</option>
            <option value="PR">Paraná</option>
            <option value="SP">São Paulo</option>
            {/* Adicione outros estados conforme necessário */}
          </select>
        </div>

        <div className="col-md-8">
          <label className="form-label fw-bold">Complemento</label>
          <input type="text" className="form-control" placeholder="Apto, Bloco, etc." />
        </div>

        {/* Botões */}
        <div className="col-12 text-end mt-4">
          <button type="reset" className="btn btn-outline-secondary me-2">Limpar</button>
          <button type="submit" className="btn btn-primary px-5">Gravar Cadastro</button>
        </div>
      </form>
    </div>
  );
}