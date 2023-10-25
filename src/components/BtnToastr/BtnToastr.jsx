import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../../Styled/Buttons/Buttons.styles';


export const ToastrBtn = ({text, btnText, btnType, ClassName, status})=>{
    const notify = (text)=> {
      if(status){
        toast.success(`${text}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else{
        toast.success(`${text}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }      
    }
      
    return (
    <>
      <Button type={`${btnType}`} className={`${ClassName}`} onClick={()=> notify(text)}>{btnText}</Button>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
    )
}

export default ToastrBtn;