import axios from "axios";

export const baseService = {};

baseService.get = async (url, endpoint) => {
  let response = null;
  try {
    response = await axios.get(url + endpoint);
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.get ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response
    );
  }
};
baseService.post = async (url, endpoint, data, configs = null) => {
  let response = null;
  try {
    response = await axios.post(url + endpoint, data, { ...configs });
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.post ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response
    );
  }
};
baseService.put = async (url, endpoint, data, configs = null) => {
  let response = null;
  try {
    response = await axios.put(url + endpoint, data, { ...configs });
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.put ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response
    );
  }
};
baseService.delete = async (url, endpoint, data, configs = null) => {
  let response = null;
  try {
    response = await axios.delete(url + endpoint, { ...configs });
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.delete ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response
    );
  }
};
