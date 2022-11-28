import Button from "../Button";
import { StyledInput, StyledDiv } from "./style";

const InputSearch = ({ setSearch }) => {
	const searching = (event) => {
		setSearch(event.target.value);
	};
	return (
		<StyledDiv>
			<StyledInput
				onChange={searching}
				type="text"
				placeholder="Pesquise aqui..."
			/>
			<Button onChange={searching} className={""} type={"submit"}>
				Pesquisar
			</Button>
		</StyledDiv>
	);
};

export default InputSearch;
