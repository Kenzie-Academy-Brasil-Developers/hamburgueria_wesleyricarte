import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { StyledAside, StyledAsideEmpty } from "./style";

const Cart = ({ cart, setCart }) => {
	return (
		<>
			{cart.length > 0 ? (
				<StyledAside>
					<header>
						<h3>Carrinho de compras</h3>
					</header>
					{cart.length > 0 && (
						<CartProduct cart={cart} setCart={setCart} />
					)}
					<CartTotal cart={cart} setCart={setCart} />
				</StyledAside>
			) : (
				<StyledAsideEmpty>
					<header>
						<h3>Carrinho de compras</h3>
					</header>
					<CartTotal cart={cart} setCart={setCart} />
				</StyledAsideEmpty>
			)}
		</>
	);
};

export default Cart;
