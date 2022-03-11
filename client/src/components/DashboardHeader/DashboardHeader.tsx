import { Brand } from "../Brand";
import { Button } from "../Button";
import { LogoNavbar } from "../LogoNavbar";
import { Header } from "./DashboardHeader.styles";

const DashboardHeader = () => {
  const brandName = "Typeform";
  return (
    <>
      <Header>
        <Brand brandName={brandName} />
        <Button text="View Plans" btnColor="#346551"/>
        <LogoNavbar />
      </Header>
    </>
  );
};

export default DashboardHeader;
