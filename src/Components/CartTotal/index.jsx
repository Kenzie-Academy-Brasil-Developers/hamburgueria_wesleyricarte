import { StyledDiv, StyledDivEmpty } from "./style";
import { toast, Toaster } from "react-hot-toast";

const CartTotal = ({ cart, setCart }) => {
	const totalValue = cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	);

	const removeAll = () => {
		setCart([]);
		toast.success("TODOS OS PRODUTOS REMOVIDOS");
	};

	return (
		<>
			{cart.length > 0 ? (
				<StyledDiv>
					<div>
						<h3>Total</h3>
						<span>
							{totalValue.toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
					<button onClick={() => removeAll()}>Remover Todos</button>
					<Toaster />
				</StyledDiv>
			) : (
				<StyledDivEmpty>
					<h3>Sua sacola está vazia</h3>
					<h5>Adicione itens</h5>
				</StyledDivEmpty>
			)}
		</>
	);
};

export default CartTotal;
