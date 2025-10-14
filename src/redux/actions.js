// export const addName = (payload) => ({ type: "names/add", payload }); 
// export const removeName = (index) => ({ type: "names/remove", payload: index });
// export const setFilter = (filter) => ({ type: "names/setFilter", payload: filter });

import { createAction } from "@reduxjs/toolkit";



export const addName = createAction('names/add', (payload) => {
    return {
        payload
    }
})
export const removeName = createAction('names/remove', (index) => {
    return {
        payload: index,
    }
})
export const setFilter = createAction('names/setFilter', (filter) => {
    return {
        payload: filter
    }
})