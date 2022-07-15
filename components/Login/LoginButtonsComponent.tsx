import React from 'react';

function LoginButtonsComponent() {
  return (
    <div>
      <div className="flex items-center justify-center pt-80 text-white p-3 flex-auto">
        
        <button>
      <img 
      className="h-40 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996470049638469632/output-onlinegiftools_1.gif" alt="placehold images"/>
      <a href="/Profile/LoginSuccess" className="rounded p-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-160 hover:bg-gray-900 duration-300">Sign in with Google</a>
      </button>

      <button>
      <img 
      className="h-40 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996523712171999282/580b57fcd9996e24bc43c53e.png" alt="placehold images"/>
      <a href="/Profile/LoginSuccess" className="rounded p-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-160 hover:bg-gray-900 duration-300">Sign in with Twitter</a>
      </button>

      <button className="pt-20 space-x-0">
      <img 
      className="h-20 w-30 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996525240643506267/GitHub_Logo_White.png"/>
      <a href="/Profile/LoginSuccess" className="rounded p-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-160 hover:bg-gray-900 duration-300">Sign in with GitHub</a>
      </button>

      

      </div>
    </div>
  )
}

export default LoginButtonsComponent