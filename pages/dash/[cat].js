import { getLocalStorage, Head, Link, setLocalStorage, useEffect, useRouter, useState } from 'components'

export default function Dash() {

  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState([])


  const router = useRouter();

  useEffect(() => {

    if (router.query.cat) {

      initData()
      setIsReady(true)
    }


    return () => {

    }
  }, [router])

  const ListItem = ({ name, id, amount, type }) => {
    return (
      <div className="w-full lg:w-1/3 h-24 rounded p-2">
        <div className="w-full bg-gray-200  h-full flex items-center p-2 relative">
          <div className="w-12 h-10 bg-gray-300 rounded"></div>
          <div className="w-full flex flex-col  relative h-full">

            <div className="absolute w-full flex justify-end text-sm items-start h-full">
              <p className="cursor-emoji" onClick={() => deleteItem(id, type)} >
                delete
              </p>
            </div>

            <div className="w-full flex flex-grow items-center">
              <div className="flex-grow px-2">
                {name}
              </div>
              <div className="">
                {amount}
              </div>
            </div>


          </div>

        </div>
      </div>
    )
  }


  const initData = () => {

    let _data = []

    let credit = getLocalStorage('credit')
    let debit = getLocalStorage('debit')

    if (credit || debit) {

      try {
        credit.data.map((i) => {
          if (i.cat == router.query.cat) {
            _data.push(i)
          }
        })
      } catch {
        console.log('there is no credit')
      }

      try {
        debit.data.map((i) => {
          if (i.cat == router.query.cat) {
            _data.push(i)
          }
        })
      } catch {
        console.log('there is no debit')
      }


      setData(_data)


    }


  }


  const deleteItem = (id, type) => {



    try {
      let _storage = getLocalStorage(type)
      let _updated = []

      _storage.data.map((i) => {

        if (i.id != id) {
          _updated.push(i)
        }
      })

      console.log(_updated)

      _storage.data = _updated
      setLocalStorage(type, _storage)
    } catch {
      console.log('unable to delte item')
    }



    initData()

  }

  const RenderData = ({ d }) => {

    return (

      d.map((i) => {

        return (
          <ListItem key={i.id} name={i.name} amount={i.bill} id={i.id} type={i.type} />
        )
      })

    )
  }




  return (
    <div className="w-full h-screen flex flex-col bg-white dark:bg-black lg:items-center lg:justify-center">
      <Head title={"Econ 101"} />

      <div className="w-full flex flex-grow lg:max-w-2xl lg:items-center">

        <div className="flex flex-wrap w-full">
          {
            isReady && data.length > 0 ? <RenderData d={data} /> : <>you have no data</>
          }
        </div>






      </div>

      <div className="w-full flex h-auto  p-4 ">

        {isReady ?
          <Link href={`bill/add?cat=${router.query.cat}`}><a>
            add bill
  </a></Link> : <></>
        }

      </div>
    </div>
  )
}
