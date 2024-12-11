# Projeto Loja de Pranchas

## Descrição do Projeto
Este projeto implementa um backend simples utilizando TypeScript para uma loja de pranchas. O sistema permite:
- Cadastro de pranchas com atributos como quantidade, tamanho (em pés) e cor.
- Consulta de pranchas cadastradas no estoque.

O projeto segue o padrão **MVC** (Model-View-Controller), garantindo organização e separação de responsabilidades.

---

## Passos para Rodar o Projeto Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/usuario/repo-loja-pranchas.git
   cd repo-loja-pranchas
   ```

2. **Instale as dependências**
   Certifique-se de que o **Node.js** está instalado na sua máquina, e rode o comando:
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   Utilize o comando abaixo para iniciar o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   O servidor estará disponível em `http://localhost:3000`.

---

## Exemplos de Uso das Rotas (com `curl`)

### **1. Listar Pranchas**
Retorna todas as pranchas cadastradas no estoque.
```bash
curl -X GET http://localhost:3000/pranchas
```

### **2. Cadastrar uma Prancha**
Adiciona uma nova prancha ao estoque. Exemplo de payload:
```bash
curl -X POST http://localhost:3000/pranchas \
-H "Content-Type: application/json" \
-d '{"quantidade": 10, "tamanho": "6 pés", "cor": "azul"}'
```

---

## Estrutura do Projeto
O projeto está estruturado para seguir o padrão **MVC**, conforme abaixo:

```plaintext
project-root/
├── src/
│   ├── controllers/         # Controladores responsáveis pelo fluxo das rotas
│   ├── models/              # Estrutura de dados (entidades)
│   ├── repositories/        # Manipulação e persistência dos dados
│   ├── routes/              # Configuração das rotas do backend
│   ├── services/            # Lógica de negócios
│   ├── app.ts               # Configuração principal do aplicativo
│   └── server.ts            # Inicialização do servidor
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Documentação do projeto
```

---

## Documentação Detalhada
### 1. Rotas
- **GET /pranchas:** Retorna todas as pranchas cadastradas no estoque.
- **POST /pranchas:** Permite adicionar uma nova prancha ao estoque, com os seguintes campos:
  - `quantidade` (number) – obrigatório
  - `tamanho` (string) – obrigatório
  - `cor` (string) – obrigatório

### 2. Exemplo de Comandos `curl`
Já listados acima para cada rota.




