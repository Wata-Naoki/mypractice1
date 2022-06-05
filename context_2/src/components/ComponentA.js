import React from 'react'
import ComponentB from './ComponentB'

export const UserCount = React.createContext()


const ComponentA = () => {
    return (
        <div>
            <p>Componet A</p>
            <ComponentB />
        </div>
    )
}

export default ComponentA