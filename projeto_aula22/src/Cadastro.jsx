export default function Cadastro() {
  return (
    <div className="container mt-4 mb-5">
      <div className="card border-0 shadow-lg rounded-4">
        {/* Cabeçalho com Degradê e Bordas Arredondadas */}
        <div className="card-header bg-gradient bg-success text-white p-4 rounded-top-4">
          <h3 className="mb-0 fw-bold">🎓 Ficha de Matrícula</h3>
          <p className="mb-0 opacity-75">Sistemas de Informação - Ingresso 2026</p>
        </div>
        
        <div className="card-body p-4 bg-white">
          <form className="row g-4">
            
            {/* Seção: Identificação */}
            <div className="col-12 border-bottom pb-2">
              <h5 className="text-success fw-semibold">Identificação Pessoal</h5>
            </div>

            <div className="col-md-8">
              <label className="form-label text-muted fw-bold small">NOME COMPLETO</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light border-0 shadow-sm" 
                placeholder="Digite o nome do aluno" 
                required 
              />
            </div>

            <div className="col-md-4">
              <label className="form-label text-muted fw-bold small">CPF</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light border-0 shadow-sm" 
                placeholder="000.000.000-00" 
                required 
              />
            </div>

            {/* Seção: Contato */}
            <div className="col-12 border-bottom pb-2 mt-5">
              <h5 className="text-success fw-semibold">Canais de Contato</h5>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted fw-bold small">E-MAIL</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-0 shadow-sm">@</span>
                <input 
                  type="email" 
                  className="form-control form-control-lg bg-light border-0 shadow-sm" 
                  placeholder="exemplo@email.com" 
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted fw-bold small">TELEFONE</label>
              <input 
                type="tel" 
                className="form-control form-control-lg bg-light border-0 shadow-sm" 
                placeholder="(00) 00000-0000" 
              />
            </div>

            {/* Seção: Localização */}
            <div className="col-12 border-bottom pb-2 mt-5">
              <h5 className="text-success fw-semibold">Endereço</h5>
            </div>

            <div className="col-md-12">
              <label className="form-label text-muted fw-bold small">LOGRADOURO COMPLETO</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light border-0 shadow-sm" 
                placeholder="Rua, Número, Bairro e Complemento" 
              />
            </div>

            {/* Ações do Formulário */}
            <div className="col-12 d-flex justify-content-end gap-3 mt-5">
              <button type="reset" className="btn btn-light btn-lg px-4 text-muted border">
                Limpar
              </button>
              <button type="submit" className="btn btn-success btn-lg px-5 shadow-sm fw-bold">
                Gravar Dados
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}