import { createContext } from "react";
import { CrewData } from "../pages/Crew";
import { DestinationsData } from "../pages/Destination";
import { TechnologyData } from "../pages/Technology";

export type DataProps = {
  crew: CrewData[];
  destinations: DestinationsData[];
  technology: TechnologyData[];
};

const DataContext = createContext<DataProps | null>(null);

export default DataContext;
