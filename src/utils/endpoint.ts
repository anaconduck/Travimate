export const BASE_API_URL = import.meta.env.VITE_HOST_API // VITE_API_ENDPOINT;
export const SUCCESS_STATUS_API_RESPONSE = 200

export const endpoints = {
    chat: '/api/chat',
    kanban: '/api/kanban',
    calendar: '/api/calendar',
    auth: {
      me: '/api/auth/me',
      login: '/api/auth/login',
      register: '/api/auth/register',
    },
    mail: {
      list: '/api/mail/list',
      details: '/api/mail/details',
      labels: '/api/mail/labels',
    },
    post: {
      list: '/api/post/list',
      details: '/api/post/details',
      latest: '/api/post/latest',
      search: '/api/post/search',
    },
    product: {
      list: '/api/product/list',
      details: '/api/product/details',
      search: '/api/product/search',
    },
};