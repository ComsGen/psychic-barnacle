import { Head, Card, useState, useEffect, getLocalStorage, Section, Link } from 'components'

export default function Home() {


  const [cat, setCat] = useState()


  useEffect(() => {

    try{

      setCat(getLocalStorage('categories'))

    }catch{
      console.log('we can not set cat')
    }

    return () => {

    }
  }, [])


  const LoadList = ({ cats }) => {

    return (
      cats.data.map((i) => {

        return (

          <Section key={i} section={i} url={`dash/${i}`} />

        )
      })
    )


  }


  return (
    <div className="w-full h-screen flex lg:justify-center lg:items-center p-2 bg-white dark:bg-black">
      <Head title={"Econ 101"} />

      <div className="w-full flex justify-center h-auto max-w-md  ">

        {
          cat ? <LoadList cats={cat} /> : <></>
        }
        <Section section="add " url="cat/add" />


      </div>
    </div>
  )
}
