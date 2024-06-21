import { useFrappeCreateDoc, useFrappeDeleteDoc, useFrappeGetDocList, useFrappeUpdateDoc, useFrappeDocTypeEventListener } from "frappe-react-sdk";
import React, { useState, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import {
  useToast,
} from '@chakra-ui/react'
import { SfButton, SfIconClose } from "@storefront-ui/react";
import { useForm } from 'react-hook-form'
import { CSSTransition } from 'react-transition-group'
import { Dialog, Transition } from '@headlessui/react'

const BlogCategories = () => {
  const { data, isLoading, error, mutate } = useFrappeGetDocList('Blog Category', {
    fields: ['name', 'title']
  })

  const [rowNum, setRowNum] = useState(null)

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

  const toast = useToast()

  const { createDoc, loading } = useFrappeCreateDoc()
  const { updateDoc, loading: loadingUpdate } = useFrappeUpdateDoc()
  const { deleteDoc, loading: loadingDelete } = useFrappeDeleteDoc()

  const [openCreateCate, setOpenCreateCate] = useState(false)
  const [openUpdateCate, setOpenUpdateCate] = useState(false)
  const [openDeleteCate, setOpenDeleteCate] = useState(false)

  const cancelRef = useRef()

  const createCate = (info) => {
    createDoc('Honda Blog Category', info)
    .then(() => {
      closeCreateCate();
      toast({
        title: 'Blog category created',
        description: "The blog category has been created.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'There has been an error',
          description: "Sorry, it seems that there has been an error while creating the blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  const clickToCloseUpdateCate = () => {
    setRowNum(null);
    setOpenUpdateCate(false);
  }

  const clickToCloseDeleteCate = () => {
    setRowNum(null);
    setOpenDeleteCate(false);
  }

  const clickToUpdateCate = (index) => {
    setRowNum(index);
    setOpenUpdateCate(true)
  }

  const clickToDeleteCate = (index) => {
    setRowNum(index);
    setOpenDeleteCate(true)
  }

  useFrappeDocTypeEventListener('Blog Category', (d) => {
    console.log(d)
      if (d.doctype === 'Blog Category'){
      mutate()
    }
  })

  const updateCate = (info) => {
    updateDoc('Blog Category', data[rowNum].name, info)
    .then(() => {
      setOpenUpdateCate(false);
      toast({
        title: 'Blog category updated',
        description: "The blog category has been updated.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'Unable to update',
          description: "Sorry, you cannot update the blog category while there are posts that relate to this blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  const deleteCate = (info) => {
    deleteDoc('Blog Category', data[rowNum].name, info)
    .then(() => {
      setOpenDeleteCate(false);
      setRowNum(null);
      toast({
        title: 'Blog category deleted',
        description: "The blog category has been deleted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'Unable to delete',
          description: "Sorry, you cannot delete the blog category while there are posts that relate to this blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  return (
    <>
      <SidebarAdmin />
      <div className="py-16 px-40 p-4 container-admin">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Blog Categories</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={() => setOpenCreateCate(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-[100px]">
                        ID
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {/* {data && (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data.map((d, index) => (
                        <tr key={d.index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {d.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{d.category}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-x-2 justify-end">
                            <button onClick={() => clickToUpdateCate(index)} className="text-indigo-600 hover:text-indigo-900" fontSize="14px">
                              Edit
                            </button>
                            <button onClick={() => clickToDeleteCate(index)} className="text-indigo-600 hover:text-indigo-900" fontSize="14px">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )} */}
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Test
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Also test</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-x-5 justify-end">
                        <button onClick={() => clickToUpdateCate()} className="text-indigo-600 hover:text-indigo-900 text-sm">
                          Edit
                        </button>
                        <button onClick={() => clickToDeleteCate()} className="text-indigo-600 hover:text-indigo-900 text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={openCreateCate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpenCreateCate(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                <form onSubmit={handleSubmit(createCate)}>
                  <header className="flex justify-between">
                    Add category
                    <SfIconClose onClick={() => setOpenCreateCate(false)}/>
                  </header>
                  <main className="flex flex-col">
                    <label htmlFor='title'>Category Name:</label>
                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 my-[11px]' type="text" {...register('title')}/>
                  </main>

                  <footer>
                    <button variant='ghost' mr={3} onClick={() => setOpenCreateCate(false)}>
                      Close
                    </button>
                    <button colorScheme='blue' type='submit' isLoading={loading}>Save</button>
                  </footer>
                </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openUpdateCate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpenUpdateCate(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                  <form onSubmit={handleSubmit(updateCate)}>
                    <header className="flex justify-between text-lg">
                      Update category: {data && rowNum !== null && data[rowNum].category}
                      <SfIconClose onClick={() => setOpenUpdateCate(false)}/>
                    </header>
            
                    <main className="flex flex-col">
                      <label>Category Name:</label>
                      <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 my-[11px]' type="text" defaultValue={data && rowNum !== null && data[rowNum].category} {...register('title')}/>
                    </main>

                    <footer>
                      <button className='w-1/2 bg-white border border-[#111111] text-[#111111] rounded-[9px] p-3 text-center' onClick={() => setOpenUpdateCate(false)}>
                        Close
                      </button>
                      <button className='w-1/2 bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>Save</button>
                    </footer>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDeleteCate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpenDeleteCate(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                  <form onSubmit={handleSubmit(deleteCate)}>
                    <header className="text-lg">
                      Delete Category: {data && rowNum !== null && data[rowNum].category}
                    </header>

                    <main>
                      Are you sure? You can't undo this action afterwards.
                    </main>

                    <footer>
                      <button ref={cancelRef} onClick={() => setOpenDeleteCate(false)}>
                        Cancel
                      </button>
                      <button colorScheme='red' type='submit' isLoading={loadingDelete} ml={3}>
                        Delete
                      </button>
                    </footer>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  )
}

export default BlogCategories;