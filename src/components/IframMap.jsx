import React from "react";

import { FiHome } from "react-icons/fi";

// ข้อมูลตัวอย่างที่มีบ้านเลขที่และพิกัดบนแผนที่
const houses = [
  { id: 1, number: "1A", x: 50, y: 100 },
  { id: 2, number: "2B", x: 150, y: 200 },
  { id: 3, number: "3C", x: 300, y: 150 },
  // เพิ่มบ้านอื่นๆ ที่นี่
];

function IframMap() {
  return (
    <div className="bg-blue-200 w-fit flex flex-col justify-center mx-auto my-auto items-center relative">

      <iframe
        src="/public/map-village-test.jpg"
        className="w-[1200px] h-[550px] "
        title="Iframe Example"
      >
        <p>Test text</p>
      </iframe>
    </div>
  );
}

export default IframMap;
