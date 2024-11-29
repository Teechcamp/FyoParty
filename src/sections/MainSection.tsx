import GradientLayout from '@/layouts/GradientLayout'
import Image from 'next/image'
import React from 'react'

const MainSection = () => {
  return (
    <GradientLayout invert={false}>
      <section className='pt-[16px] px-[25px] h-[100vh]'>
      <div className='text-center relative'>
          <h1 className="font-playfair-display font-bold text-[40px] text-indigo-100">Sandra Valeria</h1>
          <h3 className='font-nautigal text-[48px] text-pink-300 relative top-[-32px]'>Mis quince años</h3>
      </div>

      <div className='text-center mt-[16px]'>
          <h3 className='font-playfair-display font-bold text-[24px] text-indigo-100'>28 de diciembre</h3>
      </div>

      <div className='relative h-[calc(100vh-490px)]'>
        <Image className='absolute top-[16px]' src={"assets/start.svg"} alt='start' width={24} height={22} />
        <Image className='absolute right-[8px] top-[-12px]' src={"assets/start.svg"} alt='start' width={24} height={22} />
        <Image className='absolute left-[calc(50%-12px)] top-[40%]' src={"assets/start.svg"} alt='start' width={24} height={22} />
        <Image className='absolute left-[32px] bottom-0' src={"assets/start.svg"} alt='start' width={24} height={22} />
        <Image className='absolute right-[36px] bottom-[32px]' src={"assets/start.svg"} alt='start' width={24} height={22} />
      </div>

      <div className='flex justify-center'>
        <Image className='absolute bottom-0' src={"assets/modulo1.svg"} alt='image presentation' width={360} height={312} priority/>
      </div>
      </section>
    </GradientLayout>
  )
}

export default MainSection