import { StyledLi, StyledBoxInfo } from "./style";

const Product = ({ thisProduct, cart, setCart }) => {
	const addToCart = (thisProduct) => {
		const productCart = thisProduct;

		const verifyCart = cart.filter(
			(product) => product.img === thisProduct.id
		);
		console.log(verifyCart);

		if (verifyCart.length === 0) {
			setCart([...cart, productCart]);
			console.log("adicionadp no carrinho");
		} else {
			console.log("erro ao adicionar no carrinho");
		}
	};

	return (
		<StyledLi>
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
			</StyledBoxInfo>
		</StyledLi>
	);
};

export default Product;
