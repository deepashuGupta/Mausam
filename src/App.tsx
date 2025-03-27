import { Route, Routes } from "react-router-dom";

import WeatherDashboard from "./pages/weather-dashboard";
import CityWeather from "./pages/city-weather";
import Layout from "./layout";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityWeather />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
