'use client'
import { useState } from "react"
import InputGroup from "../components/inputGroup/page"
import Button from "../components/Button/page"
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function SignIn() {
    
     const router = useRouter()
    const [form, setForm] = useState()
    const handleChange = (e)=> {
        setForm({...form, [e.target.name] : e.target.value})
    } 

    const handleSubmit = (e)=> {
    e.preventDefault()
     router.push('/moviehome')
   
}


    return (
    <div className="min-h-screen flex items-center justify-center">
      
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            
              <header className="text-3xl">Welcome To Movie Gallery</header>   
            <p className="mt-5">Email:</p>
            <InputGroup name='email' type='email' onChange={handleChange} placeholder='test@example.com'/>
            <p className="mt-6">Password:</p>
            <InputGroup name='password' type='password' onChange={handleChange} placeholder='******'/>
            <div className="mt-6">
            <Button name='submit' type='submit' onClick={handleSubmit} >Sign in</Button>
          
            <div className="flex flex-col mb-6 mt-6">
            <Link  href="/signup">New? Sign up</Link> 
            <Link href="/forgotpass">Forgot Password?</Link>
            </div>
            </div>
            
        </form>
    </div>
  )
}
