import React from 'react'

function ProjectPreview({discription}) {

  return (
    <div className='w-[50ch] mx-auto flex flex-col items-center xl:text-2xl 2xl:text-3xl'>
        <p>{discription}</p>
    </div>
  )
}

export default ProjectPreview