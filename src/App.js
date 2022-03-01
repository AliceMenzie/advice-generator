import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Advice from './Advice';

import './main.scss';

const queryClient = new QueryClient()

function App() {

  

  return (
    <QueryClientProvider client={queryClient}>
      {/* https://api.adviceslip.com/advice */}

<Advice />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
