import { useContext, useEffect } from "react";
import DataContext from "../contexts/data";
import Picture from "../components/Picture";

import backgroundTechnologyMobile from "../assets/technology/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "../assets/technology/background-technology-tablet.jpg";
import backgroundTechnologyDesktop from "../assets/technology/background-technology-desktop.jpg";

import "./Technology.scss";
import { useNavigate, useParams } from "react-router-dom";

type TechnologyImages = {
  landscape: string;
  portrait: string;
};

export type TechnologyData = {
  slug: string;
  description: string;
  distance: string;
  images: TechnologyImages;
  name: string;
  travel: string;
};

const folder = "technology";

function Technology() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useContext(DataContext);
  const current = data?.[folder].find(
    (member) => member.slug === `/${folder}/${slug}`
  );

  useEffect(() => {
    if (!data) return;
    slug ?? navigate(data[folder][0].slug);
  }, [slug, data, navigate]);

  return (
    <main className="Technology">
      {current && <DestinationCard key={current.name} data={current} />}
      <Picture isBackground>
        <Picture.Responsive
          mobile={backgroundTechnologyMobile}
          tablet={backgroundTechnologyTablet}
          desktop={backgroundTechnologyDesktop}
          alt=""
        />
      </Picture>
    </main>
  );
}

type DestinationCardProps = {
  data: TechnologyData;
};
function DestinationCard({ data }: DestinationCardProps) {
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default Technology;
