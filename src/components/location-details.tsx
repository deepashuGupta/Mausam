import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

const LocationDetails = () => {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>
          <p className="text-2xl font-bold">
            Noida,{" "}
            <span className="text-lg font-light text-muted-foreground">
              Uttar Pradesh
            </span>
          </p>
          <p className="text-muted-foreground mt-2">IN</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-4 items-center">
              <h3 className="text-7xl font-bold">25°</h3>
              <div>
                <p className="text-muted-foreground">Feels like 22°</p>
                <div className="flex gap-2">
                  <span className="flex text-blue-500 text-xs">
                    <ArrowDown className="h-4 w-4" /> 23°
                  </span>

                  <span className="flex text-red-500 text-xs">
                    <ArrowUp className="h-4 w-4 " />
                    23°
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2 text-xs">
                <Droplets className="h-5 w-5 text-blue-500" />
                <h5>
                  Humidity <p className="text-muted-foreground">20%</p>
                </h5>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Wind className="h-5 w-5 text-blue-500" />
                <h5>
                  Wind Speed <p className="text-muted-foreground">1.37m/s</p>
                </h5>
              </div>
            </div>
          </div>
          <div>image</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationDetails;
