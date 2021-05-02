import Link from 'next/link'
import { Label, ThemeProvider } from '@primer/components'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>GitHub</span>
              <span>topics</span>
            </h1>
            {/* <h2>Lists for different repos</h2> */}
            <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
              <Label
                variant="large"
                bg="topicTag.bg"
                color="topicTag.text"
                sx={{
                  textTransform: 'lowercase',
                }}
              >
                lists for different repos
              </Label>
            </ThemeProvider>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}
