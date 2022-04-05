import axios from "axios"
import HomeHeader from "../components/HomeHeader"
import HomeLatestPosts from "../components/HomeLatestPost"


export default function Home({posts}) {
  return (
    <>
    <HomeHeader />
    <HomeLatestPosts  posts={posts}/>
    </>
  )
}


export const getStaticProps = async (ctx) => {
  const postsRes= await axios(`${process.env.STRAPI_HOST}/api/posts`)
  
  return {
    props:{
      posts: postsRes.data
    }
  }
}