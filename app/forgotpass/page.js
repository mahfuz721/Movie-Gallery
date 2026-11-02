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
            
            <header className="text-3xl">Change Password</header>
            <p className="mt-5">Email:</p>
            <InputGroup name='email' type='email' onChange={handleChange} placeholder='test@example.com'/>
            <p className="mt-6">Verification Code:</p>
            <InputGroup name='text' type='text' onChange={handleChange} placeholder='000000'/>
            <div className="flex flex-col mb-6 mt-6">
            
            <Button type='submit' name='change password' onClick={handleSubmit} >Change Password</Button>
            </div>
            
        </form>
    </div>
  )
}
