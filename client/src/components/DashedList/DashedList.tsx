import { List, DashedItem } from "../styles/List.styled"
import { Heading } from "../styles/Heading.styled"


const DashedList = (props:{items:string[], heading:string}) => {
    const {items, heading }= props
  return (
      <>
      <Heading fontSize={24}>{heading}</Heading>
      <List>
       {items.map((item) => (
          <DashedItem>{item}</DashedItem>
        ))}
    </List>
      </>
    
  )
}

export default DashedList
