import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-mist-800 mt-10 w-full">
        <p className="text-center text-blue-400 text-4xl mb-15">
          About us
        </p>
       
       <div className="flex flex-col items-center gap-4">
        <div><Image src="/logo.png" alt="logo" width={100} height={100} /></div>
  <Link href="https://www.facebook.com/" className="flex items-center gap-2">
    <Image src="/facebook_red.png" alt="Facebook" width={20} height={20} /> Facebook
  </Link>
  <Link href="https://www.whatsapp.com/" className="flex items-center gap-2">
    <Image src="/whatsapp_red.png" alt="WhatsApp" width={20} height={20} /> WhatsApp
  </Link>
  <Link href="https://www.x.com/" className="flex items-center gap-2">
    <Image src="/x_red.png" alt="X" width={20} height={20} /> X
  </Link>
  <Link href="https://www.gmail.com/" className="flex items-center gap-2">
    <Image src="/gmail_red.png" alt="Gmail" width={20} height={20} /> Gmail
  </Link>
</div>
          
          <hr/>
          <div className='mt-6 '>
            <Link href={'/components/privacy'}> Privacy Policy</Link>
            <Link href={'/components/terms'}> Terms of Use</Link>
          </div>
      </footer>
  )
}
