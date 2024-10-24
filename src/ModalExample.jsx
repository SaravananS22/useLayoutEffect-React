import React, { useLayoutEffect, useRef, useState } from 'react'

const ModalExample = () => {
    const [show,setShow]=useState(false);

    const popup=useRef(null);
    const button=useRef(null);

    useLayoutEffect(()=>{
        if(popup.current===null || button.current===null) return;
        const {bottom}=button.current.getBoundingClientRect();
        popup.current.style.top=`${bottom+25}px`;
    },[show]);

    const handleToggle=()=>{
        setShow(prevState=>!prevState);
    }

  return (
    <div>
        <button ref={button} onClick={handleToggle}>
            Click Here
        </button>
        {
            show && (
                <div style={{position:'absolute'}} ref={popup}>
                    This is a popup
                </div>
            )
        }
    </div>
  )
}

export default ModalExample
