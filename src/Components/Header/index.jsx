import Logo from "../Logo";
import InputSearch from "../InputSearch";
import { StyledHeader, StyledNav } from "./style";

const Header = ({ setSearch }) => {
	return (
		<StyledHeader>
			<StyledNav>
				<Logo />
				<InputSearch setSearch={setSearch} />
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
