import React from "react";

import { FiHome } from "react-icons/fi";

// ข้อมูลตัวอย่างที่มีบ้านเลขที่และพิกัดบนแผนที่
const houses = [
  { id: 1, number: "1A", x: 50, y: 100 },
  { id: 2, number: "2B", x: 150, y: 200 },
  { id: 3, number: "3C", x: 300, y: 150 },
  // เพิ่มบ้านอื่นๆ ที่นี่
];

function VillageMap() {
  return (
    <div className="relative w-[900px] h-[900px] mx-auto overflow-auto bg-lime-200">
      {/* รูปภาพแผนที่หมู่บ้าน */}
      <img
        src="/public/map-village-test.jpg"
        alt="Village Map"
        className="w-full"
      />

      {/* แสดงไอคอนสำหรับบ้านแต่ละหลัง */}
      {houses.map((house) => (
        <div
          className="bg-red-500 w-12"
          key={house.id}
          style={{
            position: "absolute",
            top: `${house.y}px`,
            left: `${house.x}px`,
            transform: "translate(-50%, -50%)", // ใช้เพื่อให้ไอคอนอยู่ตรงกลางที่พิกัดที่กำหนด
          }}
        >
          <FiHome />
        </div>
      ))}
    </div>
  );
}

export default VillageMap;
