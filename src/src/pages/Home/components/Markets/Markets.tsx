import React from 'react'
import Heading from './componets/heading/Heading'
import Graph from './componets/graph/Graph'

const Markets = () => {
  return (
    <div className='min-h-screen ' style={{ marginTop: "var(--margin-top-lg)" }}>
      <Heading/>
      <Graph/>
    </div>
  )
}

export default Markets
