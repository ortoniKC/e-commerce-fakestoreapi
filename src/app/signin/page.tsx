'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthForm from '../components/AuthForm'
import { signUp, setCurrentUser } from '../utils/auth'

export default function SignInPage() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = (email: string, password: string) => {
    try {
      signUp(email, password)
      setCurrentUser(email)
      router.push('/')
    } catch (err) {
      setError('Failed to sign in. Please try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Sign up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <AuthForm onSubmit={handleSignIn} buttonText="Sign up" />
      <p className="mt-4 text-center">
        Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
    </div>
  )
}

