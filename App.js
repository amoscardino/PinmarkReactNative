import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationRoot from './src/NavigationRoot';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <NavigationRoot />
    </QueryClientProvider>
);

export default App;
