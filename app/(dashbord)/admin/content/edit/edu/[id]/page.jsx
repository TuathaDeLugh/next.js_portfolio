import EditEduForm from '@/components/EditForm/EditEduForm';
import getSingleEdu from '@/controllers/singleedu';
import React from 'react'

async function page({params:{ id }}) {
const edu = await getSingleEdu(id)
  return (
        <div><EditEduForm edu={edu}/></div>
  )
}

export default page