import React,{useEffect} from 'react'
import Footer from "../commonElement/Footer";
import Sidebar from "../commonElement/Sidebar"
import Topbar from "../commonElement/Topbar"
import Styles from '@/styles/layout/layout.module.css'
import { useRouter } from 'next/router';
export default function Layout({ children }: any) {
    const router = useRouter();
    let getToken;
    let token:any;
    if (typeof localStorage !== 'undefined') {
        getToken = localStorage.getItem('userToken')
        if (getToken !== null) {
            token = JSON.parse(getToken)

        }
    }
    useEffect(() => {
        if (!token) {
            router.push('/dashboard')
        }
    }, [])
    return (

        <>
            {
               token !== undefined &&
                <div className={Styles.layoutContainer} >
                    <div className={Styles.layoutLeft} >
                        <Sidebar />
                    </div>
                    <div className={Styles.layoutRight} >
                        <div className={Styles.topbar}>
                            <Topbar />
                        </div>
                        <div className={Styles.layoutBody}>
                            <main>{children}</main>
                        </div>
                        <div className={Styles.footer}>
                            <ul>
                                <li>© 2019-Present, CRM by Aura All rights reserved.</li>
                                <li>Terms of services</li>
                                <li>Privacy policy</li>
                                <li>
                                    <img src="/assets/sidebar/git.svg" alt="" />
                                    <img src="/assets/sidebar/insta.svg" alt="" />
                                    <img src="/assets/sidebar/linkedin.svg" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            }

        </>

    );
}