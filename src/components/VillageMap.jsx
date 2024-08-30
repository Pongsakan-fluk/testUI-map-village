import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FiHome } from "react-icons/fi";

const groupA = [
  { id: 1, number: "1A", x: 280, y: 112 },
  { id: 2, number: "2A", x: 265, y: 170 },
  { id: 3, number: "3A", x: 259, y: 230 },
  { id: 4, number: "4A", x: 285, y: 290 },
  { id: 5, number: "5A", x: 325, y: 335 },
  { id: 6, number: "6A", x: 370, y: 380 },
  { id: 7, number: "7A", x: 420, y: 420 },
  { id: 8, number: "8A", x: 465, y: 460 },
  { id: 9, number: "9A", x: 510, y: 505 },
  { id: 10, number: "10A", x: 568, y: 530 },
  { id: 11, number: "11A", x: 625, y: 530 },
  { id: 12, number: "12A", x: 680, y: 532 },
  { id: 13, number: "13A", x: 738, y: 534 },
  { id: 14, number: "14A", x: 796, y: 536 },
  { id: 15, number: "15A", x: 855, y: 539 },
  { id: 16, number: "16A", x: 900, y: 587 },
  { id: 17, number: "17A", x: 920, y: 645 },
  { id: 18, number: "18A", x: 930, y: 705 },
  { id: 19, number: "19A", x: 960, y: 760 },
  { id: 20, number: "20A", x: 1022, y: 762 },
  { id: 21, number: "21A", x: 1082, y: 764 },
  { id: 22, number: "22A", x: 1140, y: 766 },
  { id: 23, number: "23A", x: 1200, y: 768 },
  { id: 24, number: "24A", x: 1260, y: 770 },
];

const groupB = [
  { id: 1, number: "1B", x: 280, y: 112 },
  { id: 2, number: "2B", x: 265, y: 170 },
  { id: 3, number: "3B", x: 259, y: 230 },
  { id: 4, number: "4B", x: 285, y: 290 },
  { id: 5, number: "5B", x: 325, y: 335 },
  { id: 6, number: "6B", x: 370, y: 380 },
  { id: 7, number: "7B", x: 420, y: 420 },
  { id: 8, number: "8B", x: 465, y: 460 },
  { id: 9, number: "9B", x: 510, y: 505 },
];

const groupC = [
  { id: 1, number: "1C", x: 280, y: 112 },
  { id: 2, number: "2C", x: 265, y: 170 },
  { id: 3, number: "3C", x: 259, y: 230 },
  { id: 4, number: "4C", x: 285, y: 290 },
  { id: 5, number: "5C", x: 325, y: 335 },
  { id: 6, number: "6C", x: 370, y: 380 },
  { id: 7, number: "7C", x: 420, y: 420 },
  { id: 8, number: "8C", x: 465, y: 460 },
  { id: 9, number: "9C", x: 510, y: 505 },
  { id: 10, number: "10C", x: 568, y: 530 },
  { id: 11, number: "11C", x: 625, y: 530 },
  { id: 12, number: "12C", x: 680, y: 532 },
];

const groupD = [
  { id: 1, number: "1D", x: 280, y: 112 },
  { id: 2, number: "2D", x: 265, y: 170 },
  { id: 3, number: "3D", x: 259, y: 230 },
  { id: 4, number: "4D", x: 285, y: 290 },
  { id: 5, number: "5D", x: 325, y: 335 },
  { id: 6, number: "6D", x: 370, y: 380 },
  { id: 7, number: "7D", x: 420, y: 420 },
  { id: 8, number: "8D", x: 465, y: 460 },
];

const groupH = [
  { id: 1, number: "1H", x: 280, y: 112 },
  { id: 2, number: "2H", x: 265, y: 170 },
  { id: 3, number: "3H", x: 259, y: 230 },
  { id: 4, number: "4H", x: 285, y: 290 },
];

function VillageMap() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border p-5 my-auto">
      <div className="flex w-max mx-auto">
        <figure className="shrink-0">
          <div className="overflow-hidden rounded-md hover:cursor-grab relative">
            <img
              src="/public/map-village-test.jpg"
              alt={`Photo by`}
              className="h-fit w-fot object-cover"
              /* width={300}
              height={400} */
            />

            {/* zone A */}
            {groupA.map((house) => (
              <div
                className={`bg-green-500 w-16 text-white rounded-xl py-1`} /* border-slate-100 */
                key={house.id}
                style={{
                  position: "absolute",
                  top: `${house.y}px`,
                  left: `${house.x}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FiHome size={28} className="mx-auto" />
                <p className="text-center">{house.number}</p>
              </div>
            ))}

            {/* zone B */}
            <div className="w-[330px] bg-slate-100 p-2 overflow-hidden flex flex-wrap absolute top-[120px] left-[535px] -rotate-[38deg] rounded-tr-full">
              {groupB.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>

            {/* zone C */}
            <div className="w-[360px] bg-slate-100 p-2 flex flex-wrap absolute top-[225px] left-[625px] -rotate-[38deg] rounded-r-3xl">
              {groupC.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>

            {/* zone D */}
            <div className="w-[240px] bg-slate-100 p-1 flex flex-wrap absolute top-[305px] left-[827px] -rotate-[38deg] rounded-r-3xl">
              {groupD.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>

            {/* zone F */}
            <div className="w-[240px] bg-slate-100 p-1 flex flex-wrap absolute top-[410px] left-[927px] -rotate-[38deg] rounded-r-3xl">
              {groupD.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>

            {/* zone G */}
            <div className="w-[240px] bg-slate-100 p-1 flex flex-wrap absolute top-[530px] left-[1013px] -rotate-[38deg] rounded-r-3xl">
              {groupD.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>

            {/* zone H */}
            <div className="w-fit bg-slate-100 p-2 absolute top-[570px] left-[1292px] -rotate-[29deg] rounded-lg">
              {groupH.map((house) => (
                <div
                  className={`bg-green-500 w-14 h-full text-white rounded-xl py-1`}
                >
                  <FiHome size={28} className="mx-auto" />
                  <p className="text-center">{house.number}</p>
                </div>
              ))}
            </div>
          </div>
        </figure>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default VillageMap;
