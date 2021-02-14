import { Head, ModernForm, useEffect, EconModels,useRouter,useState } from 'components'

export default function AddBill() {


  const [isReady, setIsReady] = useState(false)


  const router = useRouter();

  useEffect(() => {

    if(router.query.cat){
      setIsReady(true)
    }


    return () => {

    }
  }, [router])




  return (
    <div className="w-full h-screen flex bg-white dark:bg-black text-black dark:text-white">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto max-w-md  ">

        {
          isReady ?   <ModernForm 
          url="/dash/bill"
          mode="create"
          modal={EconModels('bill').data}
          length={EconModels('bill').data.length}
          custom={router.query}
          /> : <></>
        }

       

      </div>
    </div>
  )
}
