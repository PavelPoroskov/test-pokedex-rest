import { useReducer, useEffect } from 'react'

const initialState = {
  loading: true,
  data: null,
  error: null
}
function reducer (state, action) {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      throw new Error(`useFetch/reducer: unknown action.type ${action.type}`)
  }
}

function useFetch (URL, fnTransform) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let ignore = false

    async function fnRequest () {
      try {
        const result = await fetch(URL)
        let newData = await result.json()
        if (fnTransform) {
          newData = fnTransform(newData)
        }
        if (!ignore) {
          dispatch({ type: 'success', payload: newData })
        }
      } catch (err) {
        if (!ignore) {
          dispatch({ type: 'error', payload: err })
        }
      }
    }

    fnRequest()

    return () => {
      ignore = true
    }
  }, [URL, fnTransform])

  return {
    loading: state.loading,
    data: state.data,
    error: state.error
  }
}

function usePostFetch (URL, fnTransform) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let ignore = false

    async function fnRequest () {
      try {
        const result = await fetch(URL, {
          method: 'POST'
        })
        let newData = await result.json()
        if (fnTransform) {
          newData = fnTransform(newData)
        }
        if (!ignore) {
          dispatch({ type: 'success', payload: newData })
        }
      } catch (err) {
        if (!ignore) {
          dispatch({ type: 'error', payload: err })
        }
      }
    }

    fnRequest()

    return () => {
      ignore = true
    }
  }, [URL, fnTransform])

  return {
    loading: state.loading,
    data: state.data,
    error: state.error
  }
}

export {
  useFetch,
  usePostFetch 
}
