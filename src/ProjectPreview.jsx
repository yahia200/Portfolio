import React from 'react'

function ProjectPreview({discription}) {

  return (
    <div className='text-center w-1/2 mr-10 flex items-center mb-32'>
        <p>{discription}</p>
    </div>
  )
}

export default ProjectPreview