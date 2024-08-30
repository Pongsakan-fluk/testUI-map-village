import { useState } from "react";
import "./App.css";

//Components
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiXCircle } from "react-icons/fi";
import VillageMap from "./components/VillageMap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Drawer>
        <DrawerTrigger className="mx-auto w-full">
          <Button>Button</Button>
        </DrawerTrigger>
        <DrawerContent className="h-screen bg-slate-200">
          <VillageMap />

          <DrawerClose className="absolute top-2 right-2 text-white">
            <FiXCircle size={32} />
          </DrawerClose>
        </DrawerContent>
      </Drawer>

      {/* <VillageMap /> */}
    </div>
  );
}

export default App;
