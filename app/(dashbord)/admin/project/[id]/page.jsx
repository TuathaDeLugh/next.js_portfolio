import getSingleProject from "@/controllers/singleproject";

async function Details({ params: { id } }) 
{
    
const project = await getSingleProject(id); 
  return (
    <>
    <div>{project.title}</div>
    <div>{project.info}</div>

    </>
  )
}

export default Details