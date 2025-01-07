import React from 'react'
import Banner from '../components/Banner'
import FeaturedArtifacts from '../components/FeaturedArtifacts'
import HistoricalTimeline from '../components/HistoricalTimeline'


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <FeaturedArtifacts></FeaturedArtifacts>
        <HistoricalTimeline></HistoricalTimeline>
    </div>
  )
}

export default Home
