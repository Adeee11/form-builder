import React, { Dispatch, SetStateAction } from 'react'
type propTypes = {
    menu: string;
    setMenu: Dispatch<SetStateAction<string>>;
    data: any;
}
const Nav = ({ setMenu, menu, data }: propTypes) => {
    return (
        <ul>
            <li onClick={() => setMenu('insights')} className={menu === "insights" ? "active" : ""}>Insights</li>
            <li onClick={() => setMenu('summary')} className={menu === "summary" ? "active" : ""}>Summary</li>
            <li onClick={() => setMenu('responses')} className={menu === "responses" ? "active" : ""}>Responses [{data && data.form.submission.length}]</li>
        </ul>
    )
}

export default Nav