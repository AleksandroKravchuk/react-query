import { Route, Routes } from 'react-router-dom';
import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import MyCountry from 'components/My-country/My-country';
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<MyCountry />} />

        <Route path="/country" element={<Home />} />
      </Routes>
    </>
  );
};
