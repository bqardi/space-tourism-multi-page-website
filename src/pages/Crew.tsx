import { useContext } from "react";
import DataContext from "../contexts/data";
import Picture from "../components/Picture";

import backgroundCrewMobile from "../assets/crew/background-crew-mobile.jpg";
import backgroundCrewTablet from "../assets/crew/background-crew-tablet.jpg";
import backgroundCrewDesktop from "../assets/crew/background-crew-desktop.jpg";

import "./Crew.scss";

type CrewImages = {
  png: string;
  webp: string;
};

export type CrewData = {
  bio: string;
  images: CrewImages;
  name: string;
  role: string;
};

function Crew() {
  const data = useContext(DataContext);
  return (
    <div className="Crew">
      {data?.crew.map((card: CrewData) => (
        <CrewCard key={card.name} data={card} />
      ))}
      <Picture>
        <Picture.Responsive
          mobile={backgroundCrewMobile}
          tablet={backgroundCrewTablet}
          desktop={backgroundCrewDesktop}
          alt=""
        />
      </Picture>
    </div>
  );
}

type CrewCardProps = {
  data: CrewData;
};
function CrewCard({ data }: CrewCardProps) {
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default Crew;
