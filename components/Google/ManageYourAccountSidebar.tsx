import React from 'react';
import {
  UserCircleIcon,
  UsersIcon,
  IdentificationIcon,
  CreditCardIcon,
  AdjustmentsIcon,
  LockClosedIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline"

function ManageYourAccountSidebar() {
  return (
    <div className="flex absolute top-20 overflow-x-auto left-0 flex-auto">
      
<aside className="w-66" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-white overflow-auto flex">
      <ul className="space-y-2">
         <li>
            <a href="/Profile/Settings/ManageYourGoogleAccount" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
               <UserCircleIcon className="h-7"/>
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a href="/Profile/Settings/YourInfo" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
            <IdentificationIcon className="h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Personal info</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
            <AdjustmentsIcon className="h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Data and Privacy</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
            <LockClosedIcon className="h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Security</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
            <CreditCardIcon className="h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Payments and Subscriptions</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
            <InformationCircleIcon className="h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">About</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
    </div>
  )
}
 
export default ManageYourAccountSidebar