
import { useSearchParams } from 'react-router-dom'
import Avatar from '../components/Avatar'
import NavBar from '../components/NavBar'
import { useRecoilValueLoadable } from 'recoil'
import { blogAtom } from '../atom/atom'

interface BlogInputs{
    title? : string,
    content? : string,
    date? : string,
    authorName? : string
}
const Blog = () => {

    const [serachParams] = useSearchParams();
    const id : string = serachParams.get('id') || "";
    
    const blog = useRecoilValueLoadable(blogAtom(id))
    if(blog.state == 'loading'){
        return (
        <h1>
            Loading.....
        </h1>)
    }
  return (
    <div>
        <NavBar name="Krishna"></NavBar>
        { blog.state == 'hasValue' &&
        <div className='lg:max-w-7xl flex relative lg:left-[15%] pt-20'>
        <div className='grid grid-cols-12'>
            <div className='col-span-8 px-7 gap-y-3 flex flex-col  justify-end'>
                <div className='font-extrabold text-4xl font-mono'>{blog.contents.title}</div>
                <div className='text-md text-gray-600'>{blog.contents.createdDate}</div>
                <div className='text-lg'>{blog.contents.content}</div>
            </div>
            <div className='col-span-4'>
                <h5 className='pl-5 text-lg'>{blog.contents.author.name}</h5>
                <div className='flex gap-2 pt-3'>
                    <div className='pl-2 pt-5'>
                        <Avatar name={blog.contents.author.name}></Avatar>
                    </div>

                    <div className=''>
                        <div className='font-bold text-xl'>{blog.contents.author.name}</div> 
                        <div className='text-gray-600 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tenetur. loem ipupsm dolor sit amet consertucfue apdispideklt elit sit meeting </div>
                    </div>
                </div>
            </div>
            </div>
        </div>}
    </div>
  )
}

export default Blog
