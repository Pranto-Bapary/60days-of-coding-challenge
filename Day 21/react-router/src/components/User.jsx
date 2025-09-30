import React from 'react'
import { useParams } from 'react-router'

function User() {
    const params = useParams()
  return <div className="w-full h-150 flex items-center justify-center">
    <h1 className="text-4xl font-semibold text-gray-700">
        Hello I am User Component and: {params.username}
    </h1>
    </div>
}

export default User