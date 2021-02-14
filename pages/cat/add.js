import { Head, ModernForm, useEffect, CatModel } from 'components'

export default function Home() {


  useEffect(() => {


    return () => {

    }
  }, [])




  return (
    <div className="w-full h-screen flex bg-white dark:bg-black">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto max-w-md  ">

          <ModernForm 
          url="/cat"
          mode="create"
          modal={CatModel.data}
          length={CatModel.data.length}
          />

      </div>
    </div>
  )
}
