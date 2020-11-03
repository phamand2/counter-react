import React, {useState} from 'react'

function Button() {
  const [count, setCount] = useState(0)

  const [transform, setTransform] = useState(0)

  const increment = () => {
    setCount(count + 1)
    setTransform(transform + 50)
  }

  const decrement = () => {
    setCount(count - 1)
    setTransform(transform + 131)
  }

  const changeNumber = (event) => { 
    if (parseInt(event.target.value) == null) {
      return 
    } else {
      setCount(parseInt(event.target.value))
    }}



  return (
    <>
      <h1 className='d-flex justify-content-center'>My Counter</h1>
      <div className='container d-flex justify-content-center'>
        <div>
          <button className='btn btn-primary' onClick={increment}>Increment</button>
            <input style={{transform: `rotate(${transform}deg)`}} type="number" pattern="[0-9]*" value={count} onChange={changeNumber}></input> 
          <button className='btn btn-danger' onClick={decrement}>decrement</button>
        </div>
      </div>
    </>
  )
}

export default Button
