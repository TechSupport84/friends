import React from 'react';
import '../RightSidebar.css';
import IconSvg from '../components/IconSvg';
const users =[
  {id:1,name:"Jeancy",image:"../user.png",time_online:1},
 {id:2, name:"Mpoyi",image:"../user.png",time_online:13},
 {id:3, name:"James",image:"../user.png",time_online:10},
 {id:5, name:"Taylor",image:"../user.png",time_online:20},
 {id:12, name:"Jhohn",image:"../user.png",time_online:30,},
 {id:32, name:"Christoph",image:"../user.png",time_online:50},
 {id:112, name:"Stanny",image:"../user.png",time_online:40},

]
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <h2>Suggested Connections</h2>
      {users.map((user,id)=>(
      <div key={id} className='online-users'>   
      <p>
     <span className="online-indicator"></span>{user.name} 
     <span className="min-time">{user.time_online}min.</span>
     <span className="button-online">
        <span onClick={()=>navigate("/message")} className='btn-message'> <IconSvg/> </span>
        </span>
      </p>
     </div>
      ))}

</div>
  );
};

export default RightSidebar;
