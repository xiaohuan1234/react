/* global fetch:false */
export const INDEX = 'INDEX';
export const DELETE = 'DELETE';

export function handleIndex(products) {
    console.log("action created to handle index");    
    return {type: INDEX, products: products};
}
export function handleDelete(productID) {
    console.log("action create handleDelete with id = ", productID);
    return {type: DELETE, productID: productID};
}

export function getProducts() {
    console.log("fetch to handle index");    
  return dispatch => {
    return fetch("https://react-xiaohuan123.c9users.io:8080/api/bags")
      .then(res => {console.log(res); return res.json();})
      .then(data => dispatch(handleIndex(data)))
      .catch(err => dispatch(err));
  };
}