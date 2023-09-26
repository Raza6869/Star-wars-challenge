import "@/app/globals.css";
import Info from "./Info";
import Image from "next/image";
import Rey from "@/images/rey-charachter.png";

export default function ReyCard() {
  return (
    <div className="min-w-[436px] z-50 -m-28 h-[586px] bg-[url('../images/rey-background.png')] rounded-[20px] px-8 py-10 flex flex-col gap-[60px] opacity-90 hover:opacity-100 scale-90">
      <div className="flex flex-col gap-4 items-start text-purple-primary w-[300px]">
        <h1 className="uppercase text-rey-title text-4xl font-bold tracking-[2.56px]">
          Rey Skywalker
        </h1>
        <p className="text-sm">
          Era uma catadora de sucata que descobriu ser sensível à Força durante
          sua busca ao lendário Mestre Jedi Luke Skywalker.
        </p>
      </div>
      <div className="w-[200px] flex flex-col gap-4">
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
        className=" transition-all duration-700 absolute ml-20 -mt-3 hover:ml-28"
      />
    </div>
  );
}
