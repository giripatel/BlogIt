import axios from 'axios'
import {atom, selector} from 'recoil'
import {baseUrl} from '../vite.config'

export const blogsAtom = selector({
    key : "blogsAtom",
    get :  async () => {
        const resposne = await axios.get(baseUrl+'/api/v1/blog/bulk',{
            headers :{
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkYzFmMmMyLWUzMWMtNGZmYS05ZGFiLTY5YmFmOTM2YjRhOCJ9.vtUl25eLm_rM-BYJo71mJzjJ0GoMpKVHErFhRz1O8wc"
            }
        })
        return resposne.data.blogs
    }
})