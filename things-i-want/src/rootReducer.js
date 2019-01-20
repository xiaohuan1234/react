import {NEXT, PREVIOUS, ADD, UPDATE, DELETE} from './actionCreators';

const bagData = [
    {   imageURL: "https://images.www.fendi.com/images/h9f/hc6/8887759110174/7VZ0127OOF0X93_01_xlarge#product-big",
        brand: "fendi",
        name: "Black leather backpack",
        color: "black",
        price: 3390,
        backgroundColor: "#f6f4f0",
        backgroundSize: "cover",
    },
    {   imageURL: "https://www.celine.com/dw/image/v2/BBST_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwc8f1a270/images/large/189173DLS.28BD_1_LIBRARY_80083.jpg?sw=1156&sh=1600&sm=fit&strip=false",
        brand: "celine",
        name: "MEDIUM CLASSIC BAG IN BOX CALFSKIN",
        color: "BURGUNDY",
        price: 4400,
        backgroundSize: "cover",
        backgroundColor: "white",
    },
    {   imageURL: "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/zoom_image_3/17f82f742ffe127f42dca9de82fb58b1/K/C/1536334714_KCC201VNR_S900_E03_ZH.jpg",
        brand: "Dior",
        name: "J'ADIOR SLINGBACK",
        color: "BLACK PATENT CALFSKIN LEATHER",
        price: 890,
        backgroundSize: "cover",
        backgroundColor: "white",
    },
];

const initialState = {
        selected:0,         
        productList: bagData,
};

export default function rootReducer(state=initialState, action) {
    var newState = {...state};
    console.log("reducer called with ", action.type);
    switch (action.type) {
        case NEXT:
            console.log("going next");
            newState.selected = (newState.selected+1)%newState.productList.length;
            break;
        case PREVIOUS:
            newState.selected--;
            if(newState.selected<0) {
                newState.selected+=newState.productList.length;
            }
            break;
        case ADD:
            newState.productList = [
                ...newState.productList,
                action.product
            ];
            newState.selected = newState.productList.length-1;
            break;
         case UPDATE:
            newState.productList = newState.productList.map(
                (p,i)=>(i!==action.id?p:action.product));
            break;
        case DELETE:             
            newState.productList = newState.productList.filter((_,i)=>(i!==action.id));
            newState.selected %= newState.productList.length;
            break;             
        default:
            break;
    }
    return newState;
}