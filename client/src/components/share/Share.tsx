import { gql, useQuery } from "@apollo/client";
import { useRef } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMessageFill } from "react-icons/ri";
import { Container } from "./Share.styles";

const GET_TITLE = gql`
  query form($input: ID!) {
    form(formId: $input) {
      id
      date
      title
      owner
    }
  }
`;
type propType = {
  formId?: string;
};

const Share = ({ formId }: propType) => {
  const linkRef = useRef<any>("");
  const { data } = useQuery(GET_TITLE, {
    variables: {
      input: formId,
    },
  });
  const myFunction = (copytext: string) => {
    linkRef.current.select();
    navigator.clipboard.writeText(copytext);
  };
  return (
    <>
      <Container>
        <span className="heading">Share your typeForm</span>
        <div className="section1">
          <div className="box1">
            <div className="ico">
              <AiOutlineLink />
            </div>

            <div className="text">Get the link or share on social</div>
            <div className="inputandbtn">
              <input
                type="text"
                ref={linkRef}
                value={data && window.location.origin + "/form/" + data.form.id}
              />
              <button
                onClick={() =>
                  myFunction(
                    data && window.location.origin + "/form/" + data.form.id
                  )
                }
              >
                Copy Link
              </button>
            </div>
            <div className="socialmedia">
              <span>
                <MdEmail />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <BsTwitter />
              </span>
            </div>
          </div>
          <div className="box2">
            <div className="ico">
              <RiMessageFill />
            </div>
            <div className="text">Start a chat</div>
            <div className="para">
              Dress your typeform up in a chat style interface. embed or share
              it anywhere.
            </div>
          </div>
          <div className="box3">
            <div className="ico">
              <MdEmail />
            </div>
            <div className="text">Launch an email</div>
            <div className="para">
              Your first question loads in an email. interacting with it
              launches the full typeform.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Share;
