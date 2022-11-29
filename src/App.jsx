import Header from "../src/Components/Header";
import ProductsList from "../src/Components/ProductsList";
import Cart from "../src/Components/Cart";
import { useState } from "react";
import { StyledMain } from "./Styles/App";

function App() {
	const [cart, setCart] = useState([]);
	const [search, setSearch] = useState("");

	return (
		<div className="App">
			<Header setSearch={setSearch} />
			<StyledMain>
				<ProductsList
					search={search}
					setSearch={setSearch}
					cart={cart}
					setCart={setCart}
				/>
				<Cart cart={cart} setCart={setCart} />
			</StyledMain>
		</div>
	);
}

export default App;
