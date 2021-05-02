import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()

  // Only fire once when the component renders
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000) // 4 seconds
  }, [router]) // or []

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Ooops! Page not found :(</h2>
      <p>
        Return to <Link href="/">Homepage</Link>
      </p>

      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  )
}
