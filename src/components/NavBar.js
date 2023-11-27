import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHome, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';





export default function Navbar({ isAuthenticated, onLogout}) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* Your logo here */}
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Navigation links */}
              <a 
              href="/" 
              activeClassName="active-class" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              <FontAwesomeIcon icon={faHome} className="mr-1" />Home
                </a>

              {!isAuthenticated && (
                <>
                  <a 
                  href="/signin" 
                  activeClassName="active-class" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Sign In
                  </a>
                  <a 
                  href="/signup" 
                  activeClassName="active-class" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-1" /> Sign Up
                  </a>
                </>
              )}

              {isAuthenticated && (
                <>
                  <a
                   activeClassName="active-class" 
                   href="/signout" onClick={onLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Sign Out
                  </a>
                </>
              )}
            </div>
          </div>


              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button as="a" href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Disclosure.Button>
              {!isAuthenticated && (
                <>
                  <Disclosure.Button as="a" href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign in</Disclosure.Button>
          
       
                <Disclosure.Button as="a" href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign Up</Disclosure.Button>
            
                </>
                )}
                {isAuthenticated && (
                  <>
                    <a
                     activeClassName="active-class" 
                     href="/signout" onClick={onLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Sign Out
                    </a>
                  </>
                )}
                
  

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
