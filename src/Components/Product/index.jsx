import { StyledLi, StyledBoxInfo } from "./style";
import { toast, Toaster } from "react-hot-toast";

const Product = ({ thisProduct, cart, setCart }) => {
	const addToCart = (thisProduct) => {
		const productCart = { key: thisProduct.id, ...thisProduct };

		const verifyCart = cart.filter(
			(product) => product.id === thisProduct.id
		);

		if (verifyCart.length === 0) {
			setCart([...cart, productCart]);
			toast.success("Produto adicionado ao carrinho");
		} else {
			toast.error("Produto não adicionado ao carrinho");
		}
	};

	return (
		<StyledLi key={thisProduct.id}>
			<div>
				<img src={thisProduct.img} alt={thisProduct.name} />
			</div>
			<StyledBoxInfo>
				<h3>{thisProduct.name}</h3>
				<h5>{thisProduct.category}</h5>
				<span>
					{thisProduct.price.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<button onClick={() => addToCart(thisProduct)}>
					Adicionar
				</button>
				<Toaster />
			</StyledBoxInfo>
		</StyledLi>
	);
};

export default Product;
