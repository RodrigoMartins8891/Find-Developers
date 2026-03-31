# 🔍 GitHub Search App

Aplicação desenvolvida em React para buscar usuários do GitHub e exibir seus repositórios com scroll infinito.

---

## 🚀 Tecnologias utilizadas

- React
- Chakra UI
- React Router
- Axios
- i18next (internacionalização)
- Zod (validação de dados)

---

## 📱 Funcionalidades

- 🔎 Busca de usuários do GitHub por username
- ❌ Exibição de mensagem quando usuário não é encontrado
- 👤 Página de perfil com dados do usuário
- 📦 Listagem de repositórios com scroll infinito
- 🔄 Ordenação dos repositórios (created, updated, pushed, name)
- 🔗 Links diretos para os repositórios
- 🌐 Botões para Website e Twitter (quando disponíveis)
- 📱 Layout responsivo (desktop e mobile)

---

## 🖥️ Como rodar o projeto

```bash
npm install
npm run dev
🌐 Deploy

👉 (https://find-developers-ctvkkks7t-rodrigo-martins-de-oliveiras-projects.vercel.app/)

🔐 Variáveis de ambiente

Para evitar limitações da API do GitHub, você pode criar um arquivo .env:

VITE_GITHUB_TOKEN=seu_token_aqui
⚠️ Observações

A API do GitHub possui limite de requisições para usuários não autenticados.

Caso ocorra erro ao buscar usuários, aguarde alguns minutos e tente novamente.

📌 Decisões técnicas
Utilização do Chakra UI para construção de uma interface rápida e responsiva
Implementação de scroll infinito com Intersection Observer
Separação de componentes para melhor organização e manutenção
Uso de i18n para internacionalização dos textos
Validação de dados com Zod para maior segurança


👨‍💻 Autor

Desenvolvido por Rodrigo Martins
