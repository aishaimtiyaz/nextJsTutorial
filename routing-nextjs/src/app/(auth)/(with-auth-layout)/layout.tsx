import React from 'react'

export default function Authlayout({
    children,}:{
        children:React.ReactNode;
    }) {
  return (
    <div>
      <h2>Inner Auth Layout</h2>
      {children}
    </div>
  )
}
