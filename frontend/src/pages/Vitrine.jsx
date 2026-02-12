import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar"; // Importando o menu

function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const resposta = await api.get("/produtos");
      setProdutos(resposta.data);
    } catch (erro) {
      console.error("Erro:", erro);
    }
  };

  return (
    <>
      <Navbar /> {/* Menu no topo */}
      <div className="container">
        <h2 style={{ marginBottom: "30px" }}>Equipamentos Disponíveis</h2>

        {produtos.length === 0 ? (
          <p>Nenhum equipamento cadastrado.</p>
        ) : (
          <div className="produtos-grid">
            {produtos.map((prod) => (
              <div key={prod._id} className="card">
                {/* Se não tiver imagem, usa uma cinza padrão */}
                <img
                  src={
                    prod.imagemUrl ||
                    "https://via.placeholder.com/300x200?text=Sem+Imagem"
                  }
                  alt={prod.nome}
                  style={{
                    width: "50%", // Ocupa a largura total do card
                    height: "400px", // Define o tamanho padrão
                    objectFit: "cover", // Corta o excesso sem distorcer
                    borderRadius: "8px 8px 0 0", // Arredonda só as pontas de cima 
                  }}
                />

                <div className="card-info">
                  <span className="marca">{prod.marca}</span>
                  <h3>{prod.nome}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    {prod.categoria?.nome || "Geral"}
                  </p>

                  <div className="preco">
                    R$ {Number(prod.preco).toFixed(2)}
                  </div>
                  <Link to={`/produto/${prod._id}`}>
                    <button className="btn-primary">Ver Detalhes</button>
                  </Link>

                  {/* Só mostra os botões de editar/excluir se estiver logado */}
                  {localStorage.getItem("usuarioLogado") && (
                    <div
                      style={{ marginTop: "10px", display: "flex", gap: "5px" }}
                    >
                      <Link
                        to={`/admin/editar/${prod._id}`}
                        style={{ flex: 1 }}
                      >
                        <button
                          className="btn-danger"
                          style={{
                            width: "10%",
                            borderColor: "#d35400",
                            color: "#d35400",
                          }}
                        >
                          Editar (Admin)
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Vitrine;
