
import { isAbsolute } from "path";
import { title } from "process";

export const metadata={
    title:{
      absolute:"", // will ignore template in children
      default:"Nextjs Tutorial",  // will apear to all the children title
      template:" prefix %s"  // if add prefix in children title

    },
    description:'Generated by Next.js'
}

export default function RootLayout({
    children,}:{children:React.ReactNode}
) {

    return (
      <html lang="en">
        <head>
          {/* Add meta tags, links, and other head elements here */}
        </head>
        <body>
          <header style={{backgroundColor:"lightblue",padding:'2rem'}}>Header</header>
          {children}
          <footer style={{backgroundColor:"lightblue",padding:'2rem'}}>Footer</footer>
        </body>
      </html>
    );
  }
  