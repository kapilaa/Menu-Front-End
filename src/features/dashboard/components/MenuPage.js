import axios from "axios";
import { useEffect, useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
function MenuPage(){
    const  [mainMenu,setMainMenu]=useState()
    const  [topMenu,setTopMenu]=useState()
    const [listMenu,setListMenus]=useState([])
    const [status, setStatus] = useState(false);
    const [dataForm, setDataForm] = useState({});
  
        /**
        * Main Menu api function
        * 
        */
    async function getTopMenus(){
       
       axios.get('http://127.0.0.1:8000/api/menu-list')
                          .then(response => {
                            if(response.data.status===true){
                              setTopMenu(response.data.data);
                              }
                          })
                          .catch(error => {
                          console.error(error);
                          });
          
      }

      /**
       * 
       * End
       */



       /**
        * List Menu api function
        * 
        */
      async function getMenus(main_id){
        axios.get('http://127.0.0.1:8000/api/menus?main_menu_id='+main_id)
                           .then(response => {
                             if(response.data.status===true){
                                 setListMenus(response.data.data);
                               }
                           })
                           .catch(error => {
                           console.error(error);
                           });
           
       }

       /**
       * 
       * End
       */


  
       /**
        * Main Menu api call
        * 
        */

      useEffect(() => {
         getTopMenus()
         
      }, [])

      /**
       * End
       */



      function  callTreeHadler(e){
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option =  el.getAttribute('value');  
        getMenus(option)
      }

      /**
       * 
       * by default loading script
       * 
       */

      useEffect(()=>{
        function hasClass(element, className)
        {
            return element.classList.contains(className);
        }
    
        function treeView(element)
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
    
        var myTreeView = document.getElementById("my-tree-view");
    
    treeView(myTreeView);
      },[])

      /**
       * 
       * End
       * 
       */

      const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
      };
      const FormCheckData = (newStatus) => {
        setDataForm(newStatus);
      };

    return(
      <>
        <TitleCard title={"Menu"}>
          <select
            onChange={callTreeHadler}
            value={mainMenu}
            className="block w-full px-2  py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Menu</option>
            {
              topMenu?.map(list_data => (
                <option key={list_data.id} value={list_data.uuid}>{list_data.name}</option>
              ))
            }
      </select>
      <div className="space-x-4 button-expand">
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Expand All
        </button>
        <button classname="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded-full">
            Collapse All {dataForm.name}
        </button>
         <div id="my-tree-view" class="tree-view">
          
               <NestedCategory data={listMenu} setFormStatus={handleStatusChange} setFormData={FormCheckData} />
          </div>
      </div>
      
        </TitleCard>
       {status==true?<RightBox fieldData={dataForm} /> :null}
          </>
    )
}

function NestedCategory({data,setFormStatus,setFormData}) {
    useEffect(()=>console.log(data))
  return (
  <>
      {
        data.map(item => (
          <div  class="branch-node">
            <div class="branch-title" onClick={() => {
              setFormStatus(true)
              setFormData({id:item.id,name:item.name,parent_id:item.parent_id,menu_id:item.menu_id})
            }}>{item.name}</div>
                    <ul class="branches">
                      {item.children?.length > 0 ? (<NestedCategory data={item?.children} />)  : ""}
                    </ul>
            
        </div>
        ))
      }
  </>
)
}

function RightBox({fieldData}){
  return (
  <TitleCard title={"Menu Actions"}>
  <form className="max-w-sm mx-auto">
    <div className="mb-5">
      <label htmlFor="menu_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Menu ID</label>
      <input type="text" id="menu_id" value={fieldData.menu_id} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="*************abcd" required />
    </div>
    <div className="mb-5">
      <label htmlFor="depth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depth</label>
      <input type="text"  value={fieldData.name} id="depth" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Level of menu" required />
    </div>
    <div className="mb-5">
      <label htmlFor="pid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent ID</label>
      <input type="text" value={fieldData.parent_id} name="pid"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Parent level id" required />
    </div>
    <div className="mb-5">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text" value={fieldData.name} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name of menu" required />
    </div>
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
  </form>
    </TitleCard>
    )
}
export default MenuPage