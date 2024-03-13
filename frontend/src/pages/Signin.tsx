import { useState } from 'react'
import { SigninInput } from '@giridhar_patel/blogit-common'
import Quote from '../components/Quote'
import Input from '../components/Input'
import Header from '../components/Header'
import Button from '../components/Button'
import axios from 'axios'
import {baseUrl} from '../vite.config'

const Signin = () => {

  const [payload, setPayload] = useState<SigninInput>({
    email: "",
    password: "",
  }); 

  return (
    <div className='grid lg:grid-cols-2'>
        <div>   
        <div className="flex flex-col justify-center items-center h-screen ">
      <div className="border-[0.5px] p-5 rounded-md shadow-2xl">
        <Header type={"signin"}/>
        <div>
        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, email: e.target.value }))
          }
          value={payload.email}
          type="text"
          label="email"
          placeholder="giridhar@gmail.com"
        />

        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, password: e.target.value }))
          }
          value={payload.password}
          type="password"
          label="password"
          placeholder="*****"
        />
        <Button  onClick={async (e) => {
          e.preventDefault()
          console.log(baseUrl);
          
          const response = await axios.post(`${baseUrl}/api/v1/user/signin`,{
            email : payload.email.trim(),
            password : payload.password.trim()
          });
          console.log(response);
          payload.email = "",
          payload.password = ""
        }}>Sign up</Button>
      </div>
      </div>
    </div>
        </div>
        <div className='invisible lg:visible'>
            <Quote></Quote> 
        </div>
    </div>
  )
}

export default Signin


