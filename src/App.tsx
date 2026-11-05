import { Search } from './search'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>
    </>
  )
}

export default App
