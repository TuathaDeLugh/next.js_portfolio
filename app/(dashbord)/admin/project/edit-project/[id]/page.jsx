import getSingleProject from '@/controllers/singleproject'
import EditProjectForm from '@/components/EditForm/EditProjectForm'
import React from 'react'

async function EditProject({ params: { id } }) 
{
    
const project = await getSingleProject(id); 

  return (
    <>
    <div><EditProjectForm project={project}></EditProjectForm></div>
    </>
  )
}

export default EditProject