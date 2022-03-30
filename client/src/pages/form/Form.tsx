import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Preview } from "../../components/preview";
import { Container } from "./Form.styles";

const Form = () => {
  const params = useParams();
  const [previewMode, setPreviewMode] = useState(true);
  console.log("params:", params);
  return (
    <>
      {previewMode && (
        <Preview
          formId={params.id || ""}
          onClose={() => setPreviewMode(false)}
          isForm
        />
      )}
      <Container>
        {!previewMode && (
          <p>
            <Link to="/">
              <button>Create a typeform</button>
            </Link>
          </p>
        )}
      </Container>
    </>
  );
};

export default Form;
