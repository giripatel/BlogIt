// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Editor, EditorState} from 'draft-js';
// import 'draft-js/dist/Draft.css';

// function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     () => EditorState.createEmpty(),
//   );

//   return <Editor editorState={editorState} onChange={setEditorState} />;
// }

// export default MyEditor

// TypeScript users only add this code
// import { useState } from 'react';
// import { BaseEditor, Descendant, createEditor } from 'slate'
// import { ReactEditor, Slate, withReact } from 'slate-react'

// type CustomElement = { type: 'paragraph'; children: CustomText[] }
// type CustomText = { text: string }

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'A line of text in a paragraph.' }],
//   },
// ]

// export  const MyEditor = () => {
//   const [editor] = useState(() => withReact(createEditor()))
//   // Render the Slate context.
//   return <Slate editor={editor} initialValue={initialValue} />
// }

// Editor.tsx

// import React, { useState } from 'react';
// import { BaseEditor, createEditor, Descendant, Editor, Element, Text,  } from 'slate';
// import { Editable, ReactEditor, Slate as SlateView , withReact } from 'slate-react';

// // Define our custom types for the editor
// type CustomElement = { type: 'paragraph'; children: CustomText[] };
// type CustomText = { text: string };

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor & HistoryEditor;
//     Element: CustomElement;
//     Text: CustomText;
//   }
// }

// const initialValue: CustomElement[] = [
//   { type: 'paragraph', children: [{ text: 'Type your text here...' }], },
// ];

// const MyEditor: React.FC = () => {
//   const [editor, setEditor] = useState(() => withReact(createEditor()));

//   {"hello"}
//   return (
//     <SlateView editor={editor} initialValue={initialValue}  onChange={(e) => setEditor((prev) => )}>
//         <Editable />
//     </SlateView>
//   );
// };

// export default MyEditor;

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { createReactEditorJS } from 'react-editor-js'
//@ts-ignore
import Image from '@editorjs/image'


// const MyEditor =  () => {
//     const ReactEditor = createReactEditorJS();
//     return (
//     <ReactEditor tools={{image : Image, 
//       header: {
//         class :Header,
//             config: {
//               placeholder: 'Enter a header',
//               levels: [2, 3, 4],
//               defaultLevel: 3
//             }
//     }}} />
//     )
// }

// export default  MyEditor;

// const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  // holder: 'editorjs',
  //   tools : {
  //   header : Header,
  // } 
  // {
  //   header: {
  //     //@ts-ignore
  //     class: Header,
  //     config: {
  //       placeholder: 'Enter a header',
  //       levels: [2, 3, 4],
  //       defaultLevel: 3
  //     }
  //   }
  // },

// });

const MyEditor =  () => {

    const editor = new EditorJS({

  holder: 'editorjs',
    tools : {
    header : Header,
  } 
  // {
  //   header: {
  //     //@ts-ignore
  //     class: Header,
  //     config: {
  //       placeholder: 'Enter a header',
  //       levels: [2, 3, 4],
  //       defaultLevel: 3
  //     }
  //   }
  // },

});
return (
editor.isReady.then((editor) => {
  return editor
})
)
}

export default  MyEditor;