import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from 'react'

export default function Alert(props) {
  const { data } = props
  const [color, setColor] = useState('green')
  useEffect(() => {
    if (data.type === 'fail') {
      setColor('red')
    }
    if (data.type === 'success') {
      setColor('green')
    }
  }, [color])
  return (
    <div className={`fixed rounded-md ${data.type === 'fail' && 'bg-red-50' } ${data.type === 'success' && 'bg-green-50' } p-4 top-3 right-3`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {
            data.type === 'success' && <CheckCircleIcon
            className={`h-5 w-5 text-green-400`}
            aria-hidden="true"
          />
          }
          {
            data.type === 'fail' && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          }
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${data.type === 'fail' && 'text-red-800' } ${data.type === 'success' && 'text-green-800' }`}>
            {data.title}
          </h3>
          <div className={`mt-2 text-sm ${data.type === 'fail' && 'text-red-700' } ${data.type === 'success' && 'text-green-700' }`}>
            <p>
              {data.desc}
            </p>
          </div>
          {/* <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                View status
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Dismiss
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
