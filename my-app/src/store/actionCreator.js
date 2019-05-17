import {CHANGE_INPUT_VALUE, CHANGE_ADD_ITEM, CHANGE_DEL_ITEM, INIT_LIST, INIT_LIST_S} from './actionTypes';
// import axios from 'axios';

export const getInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItem = () => ({
    type : CHANGE_ADD_ITEM
})
export const getDelItem = (value) => ({
    type: CHANGE_DEL_ITEM,
    value
})
export const initList = (value) => ({
    type: INIT_LIST,
    value
})
export const initListS = () =>({
    type: INIT_LIST_S
})

// export const getList = () => {
//     return (dispatch) =>{
//         axios.get('/api/todolist').then((res)=>{
//             const data = res.data;
//             const action = initList(data);
//             dispatch(action)
//           }).catch(()=>{
//             alert("error");
//           })
//     }
// }