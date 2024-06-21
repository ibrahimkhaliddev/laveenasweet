import { useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { File06 } from '@untitled-ui/icons-react';

export default function SidebarAdmin() {
  const location = useLocation();
  const [active, setActive] = useState('');

  const handleMenuClick = (menu) => {
    setActive(menu);
  }

  const { data: blogs } = useFrappeGetDocList('Blog Post', {
    filter: ['name']
  })

  const { data: blogCate } = useFrappeGetDocList('Blog Category', {
    filter: ['name']
  })

  const { data: userData } = useFrappeGetDoc('User', 'Administrator', {
    filter: ['name', 'full_name', 'user_image']
  })

  const navigation = [
    { name: 'Blog', icon: <File06 />, href: '/blog-admin', count: (blogs && blogs.length), current: active === '/blog-admin' ? true : false },
    { name: 'Blog categories', icon: <File06 />, href: '/blog-categories', count: (blogCate && blogCate.length), current: active === '/blog-categories' ? true : false  },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    setActive(location.pathname);
  })

  return (
    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white fixed top-0 left-0 h-full w-[280px]">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav className="mt-5 flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
              onClick={() => handleMenuClick(item.href)}
            >
              {/* <item.icon
                className={classNames(
                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              /> */}
              {item.icon}
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        {userData && (
          <a href="/app" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={userData.user_image}
                  alt={userData.user_image}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{userData.full_name}</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}