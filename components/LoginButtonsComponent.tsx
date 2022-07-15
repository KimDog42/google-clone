import React from 'react'

function LoginButtonsComponent() {
  return (
    <div>
      <div className="flex items-center justify-center">
        
        <button>
      <img 
      className="h-40 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996470049638469632/output-onlinegiftools_1.gif" alt="placehold images"/>
      <a>Sign in with Google</a>
      </button>

      <button>
      <img 
      className="h-40 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996523712171999282/580b57fcd9996e24bc43c53e.png" alt="placehold images"/>
      <a>Sign in with Twitter</a>
      </button>

      <button>
      <img 
      className="h-20 w-30 rounded-full"
      src="https://cdn.discordapp.com/attachments/881019698874032220/996525240437964883/GitHub_Logo.png"/>
      <a>Sign in with GitHub</a>
      </button>

      </div>
    </div>
  )
}

export default LoginButtonsComponent