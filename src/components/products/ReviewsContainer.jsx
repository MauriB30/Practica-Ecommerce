import React from 'react'

export default function ReviewsContainer({ reviews = [] }) {

  return (
    <div className="bg-white col-span-2 overflow-auto p-2 flex flex-col gap-2 rounded">
        <h3 className="font-medium">Products Reviews</h3>
        {
            reviews.length > 0 && (
                reviews.map( (review, index )=> (
                    <p key={index} className="font-light">{review}</p>
                ))
            ) 
        }
    </div>
  )
}
