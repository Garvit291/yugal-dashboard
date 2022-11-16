import Sidebar from './components/Sidebar';
import logo from './logo.svg';
import { MicrophoneIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline';
import Tabs from './components/Tabs';


function App() {
  return (
    <div class="relative min-h-screen md:flex" data-dev-hint="container">
      <input type="checkbox" id="menu-open" class="hidden" />

      <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <header class="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
          Your App is cool
        </a>

        <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
          <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </header>

      <aside id="sidebar" class="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
          <a href="#" class="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span class="text-2xl font-extrabold whitespace-nowrap truncate">Your App is cool</span>
          </a>

          <nav data-dev-hint="main navigation">
            <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <span>About</span>
            </a>
            <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
              <span class="ml-6">Without Icon</span>
            </a>
            <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group">
              <span class="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200"></span>
              <span>Without Icon And a bit longer than usual</span>
            </a>
          </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
          <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            asd
          </a>
          <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            asd
          </a>
          <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            asd
          </a>
        </nav>
      </aside>

      <main id="content" class="flex-1 ">
        <div class="max-w-7xl mx-auto">
          <div class="px-4 py-2  sm:px-0 min-h-24 block bg-orange-400">
            <div className='flex justify-end px-2 space-x-4'>
              <MicrophoneIcon color="white" className='w-6 h-6' />
              <MicrophoneIcon color="white" className='w-6 h-6' />
              <MicrophoneIcon color="white" className='w-6 h-6' />
            </div>
          </div>
          <div className='flex w-full p-4 bg-gray-200'>
            <div className='w-3/12 p-2 bg-gray-300 '>
              <h1 className='text-2xl font-semibold'>Filters</h1>
              <div className='flex flex-col'>
                <h1 className='p-2 text-lg font-semibold'>Pods</h1>
                <div class="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="default-checkbox" class="ml-2 text-sm font-medium text-black ">Default checkbox</label>
                </div>
                <div class="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="default-checkbox" class="ml-2 text-sm font-medium text-black ">Default checkbox</label>
                </div>
              </div>
              <div>
                <h1 className='p-2 text-lg font-semibold'>categories</h1>
                <div className="relative w-full lg:max-w-sm">
                  <select className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>ReactJS Dropdown</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                  </select>
                </div>
              </div>
              <div>
                <h1 className='p-2 text-lg font-semibold'>Skill</h1>
                <div className="relative w-full lg:max-w-sm">
                  <select className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>ReactJS Dropdown</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                  </select>
                </div>
              </div>
              <div>
                <h1 className='p-2 text-lg font-semibold'>City</h1>
                <div className="relative w-full lg:max-w-sm">
                  <input className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" />
                </div>
              </div>
              <div>
                <h1 className='p-2 text-lg font-semibold'>Timezone</h1>
                <div className="relative w-full lg:max-w-sm">
                  <select className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>ReactJS Dropdown</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                  </select>
                </div>
              </div>
              <div>
                <h1 className='p-2 text-lg font-semibold'>Rating</h1>
                <div className='flex space-x-2'>
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                </div>
                <div className='flex space-x-2'>
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                </div>
                <div className='flex space-x-2'>
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                  <StarIcon className='w-5 h-5' />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-9/12 bg-white '>
              <h1 className='text-3xl font-bold'>Discovery</h1>
              <Tabs color="red"/>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
