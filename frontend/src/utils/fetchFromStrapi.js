const fetchFromStrapi = async (endpoint) => {
  const requestUrl = `http://localhost:1337${endpoint}`;
  const response = await fetch(requestUrl);

  if (!response.ok) {
    console.log(response, "response");
    console.error(`An error occurred fetching ${requestUrl}`);
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.data;
};

export default fetchFromStrapi;
