// import { useEffect, useState } from 'react'
import { AppShell, Burger, Group, NavLink, Skeleton }  from '@mantine/core'
import Dashboard from './components/Dashboard'
import { useDisclosure } from '@mantine/hooks';
import { IconHome2 } from '@tabler/icons-react'

function App() {
  // const [response, setResponse] = useState('')
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/v1/health')
  //     .then((response) => response.json())
  //     .then((response) => setResponse(response))
  //     .catch((error) => console.error('Error fetching health:', error))
  // }, [])

  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{width: 300, breakpoint: 'sm', collapsed: { mobile: !opened}}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>RunTrackr</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          href="#required-for-focus"
          label="Running"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={true} />
          ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Dashboard />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
