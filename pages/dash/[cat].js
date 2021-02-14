import { Head, Link, useEffect, useRouter } from 'components'
import { route } from 'next/dist/next-server/server/router';

export default function Dash() {


  const router = useRouter();

  useEffect(() => {


    console.log(router.query)
    return () => {

    }
  }, [router])




  return (
    <div className="w-full h-screen flex flex-col bg-white dark:bg-black">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto flex-grow max-w-md  ">



      </div>

      <div className="w-full flex h-auto max-w-md p-4 ">


        <Link href="bill/add"><a>
          add bill
          </a></Link>
      </div>
    </div>
  )
}
