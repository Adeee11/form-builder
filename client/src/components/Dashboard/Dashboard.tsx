import { DashboardHeader } from "../DashboardHeader";
import { SideBarMenu } from "../SideBarMenu";
import { TypeformCard } from "../TypeformCard";
import { WorkspaceAbout } from "../WorkspaceAbout";
import { WorkspaceHeader } from "../WorkspaceHeader";
import { WorkspaceMain } from "../WorkspaceMain";
import { Aside, Main, Section, Wrapper } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <DashboardHeader />
        <Main>
          <Section>
            <WorkspaceHeader />
            <WorkspaceAbout />
            <WorkspaceMain />
            <TypeformCard />
          </Section>
          <Aside>
            <SideBarMenu />
          </Aside>
        </Main>
      </Wrapper>
    </>
  );
};

export default Dashboard;
