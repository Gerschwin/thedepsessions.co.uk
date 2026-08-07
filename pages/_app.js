import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  return <Component {...pageProps} session={session} />
}
