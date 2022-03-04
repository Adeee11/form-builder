import React from 'react'

const ReviewGallery = (props:{ReviewCards:React.ReactNode[]}) => {
    const {ReviewCards} = props
  return (
    <>
    {
        ReviewCards.map(review => review)
    }
    </>
  )
}

export default ReviewGallery
