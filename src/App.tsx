import React from 'react'
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {
      name: 'Tanaka',
      age: 12,
    },
    {
      name: 'Sato',
      age: 39,
    },
  ]
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })}
      <h1>Hello, world</h1>
    </div>
  )
}

const User = (props: { name: string; age: number }) => {
  return (
    <div>
      I am {props.name}! And {props.age} years old.
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App
