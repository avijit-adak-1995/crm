import React from 'react'
import Styles from '@/styles/layout/layout.module.css'
import { useRouter } from 'next/router'

const Topbar = () => {
  const router = useRouter()
 const formattedPath = router.pathname.replace(/^\/|\/(?!.*\/)/g, ' ');
 console.log({formattedPath});
 const handleLogout=()=>{
   localStorage.removeItem('userToken')
   router.push('/')
 }
 
  return (
    <>
     <div className={Styles.topbars}>
       <div className={Styles.topbarLeft}>
        <span>{formattedPath}</span>
       </div>
       <div className={Styles.topbarRight}>
         <div className={Styles.search} >
           <input className='form-control' type="search" placeholder='Type Here...' />
           <img src="/assets/sidebar/search.svg" alt="" />
         </div>
         <div className={Styles.topIcon} >
          <img src="/assets/person.svg" alt="" />
          <span onClick={()=>handleLogout()} >Sign In</span>
         </div>
         <div className={Styles.topIcon} >
          <img src="/assets/sidebar/sett.svg" alt="" />
         </div>
         <div className={Styles.topIcon}>
          <img src="/assets/sidebar/notification.svg" alt="" />
         </div>
         {/* <div className={Styles.topIcon} >
           <span onClick={()=>handleLogout()} >Logout</span>
         </div> */}
       </div>
     </div>
    </>
  )
}

export default Topbar