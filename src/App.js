import { Admin, Resource, ListGuesser } from 'react-admin';
//import dataProvider from './api/DataProvider';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  return (
    <Admin 
      dataProvider={dataProvider}
    >
        <Resource name="users" list={ListGuesser} />
        <Resource name="posts" list={ListGuesser} />
        <Resource name="todos" list={ListGuesser} />
    </Admin>
  );
}

export default App;
