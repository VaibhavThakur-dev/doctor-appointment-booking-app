import React from 'react'

function Signup() {
  return (
    <>
      <div id='log-In' className='bg-[#e8f6ff] w-full h-screen pt-32'>

      <div class="relative flex justify-center items-center flex-col rounded-xl bg-transparent">
  <h4 class="block text-xl font-medium text-slate-800 pb-2">
    Sign Up
  </h4>
  <p class="text-slate-600 font-medium">
    Nice to meet you! Enter your details to register.
  </p>
  <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-1 flex flex-col gap-6">
      <div class="w-full max-w-sm min-w-[200px]">
        
        <input type="text" class="w-full bg-transparent placeholder:text-slate-600 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease hover:border-slate-500 shadow-md" placeholder="Your Name" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        
        <input type="email" class="w-full bg-transparent placeholder:text-slate-600 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease hover:border-slate-500 shadow-lg" placeholder="Your Email" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        
        <input type="password" class="w-full bg-transparent placeholder:text-slate-600 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease hover:border-slate-500 shadow-lg" placeholder="Your Password" />
      </div>
    </div>
    <div class="inline-flex items-center mt-2">
      <label class="flex items-center cursor-pointer relative" for="check-2">
        <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
        <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
        Remember Me
      </label>
    </div>
    <button class="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Sign Up
    </button>
    <p class="flex justify-center mt-6 text-md text-slate-600">
      Don&apos;t have an account?
      <a href="#signup" class="ml-1 text-md font-semibold text-slate-700 underline">
        Sign up
      </a>
    </p>
  </form>
</div>

      </div>
    </>
  )
}

export default Signup