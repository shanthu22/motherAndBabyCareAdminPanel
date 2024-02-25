import axios from "axios";

const apiUrl = "https://api.example.com/data";

// Function to fetch data with a GET request
export function fetchData() {
  return axios
    .get(apiUrl)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
}

// Function to post data with a POST request
export function postData(data) {
  return axios
    .post(apiUrl, data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
}

// Function to update data with a PUT request
export function updateData(data) {
  return axios
    .put(apiUrl, data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
}

// Function to delete data with a DELETE request
export function deleteData() {
  return axios
    .delete(apiUrl)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
}
