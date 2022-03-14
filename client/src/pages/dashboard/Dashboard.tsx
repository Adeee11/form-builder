import { useState } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { SideBarMenu } from "../../components/SideBarMenu";
import { WorkspaceAbout } from "../../components/WorkspaceAbout";
import { WorkspaceMain } from "../../components/WorkspaceMain";
import { Aside, Main, Section, Wrapper } from "./Dashboard.styles";

const Dashboard = () => {

  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false)
  return (
    <>
      <Wrapper>
        <DashboardHeader />
        <Main $isCollapsed = {isSideMenuCollapsed}>
          <Section>
            <WorkspaceAbout />
            <WorkspaceMain />
            
          </Section>
        </Main>
        {/* Aside menu and workspce header are same thing. Collapsed aside menu is workspace header  */}
        <Aside $isCollapsed = {isSideMenuCollapsed}>
          <SideBarMenu />
        </Aside>
        <button onClick={()=>setIsSideMenuCollapsed(!isSideMenuCollapsed)}>Test for Collapse</button>
      </Wrapper>
    </>
  );
};

export default Dashboard;
