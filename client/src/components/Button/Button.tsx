import { StyledButton } from "./Button.styles"

const Button = (props:{text:string, btnColor?:string, onClick?:()=>void}) => {
  const {text, btnColor, onClick } = props
  return (
    <>
      <StyledButton btnColor={btnColor} onClick={onClick} >{text}</StyledButton>
    </>
  )
}

export default Button
