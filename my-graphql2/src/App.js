import Components from "./Components";

import {
  
  ApolloProvider,
  ApolloClient,
    InMemoryCache,
 
} from "@apollo/client";


const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});



function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Components />
      </ApolloProvider>
      ,
    </>
  );
}

export default App;
