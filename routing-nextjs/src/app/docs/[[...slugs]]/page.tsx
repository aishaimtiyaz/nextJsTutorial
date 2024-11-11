
export default function Docs({ params }: { params: { slugs: string[] } })
{
  const slugs = params.slugs as string[];

  {
    if(slugs?.length===2)
    {
      return (
        <h1>Viewing docs for {slugs[0]} and {slugs[1]}</h1>
      )
    }
    else if(slugs?.length===1)
    {
      return(
        <h1>Viewing docs for {slugs[0]}</h1>
      )
    }
  }
  return <h1>Docs home</h1>
}
