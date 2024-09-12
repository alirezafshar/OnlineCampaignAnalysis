import { useState } from 'react'

const UseApi = (apiFunc) => {
    const [status, setStatus] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    // call api request
    const request = async () => {
        setStatus(false)
        try {
            // on successful request
            const result = await apiFunc()
            setData(result.data)
            setStatus(true)
            setError('')
        } catch (err) {
            // on error
            console.error('unexpected api error!', err)
            setError(err)
        }
    }

    return {
        status,
        data,
        error,
        request
    }
}

export default UseApi