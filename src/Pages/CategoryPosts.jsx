import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data/data'
import PostItem from '../components/Postitem' 

const CategoryPosts = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postId={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Founds</h2>
      )}
    </section>
  )
}

export default CategoryPosts
