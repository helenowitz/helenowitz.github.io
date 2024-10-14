import './App.css';
import Explanation from './components/Explanation';
import TopHeader from './components/TopHeader';
import CssPlayground from './components/CssPlayground'


function App() {
  return (
    <div className='App' >
      <TopHeader />
      <CssPlayground />
      <Explanation />
    </div>
  );
}

export default App;
