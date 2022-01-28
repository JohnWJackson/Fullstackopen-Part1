import axios from 'axios'
const dbUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(dbUrl);
}

const create = newObject => {
  return axios.post(dbUrl, newObject);
}

const update = (id, newObject) => {
  return axios.put(`${dbUrl}/${id}`, newObject);
}

const deletePersons = id => {
  return axios.delete(`${dbUrl}/${id}`);
}

export default { getAll, create, update, deletePersons }