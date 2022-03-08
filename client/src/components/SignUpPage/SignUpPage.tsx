import { Description } from "../Description"
import { SignupForm } from "../SignupForm"
import { SignupHeader } from "../SignupHeader"


const SignUpPage = () => {
  const heading = "Typeform"
  const text = "Get better data with conversational forms, surveys, quizzes & more."
  return (
    <>
      <SignupHeader/>
      <Description heading={heading} text={text} headingSize={30} textSize={24}/>
      <SignupForm />
    </>
  )
}

export default SignUpPage
