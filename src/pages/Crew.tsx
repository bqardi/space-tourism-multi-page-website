import { useContext, useEffect } from "react";
import DataContext from "../contexts/data";
import Picture from "../components/Picture";

import backgroundCrewMobile from "../assets/crew/background-crew-mobile.jpg";
import backgroundCrewTablet from "../assets/crew/background-crew-tablet.jpg";
import backgroundCrewDesktop from "../assets/crew/background-crew-desktop.jpg";

import "./Crew.scss";
import { useNavigate, useParams } from "react-router-dom";

type CrewImages = {
  png: string;
  webp: string;
};

export type CrewData = {
  slug: string;
  bio: string;
  images: CrewImages;
  name: string;
  role: string;
};

const folder = "crew";

function Crew() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useContext(DataContext);
  const current = data?.[folder].find(
    (member) => member.slug === `/${folder}/${slug}`
  );

  useEffect(() => {
    if (!data) return;
    slug ?? navigate(data[folder][0].slug);
  }, [slug, data]);

  return (
    <div className="Crew">
      {current && <CrewCard key={current.name} data={current} />}
      <Picture isBackground>
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
