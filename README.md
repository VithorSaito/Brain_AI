# Retrieval Augmented Generation 📚

O projeto consiste no desenvolvimento de um sistema de Retrieval-Augmented Generation (RAG), cujo objetivo é extrair, processar e armazenar toda a base de conhecimento do GLPI em um repositório vetorial. A partir disso, o sistema utiliza técnicas de recuperação semântica e modelos de linguagem para gerar respostas precisas às perguntas dos usuários relacionadas aos conteúdos presentes nessa base.

O fluxo do sistema consiste na geração e armazenamento de embeddings das entradas da base de conhecimento, utilizando uma instância EC2 da AWS com PostgreSQL e a extensão pgvector (por ser um projeto prático não foi utilizado Aurora ou ElasticSearch). Em seguida, para cada pergunta enviada pelo usuário, é gerado um novo embedding que é comparado aos vetores previamente armazenados por meio de cálculo de similaridade do cosseno. Os registros com maior similaridade são retornados como contexto relevante. Por fim, esse contexto, juntamente com a pergunta original, é enviado a um modelo de IA para gerar a resposta mais adequada e coerente ao usuário.

## Iniciar projeto 🔰

```bash
# Clonar projeto

git clone NOME-DO-PROJETO

# Acessar projeto

cd ./NOME-DO-PROJETO

# Instalar dependencias

npm install

# Configurar váriaveis de ambiente no .env

OPENAI_API_KEY=""
AWS_DB_HOST=""
AWS_DB_USER=""
AWS_DB_PASSWORD=""
AWS_DB_NAME=""

# Iniciar o projeto

npm run dev

```

## Estrutura 🖇️

```bash
src/
 ├── controller/
 ├── dto/
 ├── lib/
 ├── prompts/
 ├── repository/
 ├── routes/
 ├── usecases/
 └── utils/

```

## End Points ↗️

### POST /knowLedge

Header

```json
{
  "Authorization": "Bearer TOKEN"
}
```

Body

```json
{
  "title": "string",
  "category": "string",
  "problem": "string",
  "solution": "string",
  "environment": "string"
}
```

Resposta

```json
{
  "statuscode": 201
}
```

### POST /question

Header

```json
{
  "Authorization": "Bearer TOKEN"
}
```

Body

```json
{
  "question": "string"
}
```

Resposta

```json
{
  "response": "string"
}
```

### POST /register

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

Resposta

```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "username": "string"
}
```

### POST /login

```json
{
  "email": "string",
  "password": "string"
}
```

Resposta

```json
{
  "accessToken": "string"
}
```

## Implementações ⚙️

- [x] Integração e implementação do OpenAI
- [x] Conexão com DB na AWS
- [x] Autenticação JWT
- [x] Websocket
- [ ] Persistencia das conversas com Redis
- [ ] Testes unitários
- [ ] Interface Visual com EJS
