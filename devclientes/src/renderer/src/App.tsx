import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Routes } from './Routes'

export default function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <Routes/>
    </QueryClientProvider>
  )
}