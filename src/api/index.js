const baseUrl = "";

const handleResponse = (response) => {
  if (response.ok)
    return response.json();
  throw new Error("Bad response from server");
}

const headers = (token) => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token,
});

export const getItem = (id) =>
  fetch(
    `${baseUrl}/api/items/${id}`,
    {
      method: 'GET',
      headers: headers(),
      // body: JSON.stringify({id})
    }
  )
  .then(handleResponse)
  .catch(error => console.err('unable to get item'));
