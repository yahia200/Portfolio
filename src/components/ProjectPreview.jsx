import React from 'react'

function ProjectPreview({discription}) {

  return (
    <div className='w-[60ch] mx-auto flex flex-col items-center xl:text-xs 2xl:text-xl'>
        <p>{discription}</p>
    </div>
  )
}

export default ProjectPreview