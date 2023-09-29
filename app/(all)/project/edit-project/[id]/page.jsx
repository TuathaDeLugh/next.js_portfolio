import getSingleProject from '@/controllers/singleproject'
import EditProjectForm from '@/components/EditProjectForm'
import React from 'react'

async function EditProject({ params: { id } }) 
{
    
const project = await getSingleProject(id); 

  return (
    <>
    {/* <div>{project.title}</div>
    <div>{project.info}</div> */}
    <div><EditProjectForm project={project}></EditProjectForm></div>
    </>
  )
}

export default EditProject