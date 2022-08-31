import './App.css';
import TopBar from './components/TopBar'
import Background from './components/Background';
import StoreListings from './components/StoreListings';


function App() {
  return (
    <div className="App">
      <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <title>Document</title>
    </head>
      <TopBar/>
      <Background/>
      <StoreListings/>
    </div>
  );
}

export default App;
