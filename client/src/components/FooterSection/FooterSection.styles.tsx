import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
    max-width: 80vw;
`
const WhiteLink = styled(Link)`
    color: white;
    text-decoration: none;
`

export {Container, WhiteLink}