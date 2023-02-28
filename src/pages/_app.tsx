import type { AppProps } from 'next/app'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
<>  
  <div className=' flex content-center justify-center w-screen '>
    <header className='p-4'>
      <span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"'
      >
        Welcome to SpyKanban
      </span>
    </header>
  </div>
  

  <Component {...pageProps} />
  </>
  )
}
 