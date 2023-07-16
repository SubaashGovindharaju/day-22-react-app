import './App.css';
import Dashboard from './Layout/Content/Dashboard/Dashboard';
import Leftmenu from './Layout/Left menu/leftmenu';
import Navigation from './Layout/Navigation/Navigation';
import Footer from './Layout/Content/Dashboard/Footer';
function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 leftmenu'>
          <Leftmenu />
        </div>
        <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 navigation'>
          <Navigation />
          <div className='row-fluid'>
            <div className=' col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 dashboard'>
              <Dashboard />
              <Footer />

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
