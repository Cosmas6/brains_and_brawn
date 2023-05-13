import axios from "axios";

const fetchFromStrapi = async (endpoint) => {
  const requestUrl = `http://localhost:1337${endpoint}`;

  try {
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error(`An error occurred fetching ${requestUrl}`);
      console.error(`Status: ${error.response.status}`);
      console.error(`Data: ${error.response.data}`);
      console.error(`Headers: ${error.response.headers}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(`No response received for ${requestUrl}`);
      console.error(`Request: ${error.request}`);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`Error setting up request: ${error.message}`);
    }
    throw error;
  }
};

export default fetchFromStrapi;
