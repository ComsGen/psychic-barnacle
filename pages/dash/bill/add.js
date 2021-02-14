import { Head, ModernForm, useEffect, EconModels } from 'components'

export default function Home() {


  useEffect(() => {


    return () => {

    }
  }, [])




  return (
    <div className="w-full h-screen flex bg-white dark:bg-black text-black dark:text-white">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto max-w-md  ">

          <ModernForm 
          url="/dash/bill"
          mode="create"
          modal={EconModels('bill').data}
          length={EconModels('bill').data.length}
          />

      </div>
    </div>
  )
}
