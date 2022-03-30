import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Preview } from "../../components/preview";
import { SideBarMenu } from "../../components/SideBarMenu";
import { WorkspaceAbout } from "../../components/WorkspaceAbout";
import { WorkspaceHeader } from "../../components/WorkspaceHeader";
import { WorkspaceMain } from "../../components/WorkspaceMain";
import { useAppSelector } from "../../providers/app/hooks";
import {
  Aside,
  Container,
  Header,
  Main,
  Section,
  Wrapper,
} from "./Dashboard.styles";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const onClick = () => {
    console.log(showSideBar);
    setShowSideBar(!showSideBar);
  };
  const [filter, setFilter] = useState("date");
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  const editFormId = useAppSelector((state) => state.editFormId.editFormId);
  const [preview, setPreview] = useState(false);
  if (!isLoggedIn) {
    return (
      <>
        <h1>Please Log in first</h1>
        <Link to={"/login"}>To login page</Link>
      </>
    );
  }

  if (preview) {
    // console.log("Inside if preview is true")
    return (
      <Preview formId={String(editFormId)} onClose={() => setPreview(false)} />
    );
  }
  return (
    <>
      <Wrapper>
        <DashboardHeader />
        <hr />
        <Header>
          <WorkspaceHeader onClick={onClick} />
          <hr />
        </Header>
        <Main>
          <Aside $isCollapsed={showSideBar}>
            {/* Side menu */}
            <SideBarMenu showMenu={showSideBar} />
          </Aside>
          <div className="main">
            <Section>
              {/* Workspace about */}
              <WorkspaceAbout changeFilter={setFilter} filter={filter} />
            </Section>
            <Container $isCollapsed={showSideBar}>
              {/* Workspace main */}
              <WorkspaceMain filter={filter} setPreview={setPreview} />
              <hr />
            </Container>
          </div>
        </Main>
      </Wrapper>
    </>
  );
};

export default Dashboard;
