import Avatar from "./Avatar";

interface BlogInputs {
    name : string,
    title : string,
    content : string,
    date : string
}

const BlogContent = ({
    name,title,content,date
} : BlogInputs) => {
  
  return (
    <div>
      <div className="p-2 max-w-3xl flex gap-x-3  cursor-pointer">
        <div className="max-w-lg">
        <div className="flex ">
          <Avatar  name={name} />
          <div className="flex flex-col justify-center pl-2  text-slate-400">
            &#9679;
          </div>
          <div className="flex flex-col justify-center pl-2 font-thin text-lg">
            {date}
          </div>
        </div>
        <div className="mt-2">
          <div className="font-extrabold text-2xl">
            {title}
          </div>
          <div>{content.substring(0, 200) + "..."}</div>
          <div>
            {content.length > 100? Math.floor(content.length / 100) + " minutes read"
              : "1 minute read"}
          </div>
        </div>
        </div>
        <div className=" bg-teal-300 w-52 shadow-md rounded-sm mt-4 h-40 hover:scale-105 duration-200 ease-in">
            <img className="h-40 w-52" src="https://media.istockphoto.com/id/1424994299/photo/magnifying-glass-calculator-and-charts-on-paper.webp?b=1&s=170667a&w=0&k=20&c=I0wK0Hp8PuqEIy_shxrJZrFLegc16HJC8-EK0DHyloM=" alt="" />
        </div>
      </div>
    </div>  
  );
};

export default BlogContent;
