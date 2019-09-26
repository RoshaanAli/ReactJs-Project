import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './action';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;