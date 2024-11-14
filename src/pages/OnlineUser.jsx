import React from 'react'
import '../styles/OnlineUser.css'

const users =[
    {id:1,name:"Jeancy",image:"../user.png",time_online:1},
   {id:2, name:"Mpoyi",image:"../user.png",time_online:13},
   {id:3, name:"James",image:"../user.png",time_online:10},
   {id:5, name:"Taylor",image:"../user.png",time_online:20},
   {id:12, name:"Jhohn",image:"../user.png",time_online:30,},
   {id:32, name:"Christoph",image:"../user.png",time_online:50},
   {id:112, name:"Stanny",image:"../user.png",time_online:40},
  
  ]
  
function OnlineUser() {
  return (
    <div>
    <div className="online-user-info">
          <h3>Online</h3>
          <div className="online-stats">
         
        {users.map((user,id)=>(
      <div key={id} className='online-status'>   
      <p>
     <span className="online-indicator"></span>{user.name} 
     <span className="min-time">{user.time_online}min.</span>
      </p>
     </div>
      ))}
</div>
          </div>
    </div>
  )
}

export default OnlineUser