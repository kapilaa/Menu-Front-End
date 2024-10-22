import TitleCard from "../../components/Cards/TitleCard"
import MenuPages from "../dashboard/components/MenuPage"

function Leads(){

    return(
        <>

        <TitleCard title="Menus" topMargin="mt-2">
            <div className="overflow-x-auto w-full">
                
            {/** ---------------------- User source channels table  ------------------------- */}
            
                <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                    <MenuPages />
                </div>
                </div>
        </TitleCard>
        </>
    )
}


export default Leads