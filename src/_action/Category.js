import axios from 'axios'
//import API

export const getCategory = () => {
  return {
    type:'GET_CATEGORY',
    payload : axios.get(`${Constanta.host}/categories`)
  }
}