import React from 'react'
import NavBar from '../components/NavBar'
import BlogContent from '../components/BlogContent'

const Blogs = () => {
    const obj = {
        name : "Giridhar",
        title : "This might become big thing keep going keep grinding",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste itaque repellendus quos doloremque dolorum nihil voluptatibus minus quae magni veritatis cum modi voluptas eos excepturi eaque, eum aliquid quo."
    }
  return (
    <div>
        <NavBar name={obj.name}></NavBar>
        <div className='grid grid-cols-12 '>
        <div className='flex flex-col gap-3 pt-8 justify-center col-span-8  items-center'>
            <BlogContent name={obj.name} title={obj.title} content={obj.content}/>
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
