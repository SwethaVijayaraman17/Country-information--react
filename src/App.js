import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryList from './CountryList';
import CountryInformation from './CountryInformation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CountryList />} />
        <Route path='/countryDescription' element={<CountryInformation />} />
      </Routes>
    </div>
  );
}

export default App;
