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
type CompatibilityProps = {
  src: string;
  sources?: ImageSources[];
  alt: string;
};
type ImageSources = {
  id: number;
  srcSet: string;
  type: "image/webp";
};

function Picture({ children, isBackground }: PictureProps) {
  return (
    <picture
      className={`Picture${isBackground ? " Picture--isBackground" : ""}`}
    >
      {children}
    </picture>
  );
}

function Responsive({ mobile, tablet, desktop, alt }: ResponsiveProps) {
  return (
    <>
      <source media={`(min-width: ${MEDIA.DESKTOP}px)`} srcSet={desktop} />
      <source media={`(min-width: ${MEDIA.TABLET}px)`} srcSet={tablet} />
      <img
        className="Picture__image Picture__image--responsive"
        src={mobile}
        alt={alt}
      />
    </>
  );
}

function Compatibility({ src, sources, alt }: CompatibilityProps) {
  return (
    <>
      {sources?.map((source) => (
        <source srcSet={source.srcSet} type={source.type} />
      ))}
      <img
        className="Picture__image Picture__image--compatibility"
        src={src}
        alt={alt}
      />
    </>
  );
}

Picture.Responsive = Responsive;
Picture.Compatibility = Compatibility;
export default Picture;
