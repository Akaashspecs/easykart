import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductData, } from './api';
import Loading from './Loading';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import NotFound from './NotFound';

function ProductDesc({ onAddToCart }) {
	const productId = +useParams().id;
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(1);

	useEffect(
		function() {
			const p = getProductData(productId);

			p.then(function(myResponse) {
				setProduct(myResponse.data);
				setLoading(false);
				setCount (1);
			});

			p.catch(function(error) {
				setLoading(false);
			});
		},
		[productId]
	);

	function handleCountChange(event) {
		setCount(+event.target.value);
	}

  function handleButtonClick(){
    onAddToCart(productId,count);
  }

	if (loading) {
		return <Loading />;
	}

	if (!product) {
		return <NotFound />;
	}

	return (
		<div className="  flex flex-col grow mt-10">
			<Link to="/">
				<FiArrowLeft
					className="ml-56 text-3xl
        mb-3"
				/>
			</Link>

			<div className="p-6 bg-white flex flex-col md:flex-row space-x-10 max-w-4xl mx-auto mb-2">
				<div className="h-auto  md:w-1/2">
					<img className="object-cover" src={product.thumbnail} />
				</div>
				<div className="shrink md:w-1/2">
					<h1 className="text-4xl	">{product.title}</h1>
					<h3 className="text-xl mt-4">${product.price}</h3>
					<p className="mt-3">{product.description}</p>
					<input
						type="number"
						value={count}
						onChange={handleCountChange}
						className="w-10 mt-3 rounded-sm border-2 border-gray-300"
						
					/>
					<button onClick={handleButtonClick} id={productId} class="bg-red-400 text-sm text-white rounded-sm py-1 px-5 ">
						ADD TO CART
					</button>
				</div>
			</div>

			<div className="flex flex-row justify-between mb-24">
				<div>
					{productId > 1 && (
						<Link
							className="ml-56 text-3xl flex
        "
							to={'/Product/' + (productId - 1)}
						>
							<FiArrowLeft />Previous
						</Link>
					)}
				</div>
				<div>
					<Link
						className="mr-56 text-3xl
        flex "
						to={'/Product/' + (productId + 1)}
					>
						<FiArrowRight />Next
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductDesc;
