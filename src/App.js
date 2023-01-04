
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PublicRoutes from './Lib/Routes/PublicRoutes';
import {routeData} from './Lib/Routes/RouteData'
import Header from './components/Header/Header'
import ContactIcons from './components/ContactIcons/ContactIcons';
function App() {
return <>
<Header />
<ContactIcons />
<BrowserRouter>
<Routes>
  {routeData.public.map((elem,index)=>(
    <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
  ))}
</Routes>

</BrowserRouter>

</>
}

export default App;
