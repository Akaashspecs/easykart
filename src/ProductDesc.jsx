import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductData } from './api';
import Loading from './Loading';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import NotFound from './NotFound';

function ProductDesc({ onAddToCart }) {
	const id = +useParams().id;
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(1);

	useEffect(
		function() {
			const p = getProductData(id);

			p.then(function(response) {
				setProduct(response.data);
				setLoading(false);
				setCount (1);
			});

			p.catch(function(error) {
				setLoading(false);
			});
		},
		[id]
	);

	function handleCountChange(event) {
		setCount(+event.target.value);
	}

  function handleButtonClick(){
    onAddToCart(id,count);
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

			<div class="p-6 bg-white flex flex-col md:flex-row space-x-10 max-w-4xl mx-auto mb-2">
				<div className="h-auto  md:w-1/2">
					<img class="object-cover" src={product.thumbnail} />
				</div>
				<div class="shrink md:w-1/2">
					<h1 class="text-4xl	">{product.title}</h1>
					<h3 class="text-xl mt-4">${product.price}</h3>
					<p class="mt-3">{product.description}</p>
					<input
						type="number"
						value={count}
						onChange={handleCountChange}
						class="w-7 mt-3 rounded-sm border-2 border-gray-300"
						
					/>
					<button onClick={handleButtonClick} class="bg-red-400 text-sm text-white rounded-sm py-1 px-5 ">
						ADD TO CART
					</button>
				</div>
			</div>

			<div className="flex flex-row justify-between mb-24">
				<div>
					{id > 1 && (
						<Link
							className="ml-56 text-3xl flex
        "
							to={'/Product/' + (id - 1)}
						>
							<FiArrowLeft />Previous
						</Link>
					)}
				</div>
				<div>
					<Link
						className="mr-56 text-3xl
        flex "
						to={'/Product/' + (id + 1)}
					>
						<FiArrowRight />Next
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductDesc;
