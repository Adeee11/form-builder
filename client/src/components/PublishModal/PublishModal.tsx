import { gql, useQuery } from '@apollo/client'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdClose, MdEmail } from 'react-icons/md'
import { PublishBox } from './PublishModal.styles'
import { useRef } from 'react';

const GET_TITLE = gql`
query form($input:ID!){
    form(formId:$input){
      id
      date
      title
      owner
    }
  }
`;

type propTypes = {
    onClose: () => void;
    formId: string;

}
const PublishModal = ({ onClose, formId }: propTypes) => {
    const linkRef = useRef<any>('');
    const { loading, error, data } = useQuery(GET_TITLE, {
        variables: {
            input: formId
        },
    });

    const myFunction = (copytext: string) => {
        linkRef.current.select();
        navigator.clipboard.writeText(copytext);

    }

    return (
        <PublishBox>
            <div className='textClose'>
                <span className='text'>Get The Link</span>
                <span
                    className='close'
                    onClick={() => onClose()}
                ><MdClose /></span>
            </div>
            <div className='textButton'>
                <input
                    type="text"
                    ref={linkRef}
                    value={data ? window.location.origin + "/form/" + data.form.id : ""}
                    readOnly={true}
                />
                <button
                    type='button'
                    onClick={() => myFunction(data ? window.location.origin + "/form/" + data.form.id : "")}
                >Copy</button>
            </div>
            <div className='socialmedia'>
                <span><MdEmail /></span>
                <span><FaFacebookF /></span>
                <span><FaLinkedinIn /></span>
                <span><BsTwitter /></span>
            </div>
        </PublishBox>
    )
}

export default PublishModal