import { useEffect, useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import { getMenus, getTopMenus, treeView } from "../../../pages/api";
import { NestedCategory } from "../../menus/components/NestedCategory";
import { RightBox } from "../../menus/components/RightBox";
function MenuPage(){
    const  [topMenu,setTopMenu]=useState()
    const [listMenu,setListMenus]=useState([])
    const [status, setStatus] = useState(false);
    const [dataForm, setDataForm] = useState({});
  

      useEffect(() => {
         
          const getData = async () => {
          const result = await getTopMenus();
          setTopMenu(result);
        };

        getData()
         
      }, [])

      async function  callTreeHadler(e){
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option =  el.getAttribute('value');  
       const result1=await getMenus(option)
       setListMenus(result1)
      }

      //------------------------By default loading script---------------------- /

      useEffect(()=>{    
        var myTreeView = document.getElementById("my-tree-view");
         treeView(myTreeView);
      },[])

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
            Collapse All
        </button>
         <div id="my-tree-view" class="tree-view">
               <NestedCategory data={listMenu} setFormStatus={handleStatusChange} setFormData={FormCheckData} />
          </div>
      </div>
      
        </TitleCard>
       <RightBox fieldData={dataForm} /> 
          </>
    )
}


export default MenuPage