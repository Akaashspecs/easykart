
import axios from 'axios';

export function getProductData(id){
  return axios.get("https://myeasykart.codeyogi.io/product/" + id)
  .then(function(response){
    return (response.data);
  });
  
}

export function getProductByIds(ids) {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then (function (response) {
      return response.data;
    });
}

export function getProductList(sortBy,search, page, sortType, title, ){

  let params = {};

  if(sortBy) {
    params.sortBy = sortBy;
  }

  if (sortType) {
    params.sortType = sortType;
  }

  if (search) {
    params.search = search;
  }

  if (page) {
    params.page = page;
  }

  if (title) {
    params.title = title;
  }


  return axios.get("https://myeasykart.codeyogi.io/products",{
    params,
    
  })
  .then(function(response){
    return response.data;
  });
 
}

export function saveCart(cart) {
  return axios 
  .post("https://myeasykart.codeyogi.io/carts", {data: cart}, {
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
  })
  .then(function (response){
    return response.data;
  });
}

export function getCart() {
  return axios 
  .get("https://myeasykart.codeyogi.io/carts", {
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
  })
  .then(function (response){
    return response.data;
  });
}





