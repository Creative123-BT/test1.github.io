import Images from '@/components/ui/Images/Images'
import React from 'react'

const Heading = () => {
  return (
    <div className="flex justify-center">
        <div className="mt-spacing-md">
          <Images
            src="/icons/OurServices.png"
            alt="Our Services"
            width={300}
            height={300}
            className="w-full max-w-lg"
          />
        </div>
      </div>
  )
}

export default Heading
