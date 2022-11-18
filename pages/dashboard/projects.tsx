import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'
import AdminPageLayout from '../../components/layouts/admin'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    title: 'Azuki',
    desc: '3.9 MB',
    source:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
  },
  // More files...
]

const Projects: NextPageWithLayout = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
              {/* <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button> */}
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-100">{file.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-300">{file.desc}</p>
            <button
              className="block w-full rounded-md bg-[#47FFD7] py-2 font-medium text-black shadow hover:bg-[#22d2ac] focus:outline-none focus:ring-2 focus:ring-[#74fadd] focus:ring-offset-2 focus:ring-offset-gray-900 my-3"
            >
              Copy Promote Link
            </button>
            <button
              className="block w-full rounded-md bg-[#FD7A5D] py-2 font-medium text-white shadow hover:bg-[#e16d53] focus:outline-none focus:ring-2 focus:ring-[#fb846a] focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Direct Mint it
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Projects

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminPageLayout>
      {page}
    </AdminPageLayout>
  )
}