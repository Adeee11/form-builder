import Icon from "../Icon/Icon"
import { Container } from "../styles/Container.styled"

const IconsGrid = (props:{icons:string[]}) => {
    const icons = props.icons
  return (
    <Container>
      {
          icons.map(icon => <Icon iconImg={icon}/>)
      }
    </Container>
  )
}

export default IconsGrid
