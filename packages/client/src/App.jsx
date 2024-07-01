
import { useState } from "react";
import DataTable from "./components/DataTable";

export default function App() {
   const types = [
      { category: "users", i: 0 },
      { category: "cars", i: 1 },
      { category: "houses", i: 2 }
   ];
   const [type, setType] = useState(types[0]);

   return (
      <div>
         <header className="p-4">
            <div className='flex justify-between mb-4 border cursor-pointer text-xl bg-black text-white font-mono'>
               <div className='flex gap-6'>
                  {types.map((typeObj) => (
                     <button
                        key={typeObj.i}
                        className="cursor-pointer first-letter:uppercase hover:text-black hover:bg-white p-2"
                        onClick={() => setType(typeObj)}
                        type="button"
                     >
                        {typeObj.category}
                     </button>
                  ))}
               </div>
               <h1 className="text-5xl font-bold font-mono">
                  {type.category} Table
               </h1>
               <img src="./icon.png" alt="logo" />
            </div>
         </header>
         <main className="p-4">
            <DataTable type={type.category} key={type.i} />
         </main>
      </div>
   );
}
