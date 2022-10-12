import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Span from './Span';
import ProductDesc from './ProductDesc';
import allData from "./DummyData";
import NoMatching from "./NoMatching";
import { getProductList, getProductData , } from './api';
import Loading from "./Loading";


function ProductView() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    const xyz = getProductList();

    xyz.then(function(response) {
      setProductList(response.data.products);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");



  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();


    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "pricelow") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  }
  else if (sort == "pricehigh") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  }
  else if (sort == "name") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1
    });
  }


  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }



  return (

    <div className="mt-20 rounded-lg  bg-white w-11/12 md:w-5/6 lg:w-9/12 px-20 md:px-14 lg:px-24  border flex flex-col content-center shrink mb-24 pb-10 self-center ">

      <input
        value={query}
        placeholder=" search"
        className="mt-7 border border-gray-700 rounded-md md-2 w-72 self-center"
        onChange={handleQueryChange} ></input>

      <select onChange={handleSortChange} class="border w-40 self-end mt-10" value={sort} >

        <option value="default" >default</option>
        <option value="pricelow">Price: Low to High</option>
        <option value="pricehigh">Price: High to Low</option>
        <option value="name">Name</option>


      </select>

      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && <NoMatching />}

      <Span />



      <div>

        <a className="border py-2 px-3 hover:bg-orange-500 border-red-500 text-red-700 visited:bg-orange-500 mr-px href='' " >1</a>
        <a className="border py-2 px-3 hover:bg-orange-500 text-red-700 border-red-500 mr-px" href=''>2</a>
        <a className="border py-2 px-2.5 hover:bg-orange-500 text-red-700 border-red-500 mr-px">&rarr;</a>
      </div>
    </div>
  );
}



export default ProductView;
