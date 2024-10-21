import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

 /**
        * Main Menu api function
        * 
        */
 export async function getTopMenus(){

    try {
        const response = await axios.get(`${BASE_URL}/api/menu-list`);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }

   /**
    * 
    * End
    */



    /**
     * List Menu api function
     * 
     */
   export async function getMenus(main_id){

    try {
        const response = await axios.get(`${BASE_URL}/api/menus?main_menu_id=+${main_id}`);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }

    /**
    * 
    * End
    */

     function hasClass(element, className)
        {
            return element.classList.contains(className);
        }
    
    export function treeView(element)
        {
            element.addEventListener("click", (e) => {
                let target = e.target;
              
                console.log(target);
                
                if(hasClass(target, "branch-node"))
                    target.classList.toggle("open");
                else if(hasClass(target, "branch-title"))
                    target.parentNode.classList.toggle("open");
            });
        }
    