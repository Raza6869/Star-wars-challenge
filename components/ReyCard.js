import "@/app/globals.css";
import Info from "./Info";
import Image from "next/image";
import Rey from "@/images/rey-charachter.png";

export default function ReyCard() {
  return (
    <div className="rey-card">
      <div className="flex flex-col gap-4 items-start text-purple-primary">
        <h1 className="uppercase text-rey-title text-2xl sm:text-3xl font-bold tracking-[2.56px]">
          Rey Skywalker
        </h1>
        <p className=" text-xs sm:text-sm w-52 sm:w-[300px">
          Era uma catadora de sucata que descobriu ser sensível à Força durante
          sua busca ao lendário Mestre Jedi Luke Skywalker.
        </p>
      </div>
      <div className="w-36 sm:w-[200px] flex flex-col gap-4">
        <Info
          title="Filmes"
          info="The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny"
        />
        <Info title="Espécie" info="Humana" />
        <Info title="Altura" info="1,7m" />
        <Info title="Localidade" info="Jakku" />
        <Info title="Armas" info="Sabre de luz, Blaster, Quarterstaff" />
      </div>
      <Image
        src={Rey}
        alt="Rey Skywalker"
        className=" transition-all duration-700 absolute sm:ml-[70px] -mt-12 sm:mt-0 scale-90 sm:scale-100 hover:sm:ml-28 hover:sm:-mt-3 hover:sm:scale-105"
      />
    </div>
  );
}
