import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working! 🎉
      </h1>

      {/* Button Example */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        Click Me
      </button>

      {/* Card Example */}
      <div className="max-w-sm p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          Hello Tailwind
        </h2>
        <p className="text-gray-600 mt-2">
          This is a sample card styled with Tailwind CSS.
        </p>
      </div>

      {/* UserProfile Component */}
      <UserProfile />
    </div>
  )
}

export default App
