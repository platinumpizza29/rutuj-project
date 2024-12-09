import { Cobe } from "~/components/codeglobe";
import NavbarComp from "~/components/navbarComp";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh]">
      <NavbarComp />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="p-10">
          <h1 className="text-4xl md:text-6xl font-bold">Hero goes here</h1>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit. Nihil assumenda atque nesciunt, facere exercitationem aliquid nisi libero, ullam cupiditate saepe ducimus voluptatibus impedit quae, velit incidunt reiciendis tempore?</p>
        </div>
        <Cobe />
      </div>
    </main>
  );
}
