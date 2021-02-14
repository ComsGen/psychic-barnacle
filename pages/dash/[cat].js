import { Head, ModernForm, useEffect, useRouter } from 'components'
import { route } from 'next/dist/next-server/server/router';

export default function Dash() {


  const router = useRouter();

    useEffect(() => {


      console.log(router.query)
    return () => {

    }
  }, [router])




  return (
    <div className="w-full h-screen flex bg-white dark:bg-black">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto max-w-md  ">

     

      </div>
    </div>
  )
}
