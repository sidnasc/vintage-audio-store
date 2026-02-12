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

### 2. Configurar o Backend (Servidor)

1. **Instalar Dependências:**
No terminal, na pasta raiz do projeto:
```bash
npm install

```


2. **Configurar Variáveis de Ambiente (.env):**
Crie um arquivo chamado `.env` na raiz do projeto e adicione:
```ini
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/vintage_audio

```


3. **Popular o Banco de Dados (Categorias Iniciais):**
Inicie o servidor e acesse a rota de configuração para criar as categorias básicas (Receivers, Caixas, etc).
*No terminal:*
```bash
npm run dev

```


*No navegador, acesse:*
`http://localhost:3000/api/setup-categorias`
*Se aparecer "Sucesso", o banco está pronto.*

### 3. Configurar o Frontend (Interface)

1. Abra um **novo terminal** e entre na pasta do frontend:
```bash
cd frontend

```


2. **Instalar Dependências:**
```bash
npm install

```


3. **(Opcional) Configurar Variáveis (.env):**
Crie um arquivo `.env` dentro da pasta `frontend`:
```ini
VITE_API_URL=http://localhost:3000/api

```


4. **Rodar a Aplicação:**
```bash
npm run dev

```



### 4. Acessar o Sistema

Abra seu navegador em: `http://localhost:5173`

* **Vitrine:** Tela inicial.
* **Admin:** Clique no link de "Login" ou acesse `/login`.
* *Dica: Crie um usuário ou remova a proteção de rota temporariamente se não tiver user cadastrado.*



---

## 🗂️ Estrutura de Pastas

```
vintage-audio-store/
├── src/                # Backend (API)
│   ├── models/         # Schemas do MongoDB (Produto, Categoria)
│   └── ...
├── frontend/           # Frontend (React)
│   ├── src/
│   │   ├── components/ # Navbar, Cards
│   │   ├── pages/      # Vitrine, Admin, Login, Dashboard
│   │   └── api.js      # Configuração do Axios
│   └── ...
├── server.js           # Ponto de entrada da API
├── .env                # Variáveis (Não incluso no Git)
└── package.json        # Dependências

```

---

## 📝 Autores

Desenvolvido por:

* **Ananias Carlos**
* **Davi Carreiro**
* **Michel Júnior**
* **Sidney Nascimento**

Projeto acadêmico para fins de estudo em Desenvolvimento Web Full Stack.

