import { LogoButtonContainer, LogoText } from "./LogoButton.styles";

const LogoButton = (props: { icon: React.ReactNode; text: string }) => {
  const { icon, text } = props;
  return (
    <>
      <LogoButtonContainer to={"/"}>
        {icon}
        <LogoText>{text}</LogoText>
      </LogoButtonContainer>
    </>
  );
};

export default LogoButton;
