import {INDEX, DELETE} from './actionCreators';
const initialState = {
    products: [
        {name: "scarf"}, 
        {name: "boots"}, 
        {name: "bag"}, 
        {name: "shoes"}
    ],
};
export default function rootReducer (state=initialState, action) {
    var newState = {...state};
    switch (action.type) {
        case INDEX:
            console.log("rootReducer to handle index");    
            newState.products = [...action.products];
            return newState;
        case DELETE:
            console.log("root reducer Delete with id=", action.productID);
            newState.products = state.products.filter((p,index)=>(index!==action.productID));
            return newState;            
        default:
            return state;
    }
}