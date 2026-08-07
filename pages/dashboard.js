import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Dashboard({ session }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let mounted = true
    async function loadProfile() {
      const user = session?.user
      if (!user) return
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (error) {
        console.error(error)
        return
      }
      if (mounted) setProfile(data)
    }
    loadProfile()
    return () => { mounted = false }
  }, [session])

  if (!session) return (
    <main style={{padding: '2rem'}}>
      <p>Please <a href="/auth">sign in</a> to view your dashboard.</p>
    </main>
  )

  return (
    <main style={{padding: '2rem'}}>
      <h1>Your dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </main>
  )
}
