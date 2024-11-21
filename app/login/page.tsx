import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <main className='h-dvh flex flex-col items-center gap-6 text-3xl p-4'>
      <h1>oxFUND Investment</h1>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Button asChild>
          <LoginLink>Sign In</LoginLink>
        </Button>
        <Button asChild>
          <RegisterLink>Sign Up</RegisterLink>
        </Button>
      </div>
    </main>
  )
}
