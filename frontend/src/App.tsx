import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('')
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/health')
      .then((response) => response.json())
      .then((response) => setResponse(response))
      .catch((error) => console.error('Error fetching health:', error))
  }, [])

  return (
    <>
      {response && (
        <div>
          <h1>Health Check</h1>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </>
  )
}

export default App
