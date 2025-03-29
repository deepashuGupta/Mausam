import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const FavoriteLocation = () => {
  return (
    <div className="flex items-center justify-between">
      <h2>My location</h2>
      <Button variant={"outline"} size={"icon"} className="cursor-pointer">
        <RefreshCcw className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default FavoriteLocation;
