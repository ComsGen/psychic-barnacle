import { Head, getLocalStorage, useEffect, useRouter, useState, setLocalStorage } from 'components'

export default function Bill() {


  const [isReady, setIsReady] = useState(false)
  const [bill, setBill] = useState()


  const router = useRouter();

  useEffect(() => {

    try {
      if (router.query.bill) {
        let cat = JSON.parse(router.query.custom)

        setBill({
          name: router.query.bill_name,
          bill: router.query.bill,
          cat : cat.cat
        })

      }

    } catch {
      console.log('unable to add bill')
    }



    return () => {

    }
  }, [router])

  useEffect(() => {

    try {
      if (router.query.bill_type) {
        let type = router.query.bill_type

        if (type == "Credit") {
          addCredit()
        } else {
          addDebit()
        }


        setIsReady(true)
      }

    } catch {
      console.log('unable to add bill')
    }



    return () => {

    }
  }, [bill])


  const addCredit = () => {

    let credit = getLocalStorage('credit')
    console.log(credit)

    if (credit) {
      bill.id = credit.data.length
      bill.type = 'credit'
      credit.data.push(bill)

    } else {
      credit = {}
      bill.id = 0
      bill.type = 'credit'
      credit.data = [bill]
    }

    setLocalStorage('credit', credit)
    
    goHome()
  }

  const addDebit = () => {
    let debit = getLocalStorage('debit')
    console.log(debit)

    if (debit) {
      bill.type = 'debit'
      bill.id = debit.data.length
      debit.data.push(bill)

    } else {
      debit = {}
      bill.type = 'debit'
      bill.id = 0
      debit.data = [bill]
    }

    setLocalStorage('debit', debit)


    goHome()
  }

  const goHome = () => {

    router.push(`/dash/${bill.cat}`)
  }
  return (
    <div className="w-full h-screen flex bg-white dark:bg-black lg:items-center lg:justify-center">
      <Head title={"Econ 101"} />

      <div className="w-full flex h-auto max-w-md  ">

        <p className="animate-pulse">adding bill</p>

      </div>
    </div>
  )
}
