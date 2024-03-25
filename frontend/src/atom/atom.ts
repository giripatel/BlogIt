import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { baseUrl } from "../vite.config";

export type Blog = {
  author: { name: string };
  content: string;
  createdDate: string;
  title: string;
  id: string;
};

export const blogsAtom = atom<Blog[]>({
  key: "blogsAtom",
  default : selector({
    key: "blogsAtomSelector",
    get: async () => {
      const resposne = await axios.get(baseUrl + "/api/v1/blog/bulk", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkYzFmMmMyLWUzMWMtNGZmYS05ZGFiLTY5YmFmOTM2YjRhOCJ9.vtUl25eLm_rM-BYJo71mJzjJ0GoMpKVHErFhRz1O8wc",
        },
      });
      console.log(resposne.data.blogs);

      return (await resposne.data.blogs) as Blog[];
    },
  }),
});


export const blogAtom = atomFamily({
    key : "blogAtom",
    default : selectorFamily({
        key : "blogAtomSelector",
        get : (id : string) => async ()=>{
            
            const resposne = await axios.get(baseUrl +`/api/v1/blog/${id}`, {
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkYzFmMmMyLWUzMWMtNGZmYS05ZGFiLTY5YmFmOTM2YjRhOCJ9.vtUl25eLm_rM-BYJo71mJzjJ0GoMpKVHErFhRz1O8wc",
                },
            })
            return await resposne.data.blog as Blog;
        }
    })
})