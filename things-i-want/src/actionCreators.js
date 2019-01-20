export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export function handleNext() {
    console.log("ahanlding next");
    debugger;
    return {
        type: NEXT,
    };
};

export function handlePrevious() {
    return {
        type: PREVIOUS,
    };
};

export var handleAdd = (product) =>{
    return {
        type: ADD,
        product,
    };
};

export var handleUpdate = (id, product) =>{
    return {
        type: UPDATE,
        id,
        product,
    };
};

export var handleDelete = (id, product) =>{
    return {
        type: DELETE,
        id,
    };
};