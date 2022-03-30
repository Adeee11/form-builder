import styled from "styled-components";

type WidthProp = {
  width?: string;
};

const VideoContainer = styled.video<WidthProp>`
  width: ${({ width }) => width || "100%"};
  height: auto;
`;
export { VideoContainer };
