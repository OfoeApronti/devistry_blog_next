import { useEffect, useState } from "react";
import PostPreview from "./PostPreview";


export default function AllPosts({posts}) {

  function  renderPostPreview(){
    return posts.data.map((post)=>{
      return (
        <>
      <PostPreview post={post} key={post.attributes.id}/>
        </>
      )
    })
  } 
 
  return (
    <div>
      <h2>Posts </h2>
      {renderPostPreview()}
    </div>
  );
}

