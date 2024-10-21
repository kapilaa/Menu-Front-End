import TitleCard from "../../components/Cards/TitleCard"
import UserChannels from "../dashboard/components/MenuPage"

const TopSideButtons = () => {

    return(
        <div className="inline-block float-right">
            {/* <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button> */}
        </div>
    )
}

function Leads(){

    return(
        <>
            
            <TitleCard title="Menus" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
            

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                {/* <MenuForm /> */}
            </div>
            </div>
            </TitleCard>
        </>
    )
}


export default Leads