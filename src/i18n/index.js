import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      search_title: "Find Developers",
      search_placeholder: "Enter GitHub username",
      search_btn: "Search",
      user_not_found: "No users found with this name",
      back: "Back",
      repos_title: "Repositories",
      sort_by: "Sort by",
      loading: "Loading...",
      visit_site: "Visit Website",
      twitter: "Follow on X"
    }
  },
  pt: {
    translation: {
      search_title: "Encontre desenvolvedores",
      search_placeholder: "Digite o username do GitHub",
      search_btn: "Buscar",
      user_not_found: "Não há usuários com esse nome",
      back: "Voltar",
      repos_title: "Repositórios",
      sort_by: "Ordenar por",
      loading: "Carregando...",
      visit_site: "Visitar Site",
      twitter: "Seguir no X"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
