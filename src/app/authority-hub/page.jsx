import React from 'react'
import AuthorityHero from './AuthorityHero'
import Framework from './Framework'
import Pillars from './Pillars'
import StrategicIntellegence from './StrategicIntellegence'
import StrategicFramework from './StrategicFramework'
import CTA from '@/components/CTA'

const page = () => {
  return (
    <main className='mb-20'>
      <AuthorityHero/>
      <Framework/>
      <Pillars/>
      <StrategicIntellegence/>
      <StrategicFramework/>
      <CTA/>
    </main>
  )
}

export default page