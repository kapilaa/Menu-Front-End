/** Icons are imported separatly to reduce build time */
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
const iconClasses = `h-6 w-6`

const routes = [

  {
    path: '/app/dashboard',
    icon: <HomeIcon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/menus', // url
    icon: <Squares2X2Icon className={iconClasses}/>, // icon component
    name: 'Menus', // name that appear in Sidebar
  },
  
  
]

export default routes


