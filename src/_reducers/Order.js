initialStateOrder = {
    dataItem: '',
    dataItemTmp:[],
    isLoading: true,
    subTotalOrder: 0,
    isAddToChart:false
  }
  
  export default Order = (state = initialStateOrder, action) => {
    switch (action.type) {
      
      case 'INDECREMENT':
        let index = state.dataItemTmp.findIndex(x => x.id == action.id)
        state.dataItemTmp[index].qty = action.payload
        return {
          ...state,
          dataItemTmp: [...state.dataItemTmp]
        }
      case 'ADD_ORDER_REJECTED':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        break
  
      //Untuk Order Master GET
      case 'GET_ORDER_PENDING':
        return {
          ...state,
          isLoading: false
        }
        break
      case 'GET_ORDER_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          isLoading: false
        }
        break
      case 'GET_ORDER_REJECTED':
        return {
          ...state,
          isLoading: false
        }
        break
  
      //Untuk Order Master Edit
      case 'EDIT_ORDER_PENDING':
        return {
          ...state,
          isLoading: true
        }
        break
      case 'EDIT_ORDER_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          isLoading: false
        }
        break
      case 'EDIT_ORDER_REJECTED':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        break
  
      //Untuk Order Master Remove
      case 'REMOVE_ORDER_PENDING':
        return {
          ...state,
          isLoading: true
        }
        break
      case 'REMOVE_ORDER_FULFILLED':
        return {
          ...state,
          isLoading: false
        }
        break
      case 'REMOVE_ORDER_REJECTED':
        return {
          ...state,
          isLoading: false
        }
        break
        
      //Get Sub total
      case 'GET_SUBTOTAL':
        return {
          ...state,
          subTotalOrder : action.payload.subTotal
        }
        break
  
      //Edit 
      case 'SET_ORDER_STATUS':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        break

      //addOrderThem
      case 'SET_ORDER_HOME':
      return{
        ...state,
        isAddToChart:action.payload,
        isLoading:false
      }
      case 'SET_ISADD_HOME':
        return{
          ...state,
          dataItemTmp: [...state.dataItemTmp,action.payload]
        }
      case 'SET_CHANGE_QTY':
        return{
          ...state,
          dataItemTmp:action.payload
        }
      case 'REMOVE':
        return{
          ...state,
          dataItemTmp:state.dataItemTmp.filter((item)=>(
            item.id !== action.payload 
          ))
        }
       default:
        return state
        break
    }
  }