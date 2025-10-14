export const addName = (payload) => ({ type: "names/add", payload }); 
export const removeName = (index) => ({ type: "names/remove", payload: index });
export const setFilter = (filter) => ({ type: "names/setFilter", payload: filter });
