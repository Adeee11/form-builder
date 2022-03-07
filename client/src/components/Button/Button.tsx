import { StyledButton } from "./Button.styles"

const Button = (props:{text:string}) => {
  const {text } = props
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  )
}

export default Button
