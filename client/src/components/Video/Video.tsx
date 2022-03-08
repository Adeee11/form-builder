import { VideoContainer } from "./Video.styles";

const Video = (props: {width?:string, url: string }) => {
  const { url,width } = props;
  return (
    <>
      <VideoContainer width={width} autoPlay loop playsInline>
        <source src={url} type="video/mp4"/>
      </VideoContainer>
    </>
  );
};

export default Video;
