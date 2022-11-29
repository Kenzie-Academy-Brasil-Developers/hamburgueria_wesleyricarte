import { StyledUl, StyledLi } from "../CartProduct/style";
import { toast, Toaster } from "react-hot-toast";

const CartProduct = ({ cart, setCart }) => {
	const removeFromCart = (uuid) => {
		setCart(cart.filter((element) => element.id !== uuid));
		toast.success("Produto removido do carrinho");
	};

	return (
		<StyledUl>
			{cart.map((elem) => {
				return (
					<StyledLi key={elem.id}>
						<div className="divImgItem">
							<div className="divImg">
								<img src={elem.img} alt={elem.name} />
							</div>
							<div className="divItem">
								<h3>{elem.name}</h3>
								<h5>{elem.category}</h5>
							</div>
						</div>
						<button onClick={() => removeFromCart(elem.id)}>
							Remover
						</button>
						<Toaster />
					</StyledLi>
				);
			})}
		</StyledUl>
	);
};

export default CartProduct;
