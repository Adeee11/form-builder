import { useState } from "react";
import { DashboardHeader } from "../DashboardHeader";
import { SideBarMenu } from "../SideBarMenu";
import { TypeformCard } from "../TypeformCard";
import { WorkspaceAbout } from "../WorkspaceAbout";
import { WorkspaceMain } from "../WorkspaceMain";
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
