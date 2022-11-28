import { useState, useEffect } from "react";
import api from "../../Services/api.js";
import Product from "../Product";
import { StyledUl } from "./style";

const ProductsList = ({ search, cart, setCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		api.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
			.then((response) => setProducts(response.data))
			.catch((err) => console.error(err));
	}, []);

	console.log(products);

	return (
		<StyledUl>
			{products
				?.filter((element) => {
					return (
						element.name
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						element.category
							.toLowerCase()
							.includes(search.toLowerCase())
					);
				})
				.map((element) => {
					return (
						<Product
							thisProduct={element}
							cart={cart}
							setCart={setCart}
							key={element.id}
						/>
					);
				})}
		</StyledUl>
	);
};

export default ProductsList;
