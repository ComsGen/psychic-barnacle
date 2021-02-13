import { Card, getLocalStorage, setLocalStorage, useEffect, useState } from './library'
import CreateBudget from './app/utils/create'


function App() {

  const [hasBudgets, setHasBudgets] = useState(false)

  const [isShow, setShow] = useState(false)

  const [page, setPage] = useState();

  // useEffect(() => {

  //   // console.log(getLocalStorage('budgets'))
  //   // setHasBudgets(getLocalStorage('budgets'))
  //   return () => {

  //   }
  // }, [])


  const getPage = (key) => {
    switch (key) {
      case "hello":
        return (<CreateBudget />)
      default:
        return (<></>)
    }

  }


  const initPage = (key) => {
    setPage(key)
    setShow(!isShow)

  }


  return (
    <div className="w-screen h-full lg:h-screen flex lg:justify-center lg:items-center">

      <div className="w-full h-full lg:h-auto flex flex-wrap max-w-lg">
        {
          !isShow ?
            hasBudgets ? <></> : <Card c={"animate__animated animate__fadeIn "} on={() => initPage('hello')} height="52">
              <div className="">
                add budget
          </div>
            </Card> : <></>
        }

        {
          isShow ? getPage(page) : <></>
        }

        {/* <Card c={"animate__animated animate__fadeIn "}  on={() => setLocalStorage('hello',{'name':'name'})} height="52">
            <div className="">
              add budget
            </div>
          </Card> */}
        {/* // <Card c={"animate__animated animate__fadeIn "}  on={() => setLocalStorage('hello',{'name':'name'})} height="52"/>
      // <Card  height="52"/>
      // <Card  height="52"/> */}

      </div>
    </div>
  );
}

export default App;
