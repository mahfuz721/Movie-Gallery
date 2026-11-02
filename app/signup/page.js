'use client'
import { useState } from "react"
import InputGroup from "../components/inputGroup/page"
import Button from "../components/Button/page"
import { useRouter } from "next/navigation"

export default function SignUp() {
    const router = useRouter()
    const [form, setForm] = useState()
    const handleChange = (e)=> {
        setForm({...form, [e.target.name] : e.target.value})
    } 

    const handleSubmit = (e)=> {
    e.preventDefault()
    router.push('/signin')
}
    

    return (
    <div className="min-h-screen flex items-center justify-center">
      
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            
            <header className="text-3xl">Sign up</header>
            <p className="mt-5">Email:</p>
            <InputGroup name='email' type='email' onChange={handleChange} placeholder= 'test@example.com'/>
            <p className="mt-6">Password:</p>
            <InputGroup name='password' type='password' onChange={handleChange} placeholder='******'/>
            <div className="flex flex-col mb-6 mt-6">
            
            <Button type='submit' name='sign up' onClick={handleSubmit} >Sign up</Button>
            </div>
            
        </form>
    </div>
  )
}
