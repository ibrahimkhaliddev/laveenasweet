import { Input, Button, Stack, HStack, Select, useToast, chakra, FormControl, FormLabel, Textarea, SelectField } from '@chakra-ui/react'
import { Link, useParams } from "react-router-dom"
import { useFrappeGetDocList, useFrappeUpdateDoc, useFrappeDeleteDoc, useFrappeCreateDoc, useFrappeFileUpload } from "frappe-react-sdk"
import { useState, useRef, useEffect } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
// import EditorJS from '@editorjs/editorjs'
// import Header from '@editorjs/header'
// import List from '@editorjs/list'
// import InlineCode from '@editorjs/inline-code'
import { useForm } from "react-hook-form";
import { ArrowLeft } from '@untitled-ui/icons-react';

const BlogAdd = () => {
  const [saving, setSaving] = useState(false);
  const [loadings, setLoadings] = useState([]);

  const [file, setFile] = useState(null);

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

  const { upload, progress, loading: uploading } = useFrappeFileUpload()

  const enterLoading = (index) => {
    setSaving(true);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
  };

  const stopLoading = (index) => {
    setSaving(false);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = false;
      return newLoadings;
    });
  };

  const { createDoc } = useFrappeCreateDoc();
  const toast = useToast()

  const addPost = async (info) => {
    await createDoc('Blog Post', info)
    .then(() => {
      toast({
        title: 'Blog created',
        description: "The blog has been created.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
      toast({
        title: 'There has been an error',
        description: "Sorry, it seems that there has been an error while creating the blog.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
  }

//   let editor = { isReady: false };

//   useEffect(() => {
//     if (!editor.isReady){
//       editor = new EditorJS({ 
//         holder: 'editorjs',
//         placeholder: 'Your content...',
//         tools: {
//           header: Header,
//           list: List,
//           inlineCode: InlineCode
//         }
//       })
//     }
//   }, [])

//   const save = () => {
//     editor
//       .save()
//       .then(outputData => {
//         console.log('Article data: ', outputData);
//       })
//       .catch(error => {
//         console.log('Saving failed: ', error);
//       });
//   };

//   Functions for uploading an image and saving onto Frappe backend
  const onUpload = (info) => {
    if (file){
      upload(file, {
        isPrivate: true
      }).then((res) => {
        uploadImage('Honda Blogs', {
          ...info,
          file: res.file_url
        })
      })
    }
  }

  const uploadImage = (info, fileUrl) => {
    createDoc('Honda Blogs', {
      ...info,
      file: fileUrl
    })
  }

  return (
    <>
      <div className='py-16 px-40 container-admin'>
        <SidebarAdmin active={0}/>
        <form onSubmit={handleSubmit(addPost)}>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-[8px] text-2xl">
              <Link to="/blog-admin" className="flex">
                <ArrowLeft />
              </Link>
              <h1 className="text-4xl font-bold">Add post</h1>
            </div>
            <div className="float-right">
              <button type="submit">Save</button>
            </div>
          </div>
          <div className="block mt-10">
            <div className='flex flex-col'>
              <label htmlFor='meta_image'>Upload image</label>
              <input className='outline-none py-2 mb-[11px]' id='meta_image' name='meta_image' type='file' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='title'>Title</label>
              <input className='py-2 mb-[11px] outline-none' id='title' name='title' type='text' placeholder="Your title..." />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='content'>Content</label>
              <textarea className='py-2 mb-[11px] outline-none' name='content' id='content' placeholder="Your content..."></textarea>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='date'>Date</label>
              <input className='py-2 mb-[11px] outline-none' id='date' name='date' type='date' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BlogAdd