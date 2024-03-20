
import Avatar from '../components/Avatar'
import NavBar from '../components/NavBar'

interface BlogInputs{
    title? : string,
    content? : string,
    date? : string,
    authorName? : string
}
const Blog = ({
    title = "Some title for testing the output Some title for testing the output output     ",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in est nobis porro, veritatis architecto. Voluptatem nobis, porro ipsum repellendus obcaecati deserunt laborum hic modi numquam. Ut enim placeat suscipit similique quam eius sed quas quod sunt laudantium doloremque consequuntur beatae repudiandae vero, ad quibusdam sit quidem corporis dolor! Rerum delectus officia eius omnis exercitationem sunt tempora assumenda similique, excepturi a sed nam eos nisi aperiam officiis cum culpa facere nostrum porro quos. Ab, soluta possimus itaque beatae nihil obcaecati quis provident velit id tenetur, praesentium voluptate vero dolor. Illo dolore laborum culpa autem magni delectus eaque ullam. Quo dicta sequi officiis, neque quaerat quae itaque minima porro saepe labore ratione, eaque officia, atque quas perspiciatis magnam hic laborum? Molestias modi delectus cum distinctio dolores exercitationem possimus omnis soluta tempora, quam veritatis minus magni dicta minima et perspiciatis laborum corporis vel eveniet ut odio. Amet aliquam, blanditiis et corrupti adipisci voluptas recusandae, cum repellat repellendus esse illum ipsa veniam nihil rem consequatur veritatis eligendi ipsam nobis laborum quis animi impedit illo? Iste sequi deserunt harum quaerat consectetur voluptatum ipsam ullam accusantium. Porro, dignissimos earum repellendus quam ex repudiandae sit tempore, sed debitis corporis iure eveniet, ipsum harum tenetur eaque accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti officiis rem quidem vitae tempora commodi magni id reiciendis totam.",
    date = "12-Mar-2024",
    authorName = "Kirsh"
} : BlogInputs) => {
  return (
    <div>
        <NavBar name='Krish'></NavBar>
        <div className='lg:max-w-7xl flex relative lg:left-[15%] pt-20'>
        <div className='grid grid-cols-12'>
            <div className='col-span-8 px-7 gap-y-3 flex flex-col  justify-end'>
                <div className='font-extrabold text-4xl font-mono'>{title}</div>
                <div className='text-md text-gray-600'>{date}</div>
                <div className='text-lg'>{content}</div>
            </div>
            <div className='col-span-4'>
                <h5 className='pl-5 text-lg'>Author</h5>
                <div className='flex gap-2 pt-3'>
                    <div className='pl-2 pt-5'>
                        <Avatar name='Krish'></Avatar>
                    </div>

                    <div className=''>
                        <div className='font-bold text-xl'>{authorName}</div> 
                        <div className='text-gray-600 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tenetur. loem ipupsm dolor sit amet consertucfue apdispideklt elit sit meeting </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
