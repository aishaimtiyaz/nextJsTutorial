import {Metadata} from 'next';

export const metadata: Metadata = {
  title:{
    absolute:"Blog"
  },
}


function blog() {
  return (
    <div>
      <h2>Blog post</h2>
    </div>
  )
}

export default blog;
