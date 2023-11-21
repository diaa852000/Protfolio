import React, {useRef, useState} from "react";
import Map from "../Map/Map";
import emailjs from '@emailjs/browser';
import { Section } from "../../Styled/Container/Container.styles";
import  ToastrBtn  from "../BtnToastr/BtnToastr";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_c0vc0fr', 'template_ladcnbt', formRef.current, 'Q_tW8r5vqGYqlL4hV').then((result) => {
      setSuccess(true);
      }, (error) => {
        setSuccess(false);
    });
  }

  return (
    <div id="contact" className="relative overflow-x-hidden">
      <Section className="max-w-[1240px] mx-auto p-2 flex items-center md:items-end lg:items-center h-[800px]">
        <div className="w-full md:w-2/3 xl:w-1/2 mx-auto xl:mx-0">
          <form ref={formRef} className="p-2 text-black md:text-lg" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="h-11 w-full rounded-sm p-2 outline-0 border-0 bg-[rgba(255,255,255,0.8)] block my-2"/>
            <input type="email" name="email" placeholder="Email" className=" h-11 w-full rounded-sm p-2 outline-0 border-0 bg-[rgba(255,255,255,0.8)] block my-2"/>
            <textarea name="message" rows={'8'} placeholder="Write your message" className="w-full rounded-sm p-2 outline-0 border-0 bg-[rgba(255,255,255,0.8)] block my-2 placeholder:py-1"/>
            <div className="flex justify-center">
              <ToastrBtn ClassName="py-1 px-5 rounded-md" btnType='submit' btnText='notify' text='Sent successfully' status={success}/>
            </div>
          </form>
        </div>
        <Map />
      </Section>
    </div>
  );
};

export default Contact;
