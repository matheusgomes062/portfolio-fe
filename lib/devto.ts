const client_id = process.env.DEV_TO_API_KEY;
const url = `https://dev.to/api/articles/me`;

export const getArticles = async () => {
  return await fetch(url, {
    headers: {
      'api-key': `${client_id}`,
    }
  });
};