import Images from '@/components/ui/Images/Images'
import React from 'react'

const Heading = () => {
  return (
    <div className="flex justify-center">
        <div className="mt-spacing-md">
          <Images
            src="/icons/Brands.png"
            alt="Our Services"
            width={200}
            height={200}
            className="w-full max-w-lg"
          />
        </div>
      </div>
  )
}

export default Heading
