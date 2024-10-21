export function NestedCategory({data,setFormStatus,setFormData}) {
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