import axios from 'axios';
import {CHAT} from './types';

export const loadingChat = ()=>{
    return{
        type:CHAT.loading
    }
}

export const sendChat = (data,fitur)=>disbatch=>{
    disbatch(loadingChat());
    axios.post('/api/chat/send',data,{
        params:fitur
    })
        .then(res=>{
            disbatch({
                type: CHAT.send,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
}


export const searchProduct = (data)=>disbatch=>{
    axios.post('/api/chat/search-product', data)
        .then(res => {
            disbatch({
                type: CHAT.send,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}
