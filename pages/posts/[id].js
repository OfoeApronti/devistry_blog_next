import axios from "axios";
import markdownIt from "markdown-it";

const PostPage = ({post}) => {
  const md=new markdownIt()
  const htmlContent=md.render(post.attributes.content)
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{__html:htmlContent}}></section>
    </article>
  );
}


export const getStaticProps = async ({params}) => {
  console.log("env", process.env.STRAPI_HOST)
  const postRes=await axios.get(`${process.env.STRAPI_HOST}/api/posts/${params.id}`)

  return {
    props:{
      post:postRes.data.data
    }
  }
}

export async function getStaticPaths(){
  const postsRes=await axios.get(`${process.env.STRAPI_HOST}/api/posts`)
  console.log(postsRes.data)
  const paths=postsRes.data.data.map((post)=>{
    return {params: {id: post.id.toString()}}
  })
  console.log(paths)
  return {
    paths, fallback:false
  }
}

export default PostPage;