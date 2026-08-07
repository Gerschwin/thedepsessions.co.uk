import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  async function handleMagicLink(e) {
    e.preventDefault()
    setMessage(null)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMessage(error.message)
    else setMessage('Check your email for a sign-in link.')
  }

  return (
    <main style={{padding: '2rem'}}>
      <h1>Sign in / Sign up</h1>
      <form onSubmit={handleMagicLink}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Send magic link</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  )
}
