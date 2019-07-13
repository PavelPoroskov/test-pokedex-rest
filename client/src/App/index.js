import React from 'react'

// import { useFetch } from 'api/fetch'
import { usePostFetch } from 'api/fetch'

function App () {
  const { data } = usePostFetch('/api')

  if (data) {
    return <div>{data.msg}</div>
  }

  return <div>Hello World from test-pokedex-rest-client</div>
}

export default App
