import jwt_decode from 'jwt-decode';
import {createContext, useReducer} from "react";

export const authenticate = (token: any, cb: () => void) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(token));
        cb();
    }
}

export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('jwt')) {
        const {exp}: any = jwt_decode(JSON.parse(localStorage.getItem('jwt') || '{}'));
        if ((new Date()).getTime() < exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('jwt');
            return false
        }

    } else return false;
}

export const  userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('jwt') || '{}');
    const decoded: any = jwt_decode(jwt);
    return {...decoded, token: jwt}
}