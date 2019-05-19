import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
export const inputFocus = () => ({
    type: actionTypes.SEARCH_FOUCS
})
export const inputBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
})
export const getHeaderList = (data) => ({
    type: actionTypes.GET_HEADER_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})


export const getHotList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(getHeaderList(data.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
}