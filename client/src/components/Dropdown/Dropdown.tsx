import { useState } from 'react';
import clsx from 'clsx';
import './Dropdown.css'

const Dropdown = (props: { options: string[] }) => {
  const options = props.options;
  const [show, setShow] = useState(false)
  return (
    <>
      <span onClick={()=>setShow(!show)}>Dropdown &#8964;</span>

      <ul className={clsx("dropdown", {"dropdown--show":show}) }>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
