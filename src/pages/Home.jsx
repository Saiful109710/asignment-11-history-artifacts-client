import React from 'react'
import Banner from '../components/Banner'
import FeaturedArtifacts from '../components/FeaturedArtifacts'
import HistoricalTimeline from '../components/HistoricalTimeline'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | History Artifact</title>
      </Helmet>
        <Banner></Banner>
        <FeaturedArtifacts></FeaturedArtifacts>
        <HistoricalTimeline></HistoricalTimeline>
    </div>
  )
}

export default Home
