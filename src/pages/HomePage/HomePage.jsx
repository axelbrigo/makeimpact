import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Sectors from '../../components/Sectors/Sectors'
import TopBar from '../../components/TopBar/TopBar'



export default function HomePage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Sectors sector='⚡Electricity' text='View All' image='electricity' types="Electricity" />
      <Sectors sector='☀️Alternative Energy' text='View All' image='alternative-energy' types="Alternative-Energy" />
      <Sectors sector='🍁Forestry & Paper' text='View All' image='financial-service' types="Forestry-&-Paper" />
      <Sectors sector='💊Food & Drug Retailers' text='View All' image='drugs&retailers' types="Food-&-Drug-Retailers" />
    </>
  )
}
