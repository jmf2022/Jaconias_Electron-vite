import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { CaretRight } from 'phosphor-react'

interface HeaderProps{
  isSidebarOpen: boolean;
}

export function Header({ isSidebarOpen }: HeaderProps){
  const isMacOS = process.platform === 'darwin';


  return(
    <div
      id='header'
      className={clsx(
        'flex items-center gap-4 leading-tight relative border-b border-slate-600 transition-all duration-200 py-[1.125rem] px-6 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-220px)]': isSidebarOpen
        }
      )}
    >
      <Collapsible.Trigger
        className={clsx('h-7 w-7 text-gray-800 bg-gray-100 p-1 rounded-full relative z-[99] top-9 left-0', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen
        })}
      >
        <CaretRight className='w-5 h-5' />
      </Collapsible.Trigger>

      <>
        <h1 className='text-white font-bold'>Dev Clientes</h1>
      </>
    </div>
  )
}