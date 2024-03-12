import React, { useState } from 'react'
import { SigninInput } from '@giridhar_patel/blogit-common'
import Quote from '../components/Quote'
import Input from '../components/Input'
import Header from '../components/Header'
import Button from '../components/Button'

const Signup = () => {

  const [payload, setPayload] = useState<SigninInput>({
    email: "",
    password: "",
  });

  return (
    <div className='grid lg:grid-cols-2'>
        <div>   
        <div className="flex flex-col justify-center items-center h-screen ">
      <div className="border-[0.5px] p-5 rounded-md shadow-2xl">
        <Header type={"signup"}/>
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
            setPayload((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          label="password"
          placeholder="*****"
        />
        <Button>Sign up</Button>
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

export default Signup
