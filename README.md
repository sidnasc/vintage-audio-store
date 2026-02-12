# 🎵 Vintage Audio Store

Sistema Full Stack desenvolvido para o gerenciamento e vitrine de uma loja especializada em equipamentos de áudio vintage (receivers, caixas acústicas, etc.).

O projeto foi construído utilizando a stack **MERN** (MongoDB, Express, React, Node.js) demonstrando a integração completa entre Banco de Dados, API e Interface do Usuário.

---

## 🚀 Funcionalidades

### 👤 Área do Cliente (Pública)
- **Vitrine Virtual:** Visualização de todos os produtos cadastrados com fotos, preços e marcas.
- **Detalhes do Produto:** Página exclusiva para cada item com ficha técnica detalhada e descrições.
- **Responsividade:** Layout adaptável para visualização em diferentes tamanhos de tela.

### 🔒 Área Administrativa (Restrita)
- **Autenticação:** Sistema de login para gerentes.
- **Dashboard:** Painel de controle para gestão rápida do inventário.
- **CRUD Completo:**
  - **C**reate: Cadastro de novos equipamentos com URL de imagem.
  - **R**ead: Listagem e visualização detalhada.
  - **U**pdate: Edição de preços, nomes e especificações técnicas.
  - **D**elete: Remoção segura de itens do catálogo.

---

## 🛠️ Tecnologias Utilizadas

### Backend (API & Dados)
- **Node.js**: Ambiente de execução Javascript.
- **Express**: Framework para criação da API REST.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Modelagem de dados (ODM).
- **Cors**: Gerenciamento de permissões de acesso.

### Frontend (Interface)
- **React.js**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build e desenvolvimento ágil.
- **React Router Dom**: Gerenciamento de rotas e navegação (SPA).
- **Axios**: Cliente HTTP para consumo da API.
- **CSS Modules**: Estilização dos componentes.

---

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Rodando localmente ou link do Atlas)

### 1. Clonar o Repositório
```bash
git clone [https://github.com/SEU-USUARIO/vintage-audio-store.git](https://github.com/SEU-USUARIO/vintage-audio-store.git)
cd vintage-audio-store

```

### 2. Configurar o Backend

Abra um terminal na pasta raiz do projeto:

```bash
# Instalar dependências do servidor
npm install

# Iniciar o servidor (Porta 3000)
npm run dev

```

*O servidor deve exibir: "Servidor rodando na porta 3000" e "MongoDB Conectado".*

### 3. Configurar o Frontend

Abra um **segundo terminal** e navegue até a pasta do frontend:

```bash
cd frontend

# Instalar dependências do React
npm install

# Iniciar a aplicação (Porta 5173)
npm run dev

```

### 4. Acessar

Abra seu navegador em: `http://localhost:5173`

---

## 🗂️ Estrutura de Pastas

```
vintage-audio-store/
├── src/                # Lógica do Servidor (Backend)
│   ├── models/         # Schemas do MongoDB (Produto, Categoria)
│   └── ...
├── frontend/           # Interface do Usuário (React)
│   ├── src/
│   │   ├── components/ # Componentes (Navbar)
│   │   ├── pages/      # Telas (Vitrine, Admin, Login, Detalhes, Dashboard)
│   │   └── api.js      # Configuração do Axios
│   └── ...
├── server.js           # Arquivo principal da API
└── package.json        # Dependências

```

---

## 📝 Autor

Desenvolvido por **Ananias Carlos, Davi Carreiro, Michel Júnior & Sidney Nascimento**.
Projeto acadêmico para fins de estudo em Desenvolvimento Web Full Stack.


