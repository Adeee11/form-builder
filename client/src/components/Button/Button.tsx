import { StyledButton } from "./Button.styles"

const Button = (props:{text:string, btnColor?:string}) => {
  const {text, btnColor } = props
  return (
    <>
      <StyledButton btnColor={btnColor} >{text}</StyledButton>
    </>
  )
}

export default Button
