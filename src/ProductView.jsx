import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Span from "./Span";
import ProductDesc from "./ProductDesc";
import allData from "./DummyData";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./Loading";
import { Navigate } from "react-router";
import Button from "./Button";
import withUser from "./withUser";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductView({ setUser }) {
  let title;

  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";

  page = +page || 1;

  useEffect(
    function () {
      let sortType;
      let sortBy;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "pricelow") {
        sortBy = "price";
      } else if (sort == "pricehigh") {
        sortBy = "price";
        sortType = "desc";
      } else if (sort == "name") {
        sortBy = "title";
      }

      getProductList(sortBy, query, page, sortType, title).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }

  function handleQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handleSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value, page: 1 },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-20 rounded-lg  bg-white w-11/12 md:w-5/6 lg:w-9/12 px-20 md:px-14 lg:px-24  border flex flex-col content-center shrink mb-24 pb-10 self-center ">
      <Button onClick={handleLogout} className="mt-5">
        Logout
      </Button>
      <input
        value={query}
        placeholder=" search"
        className="mt-7 border border-gray-700 rounded-md md-2 w-72 self-center"
        onChange={handleQueryChange}
      ></input>

      <select
        onChange={handleSortChange}
        class="border w-40 self-end mt-10"
        value={sort}
      >
        <option value="default">default</option>
        <option value="pricelow">Price: Low to High</option>
        <option value="pricehigh">Price: High to Low</option>
        <option value="name">Name</option>
      </select>

      {productData.data.length > 0 && (
        <ProductList products={productData.data} />
      )}
      {productData.data.length == 0 && <NoMatching />}

      <Span />

      <div className="flex">
        {range(1, productData.meta.last_page + 1).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            className={
              "p-2 m-1 " + (pageNo === page ? "bg-red-500" : "bg-indigo-700")
            }
          >
            {pageNo}
          </Link>
        ))}
      </div>

      <div>
        <a className="border py-2 px-3 hover:bg-orange-500 border-red-500 text-red-700 visited:bg-orange-500 mr-px href='' ">
          1
        </a>
        <a
          className="border py-2 px-3 hover:bg-orange-500 text-red-700 border-red-500 mr-px"
          href=""
        >
          2
        </a>
        <a className="border py-2 px-2.5 hover:bg-orange-500 text-red-700 border-red-500 mr-px">
          &rarr;
        </a>
      </div>
    </div>
  );
}

export default withUser(ProductView);
