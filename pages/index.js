import { Head, Card, useState, useEffect, getLocalStorage, Section, Link } from 'components'

export default function Home() {


  const [cat, setCat] = useState()


  useEffect(() => {

    setCat(getLocalStorage('categories'))

    return () => {

    }
  }, [])


  const LoadList = ({ cats }) => {

    return (
      cats.data.map((i) => {

        return (

          <Section section={i} url={`dash/${i}`} />

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
