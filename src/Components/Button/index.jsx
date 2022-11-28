import { StyledButton } from "./style";

const Button = ({ className, type, children }) => {

	return (
		<StyledButton
			className={className}
			type={type}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
