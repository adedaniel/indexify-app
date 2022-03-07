import { BASE_API_URL } from 'utils/constants';

export const login = async (email: string) => {
  const response = await fetch(`${BASE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  return data;
};
