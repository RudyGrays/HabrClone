import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Image.module.scss";

type ImgTypes = "png" | "jpeg" | "svg";

interface ImgProps {
  src: string;
  alt: string;
  size?: number;
  windowSize?: number;
  type?: ImgTypes;
}

interface ImageProps {
  someClasses?: string;
  image?: ImgProps;
  images?: Array<ImgProps>;
}

const Image: FC<ImageProps> = ({ someClasses, image, images = [] }) => {
  return (
    <picture className={classNames(mainClasses.Image, {}, [someClasses])}>
      {images.length > 0 ? (
        images.map(imagesItem => {
          return (
            <source
              srcSet={`${imagesItem.size}x${imagesItem.size}.${imagesItem.type}`}
              media={String(imagesItem.windowSize)}
            />
          );
        })
      ) : (
        <img
          srcSet={`${image.size}x${image.size}.${image.type}`}
          src={image.src}
          alt={image.alt}
        />
      )}
    </picture>
  );
};

export { Image };
