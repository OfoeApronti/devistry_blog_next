import axios from 'axios'
import React from 'react'
import AllPosts from '../../components/AllPosts'

const Posts = ({posts}) => {
  return (<>
  
    <div>All posts</div>
    <AllPosts posts={posts} />
  </>
  )
}

export default Posts


export async function getStaticProps(){

  const postsRes=await axios.get(`${process.env.STRAPI_HOST}/api/posts`)
  return {
    props:{
      posts: postsRes.data,
    }
  }
}

