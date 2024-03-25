import React from 'react'
import NavBar from '../components/NavBar'
import BlogContent from '../components/BlogContent'
import { Loadable, useRecoilValueLoadable } from 'recoil'
import { Blog, blogsAtom } from '../atom/atom'
import { Link } from 'react-router-dom'

const Blogs = () => {
    
  const blogs = useRecoilValueLoadable(blogsAtom)
  if(blogs.state == 'loading'){
    return 'Loading.........'
  }
  return (
    <div>
    <NavBar name="Krish"></NavBar>
        <div className='grid grid-cols-12 '>
        <div className='flex flex-col gap-3 pt-8 justify-center col-span-8  items-center'>
       
          { blogs.state == 'hasValue'? blogs.contents.map((blog,index) => (
            <div className='' key={index}>
               <Link to={`/blog?id=${blog.id}`}>
                  <BlogContent name={blog.author.name} title={blog.title} content={blog.content} date={blog.createdDate}/>
                </Link>
            </div>) ) : ""
            
          }
        </div>
        <div className='col-span-4'>
            
        </div>
        </div>
    </div>
  )
}

export default Blogs
