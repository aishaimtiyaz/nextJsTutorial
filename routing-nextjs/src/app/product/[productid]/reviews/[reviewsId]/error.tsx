"use client"
export default function ErrorBoundry({error,reset}:{error:Error,
    reset:()=>void;
})
{
    return (
<div>
    <h2>{error.message}</h2>
</div>
    );
}