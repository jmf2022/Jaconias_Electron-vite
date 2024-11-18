import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Sidebar } from '../sidebar'
import { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'

export function Layout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {

    function handleNavigate(){
      navigate("/create")
    }
                   // verificando se window.api e window.api.onNewCustomer são funçoes ante de chamar     
    const unsub = (window.api && typeof window.api.onNewCustomer === 'function')? window.api.onNewCustomer(handleNavigate): null;
     return () => {
      if(unsub){
        unsub();
      }
     }
  }, [navigate]) // o navegate nas chave evita ficar chamando a api sem precisar

  return(
    <Collapsible.Root
      defaultOpen
      className='h-screen w-screen bg-gray-950 text-slate-100 flex'
      onOpenChange={setIsSidebarOpen}
    >

      <Sidebar/>
      <div className='flex-1 flex flex-col max-h-screen'>
        <Header isSidebarOpen={isSidebarOpen} />

        <Outlet/>
      </div>
    </Collapsible.Root>
  )
}