import { StyledUl, StyledLi } from "../CartProduct/style";

const CartProduct = ({ cart, setCart }) => {

    const removeFromCart = (uuid) => {
        console.log("remover" + uuid)
    }
	return (
		<StyledUl>
			{cart.map((elem) => {
				return (
					<StyledLi>
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
					</StyledLi>
				);
			})}
		</StyledUl>
	);
};

export default CartProduct;
