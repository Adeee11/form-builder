import { VideoContainer } from "./Video.styles";

const Video = (props: { url: string }) => {
  const { url } = props;
  return (
    <>
      <VideoContainer autoPlay loop playsInline>
        <source src={url} type="video/mp4"/>
      </VideoContainer>
    </>
  );
};

export default Video;
