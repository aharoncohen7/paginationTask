import DataTable from "./components/DataTable";
import { sortData, filterData } from "./components/data";

export const data = [
   { id: 1, name: 'John Doe', phone: '123-456-7890', age: 30, email: 'john@example.com', status: 'active', money: 1000, isActive: true },
   { id: 2, name: 'Jane Smith', phone: '987-654-3210', age: 25, email: 'jane@example.com', status: 'inactive', money: 1500, isActive: false },
   { id: 3, name: 'Alice Johnson', phone: '456-789-1234', age: 35, email: 'alice@example.com', status: 'active', money: 2000, isActive: true },
   { id: 4, name: 'Bob Brown', phone: '321-654-9870', age: 40, email: 'bob@example.com', status: 'inactive', money: 500, isActive: false },
   { id: 5, name: 'Charlie Davis', phone: '789-123-4567', age: 28, email: 'charlie@example.com', status: 'active', money: 3000, isActive: true },
   { id: 6, name: 'Diana Evans', phone: '654-321-0987', age: 22, email: 'diana@example.com', status: 'inactive', money: 750, isActive: false },
   { id: 7, name: 'Eve Ford', phone: '111-222-3333', age: 27, email: 'eve@example.com', status: 'active', money: 1800, isActive: true },
   { id: 8, name: 'Frank Green', phone: '444-555-6666', age: 32, email: 'frank@example.com', status: 'inactive', money: 400, isActive: false },
   { id: 9, name: 'Grace Harris', phone: '777-888-9999', age: 45, email: 'grace@example.com', status: 'active', money: 2200, isActive: true },
   { id: 10, name: 'Hank Irving', phone: '222-333-4444', age: 33, email: 'hank@example.com', status: 'inactive', money: 600, isActive: false },
   { id: 11, name: 'Ivy Johnson', phone: '555-666-7777', age: 29, email: 'ivy@example.com', status: 'active', money: 1200, isActive: true },
   { id: 12, name: 'Jack King', phone: '888-999-0000', age: 38, email: 'jack@example.com', status: 'inactive', money: 1100, isActive: false },
   { id: 13, name: 'Karen Lee', phone: '000-111-2222', age: 41, email: 'karen@example.com', status: 'active', money: 2100, isActive: true },
   { id: 14, name: 'Leo Miller', phone: '333-444-5555', age: 36, email: 'leo@example.com', status: 'inactive', money: 900, isActive: false },
   { id: 15, name: 'Mona Nash', phone: '666-777-8888', age: 23, email: 'mona@example.com', status: 'active', money: 1000, isActive: true },
   { id: 16, name: 'Nick Oliver', phone: '999-000-1111', age: 34, email: 'nick@example.com', status: 'inactive', money: 1400, isActive: false },
   { id: 17, name: 'Olivia Perez', phone: '444-555-6666', age: 26, email: 'olivia@example.com', status: 'active', money: 1600, isActive: true },
   { id: 18, name: 'Paul Quinn', phone: '777-888-9999', age: 39, email: 'paul@example.com', status: 'inactive', money: 700, isActive: false },
   { id: 19, name: 'Quincy Roberts', phone: '111-222-3333', age: 31, email: 'quincy@example.com', status: 'active', money: 1700, isActive: true },
   { id: 20, name: 'Rachel Smith', phone: '222-333-4444', age: 24, email: 'rachel@example.com', status: 'inactive', money: 1300, isActive: false },
   { id: 21, name: 'John Doe', phone: '123-456-7890', age: 30, email: 'john@example.com', status: 'active', money: 1000, isActive: true },
   { id: 22, name: 'Jane Smith', phone: '987-654-3210', age: 25, email: 'jane@example.com', status: 'inactive', money: 1500, isActive: false },
   { id: 23, name: 'Alice Johnson', phone: '456-789-1234', age: 35, email: 'alice@example.com', status: 'active', money: 2000, isActive: true },
   { id: 24, name: 'Bob Brown', phone: '321-654-9870', age: 40, email: 'bob@example.com', status: 'inactive', money: 500, isActive: false },
   { id: 25, name: 'Charlie Davis', phone: '789-123-4567', age: 28, email: 'charlie@example.com', status: 'active', money: 3000, isActive: true },
   { id: 26, name: 'Diana Evans', phone: '654-321-0987', age: 22, email: 'diana@example.com', status: 'inactive', money: 750, isActive: false },
   { id: 27, name: 'Eve Ford', phone: '111-222-3333', age: 27, email: 'eve@example.com', status: 'active', money: 1800, isActive: true },
   { id: 28, name: 'Frank Green', phone: '444-555-6666', age: 32, email: 'frank@example.com', status: 'inactive', money: 400, isActive: false },
   { id: 29, name: 'Grace Harris', phone: '777-888-9999', age: 45, email: 'grace@example.com', status: 'active', money: 2200, isActive: true },
   { id: 30, name: 'Hank Irving', phone: '222-333-4444', age: 33, email: 'hank@example.com', status: 'inactive', money: 600, isActive: false },
   { id: 31, name: 'Ivy Johnson', phone: '555-666-7777', age: 29, email: 'ivy@example.com', status: 'active', money: 1200, isActive: true },
   { id: 32, name: 'Jack King', phone: '888-999-0000', age: 38, email: 'jack@example.com', status: 'inactive', money: 1100, isActive: false },
   { id: 33, name: 'Karen Lee', phone: '000-111-2222', age: 41, email: 'karen@example.com', status: 'active', money: 2100, isActive: true },
   { id: 34, name: 'Leo Miller', phone: '333-444-5555', age: 36, email: 'leo@example.com', status: 'inactive', money: 900, isActive: false },
   { id: 35, name: 'Mona Nash', phone: '666-777-8888', age: 23, email: 'mona@example.com', status: 'active', money: 1000, isActive: true },
   { id: 36, name: 'Nick Oliver', phone: '999-000-1111', age: 34, email: 'nick@example.com', status: 'inactive', money: 1400, isActive: false },
   { id: 37, name: 'Olivia Perez', phone: '444-555-6666', age: 26, email: 'olivia@example.com', status: 'active', money: 1600, isActive: true },
   { id: 38, name: 'Paul Quinn', phone: '777-888-9999', age: 39, email: 'paul@example.com', status: 'inactive', money: 700, isActive: false },
   { id: 39, name: 'Quincy Roberts', phone: '111-222-3333', age: 31, email: 'quincy@example.com', status: 'active', money: 1700, isActive: true },
   { id: 40, name: 'Rachel Smith', phone: '222-333-4444', age: 24, email: 'rachel@example.com', status: 'inactive', money: 1300, isActive: false },

];

export default function App() {
   const url = 'http://localhost:3355/users';


   return (
      <div>
         <header className="p-4 text-center">
            <h1 className="text-xl font-bold font-mono">Users Table</h1>
         </header>
         <main className="p-4">
            <DataTable url={url} />
         </main>
      </div>
   )
}
