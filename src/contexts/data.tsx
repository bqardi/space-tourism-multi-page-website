import { createContext } from "react";
import { CrewData } from "../pages/Crew";
import { DestinationData } from "../pages/Destination";
import { TechnologyData } from "../pages/Technology";

export type DataProps = {
  crew: CrewData[];
  destination: DestinationData[];
  technology: TechnologyData[];
};

const DataContext = createContext<DataProps | null>(null);

export default DataContext;
