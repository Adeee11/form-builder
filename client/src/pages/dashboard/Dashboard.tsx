import { useState } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { SideBarMenu } from "../../components/SideBarMenu";
import { WorkspaceAbout } from "../../components/WorkspaceAbout";
import { WorkspaceHeader } from "../../components/WorkspaceHeader";
import { WorkspaceMain } from "../../components/WorkspaceMain";
import {
  Aside,
  Container,
  Header,
  Main,
  Section,
  Wrapper,
} from "./Dashboard.styles";

const Dashboard = () => {
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(true);
  const onClick = () => {
    setIsSideMenuCollapsed(!isSideMenuCollapsed);
  };
  return (
    <>
      <Wrapper>
        <DashboardHeader />
        <hr />
        <Main $isCollapsed={isSideMenuCollapsed}>
          <Header>
            {/* Workspace Header */}
            <WorkspaceHeader onClick={onClick} />
            <hr />

          </Header>
          
          <Section>
            {/* Workspace about */}
            <WorkspaceAbout />
            <hr />
          </Section>
          <Container $isCollapsed={isSideMenuCollapsed}>
            {/* Workspace main */}
            <WorkspaceMain />
            <hr />
          </Container>
          <Aside $isCollapsed={isSideMenuCollapsed}>
            {/* Side menu */}
            <SideBarMenu showMenu={!isSideMenuCollapsed} />
          </Aside>
        </Main>
      </Wrapper>
    </>
  );
};

export default Dashboard;
