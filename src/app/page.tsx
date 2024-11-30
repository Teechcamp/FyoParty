'use client'
import CeremonyLocationSection from '@/sections/CeremonyLocationSection'
import MainSection from '@/sections/MainSection'
import ScheduleSection from '@/sections/ScheduleSection'

const page = () => {
  return (
    <>
      <MainSection />
      <ScheduleSection />
      <CeremonyLocationSection />
    </>
  )
}

export default page