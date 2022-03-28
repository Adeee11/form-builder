import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { Container, Header, MenuTopBar, Text } from "./WorkspaceHeader.styles";

const WorkspaceHeader = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <>
      <Header>
        <MenuTopBar>
          <span onClick={onClick} className="menu">
            <CgMenuGridR />
            Workspaces
          </span>

          <Container>
            <AiOutlinePlus />
            <Container>
              <AiOutlineSearch />
              <Text>Find</Text>
            </Container>
          </Container>
        </MenuTopBar>
      </Header>
    </>
  );
};

export default WorkspaceHeader;
