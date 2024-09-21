import React from 'react'
import AgendaCard from './AgendaCard'

const ViewAgenda = () => {
  return (
    <>
     <div className="container px-5 py-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AgendaCard/>
          <AgendaCard/>
          <AgendaCard/>
        </div>
        </div>
    </>
  )
}

export default ViewAgenda
