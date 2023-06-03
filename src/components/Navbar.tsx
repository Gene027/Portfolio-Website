import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { buttonVariants } from './ui/Button'
import SignInButton from './ui/SignInButton'
import SignOutButton from './ui/SignOutButton'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-56 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div>
      <Link href='/'>
        <Image src={'/logo.svg'} alt='Logo' width={300} height={50}/>
        </Link>
      </div>

      <div className='container max-w-7xl flex justify-between items-center'>

        {/* Desktop Navlinks */}
        <div>
        <Link href='/projects' className={buttonVariants({ variant: 'link' })}>
          Projects
        </Link>

        <Link href='/blog' className={buttonVariants({ variant: 'link' })}>
          Blog
        </Link>

        <Link href='/about' className={buttonVariants({ variant: 'link' })}>
          About Me
        </Link>

        <Link href='/contact' className={buttonVariants({ variant: 'link' })}>
          Contact
        </Link>
        </div>

        {/* Mobile ThemeToggle */}
        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        {/* Desktop Themetoggle and auth */}
        <div className='hidden md:flex gap-4'>
          <ThemeToggle />
          <Link
            href='/skills'
            className={buttonVariants({ variant: 'ghost' })}>
            Skills
          </Link>
          <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}>
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'>
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
