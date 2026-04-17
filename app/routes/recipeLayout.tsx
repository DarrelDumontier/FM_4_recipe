import type { Route } from "./+types/recipeLayout";

import { Outlet } from "react-router";



export default function Home() {
  return (
   
      <main className="max-w-184 w-full" >
        <Outlet />
      </main>
   
  ) ;
}
