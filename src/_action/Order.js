import axios from 'axios'

export const addOrder = (dataJadi) => {
  return {
    type: 'ADD_ORDER',
    payload: axios({
      url: `${Constanta.host}/order`,
      method: 'POST',
      data: dataJadi,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const editOrder = (id, dataJadi) => {
  return {
    type: 'EDIT_ORDER',
    payload: axios({
      url: `${Constanta.host}/order/${id}`,
      method: 'PATCH',
      data: dataJadi,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const deleteOrder = (id) => {
  return {
    type: 'REMOVE_ORDER',
    payload: axios({
      url: `${Constanta.host}/order/${id}`,
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const setOrderStatus = (transactionId, dataJadi) => {
  return {
    type: 'SET_ORDER_STATUS',
    payload: axios({
      url: `${Constanta.host}/orderStatus/${transactionId}`,
      method: 'PATCH',
      data: dataJadi,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const setOrderHome = (data) => {
  return {
    type: 'SET_ORDER_HOME',
    payload: data
  }
}
export const setisAddtoChart = (data) => {
  return {
    type: 'SET_ISADD_HOME',
    payload: data
  }
}
// export const removeAddtoChart = (data) => {
//   return {
//     type: 'SET_REMOVEISADD_HOME',
//     payload: data
//   }
// }

