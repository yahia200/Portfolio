import React from 'react'

function ProjectPreview({discription}) {

  return (
    <div className='w-1/2 mr-10 flex flex-col items-center text-3xl'>
        <p>{discription}</p>
    </div>
  )
}

export default ProjectPreview