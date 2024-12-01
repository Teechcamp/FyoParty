'use client'
import CeremonyLocationSection from '@/sections/CeremonyLocationSection'
import GreetingsSection from '@/sections/GreetingsSection'
import MainSection from '@/sections/MainSection'
import ProgramEventSection from '@/sections/ProgramEventSection'
import ReceptionSection from '@/sections/ReceptionSection'
import ScheduleSection from '@/sections/ScheduleSection'

const page = () => {
  return (
    <>
      <MainSection />
      <ScheduleSection />
      <CeremonyLocationSection />
      <ReceptionSection />
      <ProgramEventSection />
      <GreetingsSection />
    </>
  )
}

export default page