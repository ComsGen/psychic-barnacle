import { Head, useEffect, useRouter, getLocalStorage, setLocalStorage } from 'components'

export default function Home() {

    const router = useRouter()

    useEffect(() => {


        try {
            if (router.query.name) {
                updateCategory(router.query.name)
            }
        } catch {

            console.error('unable to retrieve category')
        }

        return () => {

        }


    }, [router])



    const updateCategory = (term) => {


        try {
            let data = getLocalStorage('categories')

            console.log(data)
            if (data) {
                console.log('pushing data')
                let _data = {name:term}
                _data.id = data.data.length
                data.data.push(_data)
                
                
            } else {
                data = {}
                let _data = {name:term}
                _data.id = 0
                data.data = [_data]
                
                // setLocalStorage('categories',data)

            }
            setLocalStorage('categories',data)
            router.push('/')
        } catch(e) {

            console.log('unable to add category',e.message)
        }


    }


    return (
        <div className="w-full h-screen flex bg-white dark:bg-black lg:items-center lg:justify-center ">
            <Head title={"Econ 101"} />

            <div className="w-full flex h-auto max-w-md lg:items-center lg:justify-center  ">

                <p className="animate-pulse">adding category</p>
            </div>
        </div>
    )
}
