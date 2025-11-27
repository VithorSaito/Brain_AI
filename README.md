<h1>Retrieval Augmented Generation 📚</h1>

O projeto consiste no desenvolvimento de um sistema de Retrieval-Augmented Generation (RAG), cujo objetivo é extrair, processar e armazenar toda a base de conhecimento do GLPI em um repositório vetorial. A partir disso, o sistema utiliza técnicas de recuperação semântica e modelos de linguagem para gerar respostas precisas às perguntas dos usuários relacionadas aos conteúdos presentes nessa base.

O fluxo do sistema consiste na geração e armazenamento de embeddings das entradas da base de conhecimento, utilizando uma instância EC2 da AWS com PostgreSQL e a extensão pgvector (por ser um projeto prático não foi utilizado Aurora ou ElasticSearch). Em seguida, para cada pergunta enviada pelo usuário, é gerado um novo embedding que é comparado aos vetores previamente armazenados por meio de cálculo de similaridade do cosseno. Os registros com maior similaridade são retornados como contexto relevante. Por fim, esse contexto, juntamente com a pergunta original, é enviado a um modelo de IA para gerar a resposta mais adequada e coerente ao usuário.

<img width="901" height="597" alt="image" src="https://github.com/user-attachments/assets/3a6316d0-2d7f-4a2c-a669-6737fd2785df" />

<h2>Features ⚙️</h2>

- [x] Integração e implementação do OpenAI
- [x] Conexão com DB na AWS
- [ ] Autenticação JWT
- [ ] Websocket
- [ ] Testes unitários
- [ ] Interface Visual com EJS




