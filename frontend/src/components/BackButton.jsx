import React from 'react'

const BackButton = ({destination='/'}) => {
  return (
    <div className="flex">
        <Link 
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
      

        </Link>

    </div>
  )
}

export default BackButton;