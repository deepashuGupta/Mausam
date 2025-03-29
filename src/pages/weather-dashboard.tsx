import FavoriteLocation from "@/components/favorite-location";
import LocationDetails from "@/components/location-details";

const WeatherDashboard = () => {
  return (
    <div>
      <FavoriteLocation />

      {/* card for loaction detais & chart showing temp */}
      <div>
        <LocationDetails />
      </div>
      {/* weather details card & forecast card */}
    </div>
  );
};

export default WeatherDashboard;
