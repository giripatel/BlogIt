import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { blogsAtom } from "../atom/atom";

export default function Editor() {
  const [isMounted, setMounted] = useState(false);
  const ref = useRef<EditorJS>()

  const blogs = useRecoilValueLoadable(blogsAtom);
  console.log(blogs)

  const initalizeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;


    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
        }
      })
      console.log("Reaching here");
      
      ref.current = editor;

    }
  }

  console.log(window)
  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     setMounted(true);
  //   }
  // }, []);

  useEffect(() => {
    const init = async () => {
      await initalizeEditor();
    }

 
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    
  }, []);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log("Article data: ", outputData);


      })
    }
  }

  return (
    <>
        <div id="editorjs" className="  h-fit first-line:font-bold first-line:text-3xl first-line:mb-3 bg-grey-200 border border-blue-300"/>
      <div className="flex justify-center">
        <div className="bg-green-500 text-white border w-24 rounded-md p-2 text-center h-10"><button onClick={save}>Save</button></div>
      </div>
    </>
  )

}
