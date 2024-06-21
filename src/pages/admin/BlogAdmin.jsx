import { useFrappeGetDocList } from "frappe-react-sdk";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import { Button } from '@chakra-ui/react'

const BlogAdmin = () => {
  const { data, isLoading, error } = useFrappeGetDocList('Blog Post', {
    fields: ['name', 'title', 'blog_category', 'blogger', 'content', 'meta_image']
  })

  console.log(data);

  return (
    <>
      <SidebarAdmin />
      <div className="py-16 px-40 p-4 container-admin">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Blogs</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link to="/blog-add">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        ID
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Image
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {data && (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data.map((d) => (
                        <tr key={d.name}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {d.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <img src={d.meta_image} width="60" />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{d.title}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {d.blog_category}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-x-2 justify-end">
                            <Link to={`/blog-view/${d.name}`}>
                              <button className="text-indigo-600 hover:text-indigo-900">
                                View
                              </button>
                            </Link>
                            <Link to={`/blog-edit/${d.name}`}>
                              <button className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className='py-16 px-40 container-admin'>
    //   <SidebarAdmin active={0}/>
    //   <div className="flex justify-between mb-10">
    //     <div>
    //       <h1 className="text-4xl font-bold">Blogs</h1>
    //     </div>
    //     <Link to="/blog-add">
    //       <Button>Add</Button>
    //     </Link>
    //   </div>
    //   {data && (
    //     <Table 
    //       dataSource={dataSource} columns={columns}
    //       onRow={(record, rowIndex) => {
    //         return {
    //           onClick: (event) => {
    //             (window.location.href = `/blog-edit/${record.id}`)
    //           },
    //         }
    //       }}
    //     />
    //   )}
    // </div>
  )
}

export default BlogAdmin;