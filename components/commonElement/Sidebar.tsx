import React, { useState } from 'react'
import Styles from '@/styles/layout/layout.module.css'
import SidebarList from '@/utility/Sidebar.json'
import Link from 'next/link';
import { useRouter } from 'next/router';
const Sidebar = () => {
  console.log({ Sidebar: SidebarList.Sidebar });
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const router = useRouter()
  console.log({ router });


  return (
    <div className={Styles.sideBarContainer}>
      <div className={Styles.logo}>
        <Link href="/dashboard">
          <img src="/assets/Aurolity.svg" alt="" />
        </Link>
      </div>
      <hr />
      <div className={Styles.user}>
        <img src="/assets/user.svg" alt="" />
        <div>
          <h3 className='mb-0'>Kate Russell</h3>
          <p className='mb-0'>Admin</p>
        </div>
        <div>
          <img src="/assets/down.svg" alt="" />
        </div>
      </div>
      <hr />
      <div className={Styles.sidebarList}>
        <div className={Styles.listContainer} >
          {SidebarList.Sidebar.map((item, index: any) => {
            return (
              <div key={index} className={Styles.listItem} >
                <div className={Styles.listSub} onClick={() => setSelectedItemIndex(index)}  >
                  <span>
                    <img src={item.licon} alt="" /> {item.name}
                  </span>
                  <img src="/assets/down.svg" alt="" />
                </div>
                <ul className={selectedItemIndex === index ? Styles.showList : ''}>
                  {item.list.map((item, index) => {
                    return (
                      <li key={index} className={router.pathname === item.path ? Styles.activeLi : ''} >
                        <Link href={item.path} >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className={Styles.help} >
        <img src="/assets/chat.svg" alt="" />
        <div>
          <h3 className='mb-0'>Help Center</h3>
          <p className='mb-0'>Answers here</p>
        </div>
        <div>
          <img style={{background:'none'}} src="/assets/Right.svg" alt="" />
        </div>
      </div>
      <div className={Styles.setting} >
        <img src="/assets/sidebar/setting.svg" alt="" />
        <p className="mb-0">Settings</p>
      </div>
    </div>
  )
}

export default Sidebar