import { createAction } from "@reduxjs/toolkit";

export const addName = createAction("names/add");
export const removeName = createAction("names/remove");
export const setFilter = createAction("names/setFilter");
