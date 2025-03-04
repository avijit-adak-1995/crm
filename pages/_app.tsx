import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from '@/store/store'
import { useEffect, useState } from 'react';
import Layout from '@/components/Layouts/layouts';
import { useRouter } from "next/router";
import MainLayout from '@/components/Layouts/mainLayout';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Appointments from './employees/Appointments';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
 
  const [loading, setLoading] = useState(true);
  const isAuthenticated = router.pathname.startsWith("/dashboard");
  const isAccounting = router.pathname.startsWith("/accounting");
  const isSales = router.pathname.startsWith("/sales");
  const isTasks = router.pathname.startsWith("/tasks")
  const isJobs = router.pathname.startsWith("/jobs")
  const isEmployees = router.pathname.startsWith("/employees")
  const isOrganizations = router.pathname.startsWith("/organizations")
  const isContacts = router.pathname.startsWith("/contacts")
  const isGoals = router.pathname.startsWith("/goals")
  const isReports = router.pathname.startsWith("/reports")
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>    {loading ?
      <>
        <div className="loader-container" >
          <img src="/assets/Aurolity.svg" alt="" />
          <div className="para d-flex">
            Loading{" "}
            <div className="dots">
              <img
                src={`https://assets-v2.lottiefiles.com/a/31b6eec0-1171-11ee-a93a-c70638485918/KmNL43wi3g.gif`}
                alt=""
                width={60}
                height={55}
              />
            </div>
          </div>
        </div >
        <style jsx>
          {`
      .loader-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        background: #fff;
        z-index: 1;
      }

      .para {
        font-size: 40px;
        font-weight: 700;
        text-align:center
      }
    `}
        </style>
      </>
      :
      <Provider store={store}>
        {
        // isAuthenticated
        //   || 
        //   isAccounting
          isSales
          || isTasks
          || isJobs
          || isEmployees
          || isOrganizations
          || isContacts
          || isGoals
          || isReports ?
          <Layout>
            <Component {...pageProps} />
          </Layout>
          :
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        }

      </Provider>
    }
    <ToastContainer/>
    </>


  )
}
