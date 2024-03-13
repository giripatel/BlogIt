import { useState } from 'react'
import Quote from '../components/Quote'
import { SignupInput } from '@giridhar_patel/blogit-common';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import axios from 'axios';
import {baseUrl} from '../vite.config';

 const Signup = () => {

  const [payload, setPayload] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });

  // const onClickHandler = 

  return (
    <div className='grid lg:grid-cols-2'>
        <div>   
        <div className="flex flex-col justify-center items-center h-screen ">
      <div className="border-[0.5px] p-5 rounded-md shadow-2xl">
        <Header type={"singup"}/>
        <div>
        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          label="email"
          placeholder="giridhar@gmail.com"
        />

        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          label="name"
          placeholder="giridhar"
        />

        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          label="password"
          placeholder="*****"
        />
        <Button 
        onClick={async (e) => {
          e.preventDefault();
          const response = await axios.post(`${baseUrl}/api/v1/user/signup`,{
            email : payload.email.trim(),
            name : payload.name.trim(),
            password : payload.password.trim()
          })
          console.log(response)
        }} 
        >Sign in</Button>
      </div>
      </div>
    </div>
        </div>
        <div className='hidden lg:block'>
        <Quote></Quote> 
        </div>
    </div>
  )
}

export default Signup

