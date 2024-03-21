import React from 'react'
import NavBar from '../components/NavBar'
import BlogContent from '../components/BlogContent'
import { useRecoilValueLoadable } from 'recoil'
import { blogsAtom } from '../atom/atom'

const Blogs = () => {
    
  const blogs = useRecoilValueLoadable(blogsAtom)
  return (
    <div>
        <NavBar name="Krish"></NavBar>
        <div className='grid grid-cols-12 '>
        <div className='flex flex-col gap-3 pt-8 justify-center col-span-8  items-center'>
          {blogs.map((blog) => 
              return(
                <BlogContent name={obj.name} title={obj.title} content={obj.content}/>
              )
            )
          }
            
            <BlogContent name={obj.name} title={obj.title} content={obj.content}/>
            <BlogContent name={obj.name} title={obj.title} content={obj.content}/>
            <BlogContent name={obj.name} title={obj.title} content={obj.content}/>
        </div>
        <div className='col-span-4'>
            
        </div>
        </div>
    </div>
  )
}

export default Blogs
