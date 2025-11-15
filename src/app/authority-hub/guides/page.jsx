import React from 'react'
import { GuideHero } from './sections/GuideHero'
import ResourceCategory from './sections/ResourceCategory'
import FeaturedGuide from './sections/FeaturedGuides'
import CompleteGuide from './sections/CompleteGuide'
import GuideCTA from './sections/GuideCTA'

const page = () => {
  return (
    <main>
      <GuideHero/>
      <ResourceCategory/>
      <FeaturedGuide/>
      <CompleteGuide/>
      <GuideCTA/>
    </main>
  )
}

export default page