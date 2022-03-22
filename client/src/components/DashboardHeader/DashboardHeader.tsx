import { Brand } from "../Brand";
import { Button } from "../Button";
import { LogoNavbar } from "../LogoNavbar";
import { Container, Header } from "./DashboardHeader.styles";

const DashboardHeader = () => {
  
  const brandName = "Typeform";
  return (
    <>
      <Header>
        <Brand brandName={brandName} />
        <Container>
          <Button text="View Plans" btnColor="#346551" />
          <LogoNavbar />
        </Container>
      </Header>
    </>
  );
};

export default DashboardHeader;
