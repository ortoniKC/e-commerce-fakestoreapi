'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { setCurrentUser, signIn } from '../utils/auth'
import AuthForm from '../components/AuthForm'

export default function LoginPage() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (email: string, password: string) => {
    if (signIn(email, password)) {
      setCurrentUser(email)
      router.push('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
      <p className="mt-4 text-center">
        Don't have an account? <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
      </p>
    </div>
  )
}

