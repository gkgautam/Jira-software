// import { useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';

// const Jodit = (props) => {
//   const editor = useRef(null);
// console.log('spiderman');
//   return (
//     <JoditEditor
//        ref={editor}
//         value={props.content}
//         tabIndex={1} // tabIndex of textarea
//         onBlur={(newContent) => props.setContent(...props.content,newContent)} // preferred to use only this option to update the content for performance reasons
//         onChange={(newContent) => {
//             props.setContent(...props.content,newContent);
//             // console.log('gutt',props.content);
//             // props.setFormData(props.content);
//         }}
//     />
//   )
// }
// export default Jodit