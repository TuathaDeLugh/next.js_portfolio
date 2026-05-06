import EditExpForm from '@/components/EditForm/EditExpForm';
import getSingleExp from '@/controllers/singleexp';
import React from 'react'

async function page({ params: { id } }) {
  const exp = await getSingleExp(id);
  return (
    <div className="flex justify-center py-6">
      <EditExpForm exp={exp} />
    </div>
  );
}

export default page