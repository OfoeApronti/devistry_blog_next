import { useEffect, useState } from "react";
import PostPreview from "./PostPreview";


export default function HomeLatestPosts({posts}) {
  const [latestPosts, setLatestPosts]=useState([])
  useEffect(()=>{
    setLatestPosts(posts.data.slice(0,5))
  },[posts])
  
  function  renderPostPreview(){
    return latestPosts.map((post)=>{
      return (
        <>
      <PostPreview post={post} key={post.attributes.id}/>
        </>
      )
    })
  }

  return (
    <div>
      <h2>Latest </h2>
      {renderPostPreview()}
    </div>
  );
}

