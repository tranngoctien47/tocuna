import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function Loadding() {
    let { loaddingLogin } = useSelector(state => state.isDifferent)
    let width = 50
    return (

        loaddingLogin &&
        <>
            <div className='loadding' style={{ zIndex: '99999' }}>
                <div className="container">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <p>Loadding.....</p>
                </div>
            </div>
        </>

    );
}

export default Loadding;