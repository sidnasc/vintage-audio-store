import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const resposta = await api.get("/produtos");
      setProdutos(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar produtos", erro);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Tem certeza que deseja excluir este item?")) {
      try {
        await api.delete(`/produtos/${id}`);
        // Remove o item da tela sem precisar recarregar
        setProdutos(produtos.filter((prod) => prod._id !== id));
        alert("Item excluído!");
      } catch (erro) {
        alert("Erro ao excluir: " + erro.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h2>Painel Administrativo</h2>
          <Link to="/admin/novo">
            <button className="btn-primary" style={{ margin: 0 }}>
              + Adicionar Novo Item
            </button>
          </Link>
        </div>

        {/* Tabela de Gerenciamento */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #eee", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Imagem</th>
                <th style={{ padding: "10px" }}>Nome</th>
                <th style={{ padding: "10px" }}>Preço</th>
                <th style={{ padding: "10px" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((prod) => (
                <tr key={prod._id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>
                    <img
                      src={prod.imagemUrl || "https://via.placeholder.com/50"}
                      alt="mini"
                      style={{
                        width: "60px", // Largura fixa pequena
                        height: "60px", // Altura fixa igual à largura (quadrado)
                        objectFit: "cover", // Garante que fique quadrado sem esticar
                        borderRadius: "4px", // Um leve arredondamento fica elegante
                        border: "1px solid #ddd", // Uma bordinha suave
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px" }}>
                    <strong>{prod.nome}</strong>
                    <br />
                    <small style={{ color: "#888" }}>{prod.marca}</small>
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "#d35400",
                      fontWeight: "bold",
                    }}
                  >
                    R$ {Number(prod.preco).toFixed(2)}
                  </td>
                  <td style={{ padding: "10px" }}>
                    <Link to={`/admin/editar/${prod._id}`}>
                      <button
                        style={{
                          marginRight: "10px",
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        ✏️ Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(prod._id)}
                      className="btn-danger"
                      style={{ padding: "5px 10px", marginTop: 0 }}
                    >
                      🗑️ Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {produtos.length === 0 && (
            <p
              style={{ textAlign: "center", marginTop: "20px", color: "#999" }}
            >
              Nenhum produto cadastrado.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
