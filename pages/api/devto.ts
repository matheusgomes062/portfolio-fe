import { getArticles } from '../../lib/devto';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler() {
  const response = await getArticles();
  const { items } = await response.json();

  return new Response(JSON.stringify({ items }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  });
}
