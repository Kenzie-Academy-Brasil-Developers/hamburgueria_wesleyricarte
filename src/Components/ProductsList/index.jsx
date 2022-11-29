import { useState, useEffect } from "react";
import api from "../../Services/api.js";
import Product from "../Product";
import { StyledSectionProducts, StyledSectionSearch, StyledUl } from "./style";

const ProductsList = ({ search, setSearch, cart, setCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		api.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
			.then((response) => setProducts(response.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<StyledSectionProducts>
			{search && (
				<StyledSectionSearch>
					<h3>
						Resultados para: <span>{search}</span>
					</h3>
					<button onClick={() => setSearch("")}>Limpar busca</button>
				</StyledSectionSearch>
			)}
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
								key={element.id}
								thisProduct={element}
								cart={cart}
								setCart={setCart}
							/>
						);
					})}
			</StyledUl>
		</StyledSectionProducts>
	);
};

export default ProductsList;
