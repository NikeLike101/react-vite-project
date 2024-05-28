import  {useState} from "react";
import Catalog from "./modules/catalog/Catalog";
import Home from "./modules/home/Home";
import Header from "./components/Header.tsx";


export type OpenedPageType = 'home' | 'catalog'
const App = () => {

  const [openedPage, setOpenedPage] = useState<OpenedPageType>('home')
  const handleOpenPage = (newPage: OpenedPageType) => setOpenedPage(newPage)


  return (
    <div className="App">
    <Header onChangePage={handleOpenPage}/>
      {openedPage === 'home' ? <Home/>: <Catalog title={'Date.now()'} />}
    </div>
  );
};

export default App;
