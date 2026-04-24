// import { NavLink } from "react-router-dom";
// import { sidebarItems } from "../../components/sidebarAdmin/sidebar";

// export default function Index() {
//   return (
//     <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
//       <div className="text-2xl font-bold mb-8 border-b border-gray-700 pb-2">
//         BxU Admin
//         <span className="block text-sm font-normal text-gray-400">Kutubxona Tizimi</span>
//       </div>

//       <nav className="flex-1 space-y-1">
//         {sidebarItems.map((item, idx) => (
//           <NavLink
//             key={idx}
//             to={`${item.layout}/${item.path}`}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-md transition ${
//                 isActive
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-300 hover:bg-gray-800 hover:text-white"
//               }`
//             }
//           >
//             <span className="text-xl">{item.icon}</span>
//             <span>{item.name}</span>
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// }


import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}

export default index