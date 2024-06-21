import { Button, Input, Stack, FormControl, FormLabel, Textarea, HStack, Select, chakra, useToast } from '@chakra-ui/react'
import { Link, useParams } from "react-router-dom"
import { useFrappeGetDoc, useFrappeUpdateDoc, useFrappeDeleteDoc, useFrappeGetDocList, useFrappeDocTypeEventListener } from "frappe-react-sdk"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useEffect, useState, useRef } from "react";
import EditorJS from '@editorjs/editorjs'
import SidebarAdmin from "../../components/SidebarAdmin"
import Header from '@editorjs/header'
import List from '@editorjs/list'
import InlineCode from '@editorjs/inline-code'
import { useForm } from "react-hook-form"

const BlogEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modified, setModified] = useState(false)
  const [saving, setSaving] = useState(false);
  const [loadings, setLoadings] = useState([]);
  const [file, setFile] = useState(null)

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

  const { data: dataCates } = useFrappeGetDocList('Honda Blog Category', {
    fields: ['name', 'category']
  })

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    location.href = '/blog-admin'
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const { id } = useParams();

  const { data, isValidating, error, mutate } = useFrappeGetDoc('Honda Blogs', id, {
    filter: ['name', 'blogimage', 'title', 'content', 'category']
  })

  useFrappeDocTypeEventListener('Honda Blogs', (d) => {
    console.log(d)
      if (d.doctype === 'Honda Blogs'){
      mutate()
    }
  })

  const { updateDoc } = useFrappeUpdateDoc();
  const { deleteDoc } = useFrappeDeleteDoc();

  const toast = useToast()

  const savePost = async (info) => {
    await updateDoc('Honda Blogs', id, info)
    .then(() => {
      toast({
        title: 'Blog updated',
        description: "The blog has been updated.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
      toast({
        title: 'There is an error',
        description: "Sorry, it seems that there is an error while updating the blog.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
  }

  const deletePost = async (info) => {
    await deleteDoc('Honda Blogs', id, info)
    .then(() => {
      location.href = "/blog-admin";
      toast({
        title: 'Blog deleted',
        description: "The blog has been deleted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
      toast({
        title: 'There is an error',
        description: "Sorry, it seems that there is an error while deleting the blog.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
  }

//   let editor = { isReady: false };

//   useEffect(() => {
//     try {
//       if (!editor.isReady){
//         editor = new EditorJS({ 
//           holder: 'editorjs',
//           placeholder: 'Your content...',
//           tools: {
//             header: Header,
//             list: List,
//             inlineCode: InlineCode
//           },
//         })
//       }
//     } catch (er){
//       console.log(er)
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

  return (
    <>
      <SidebarAdmin />
      <div className='py-16 px-40 container-admin'>
        <form onSubmit={handleSubmit(savePost)}>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-[8px] text-2xl">
              <Link to="/blog-admin" className="flex">
                <ArrowLeft />
              </Link>
              <h1 className="text-4xl font-bold">Add post</h1>
            </div>
            <div className="float-right flex gap-x-2">
              <button type="submit">Save</button>
              <button onClick={deletePost}>Delete</button>
              <button onClick={save}>Test Save</button>
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
          </div>
        </form>
      </div>
    </>
  )
}

export default BlogEdit