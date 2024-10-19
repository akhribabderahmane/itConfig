import React from 'react'
import TopBar from '../shared/TopBar'
import Header from '../shared/Header'
import StatTable from './StatTable'

const Clients = () => {
  return (
    <div className=" w-full rounded-t-md space-y-10 ">
      <TopBar page={"clients"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={"> On branch dashboard network control is active."}
          description={"> Review stats and performance below."}
          keyword={"clients"}
        />
      </div>
      <div className=" px-10">
        <StatTable />
      </div>
    </div>
  )
}

export default Clients
