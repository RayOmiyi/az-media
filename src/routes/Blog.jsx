import React from 'react'
import blogging from '../assets/blogging.webp'
import Hero from '../components/Hero'
import BlogPosts from '../components/blogPost'
const Blog = () => {
  return (
    <div>
       <Hero
        cName="hero"
        heroImg={blogging}
        title="Service"
        text="Choose your favourite Destination"
      />
      <BlogPosts/>
    </div>
  )
}

export default Blog
