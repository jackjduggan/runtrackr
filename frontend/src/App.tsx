// import { useEffect, useState } from 'react'
import { AppShell }  from '@mantine/core'

function App() {
  // const [response, setResponse] = useState('')
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/v1/health')
  //     .then((response) => response.json())
  //     .then((response) => setResponse(response))
  //     .catch((error) => console.error('Error fetching health:', error))
  // }, [])

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm'
      }}
      padding="md"
    >
      <AppShell.Header>
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default App
