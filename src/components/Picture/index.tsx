import { MEDIA } from "../../CONSTANTS";
import "./style.scss";

type PictureProps = {
  children: React.ReactNode;
  isBackground?: boolean;
};
type ResponsiveProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
};

function Picture({ children, isBackground }: PictureProps) {
  return (
    <picture className={`Picture${isBackground && " Picture--isBackground"}`}>
      {children}
    </picture>
  );
}

function Responsive({ mobile, tablet, desktop, alt }: ResponsiveProps) {
  return (
    <>
      <source media={`(min-width: ${MEDIA.DESKTOP}px)`} srcSet={desktop} />
      <source media={`(min-width: ${MEDIA.TABLET}px)`} srcSet={tablet} />
      <img src={mobile} alt={alt} />
    </>
  );
}

Picture.Responsive = Responsive;
export default Picture;
