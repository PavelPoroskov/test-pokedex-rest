import React from 'react'

import { useFetch } from 'api/fetch'


function App () {
  const { data } = useFetch('http://localhost:8000')

  if (data) {
    return <div>{data.msg}</div>
  }

  return <div>Hello World from test-pokedex-rest-client</div>
}

export default App
