import Image from "next/image";

export type ImageGridItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapperClassName?: string;
  imageClassName?: string;
};

type Props = {
  items: ImageGridItem[];
};

export default function ImageGrid({ items }: Props) {
  if (items.length < 3) {
    return null;
  }

  const [featured, topRight, bottomRight] = items;

  const cardBaseClass =
    "relative overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-sm";

  return (
    <div className="grid w-full gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-stretch">
      <figure
        key={featured.src}
        className={[
          cardBaseClass,
          "aspect-[4/5] md:aspect-auto md:min-h-[500px] lg:min-h-[clamp(520px,50vh,620px)]",
          featured.wrapperClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={featured.src}
          alt={featured.alt}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 38vw, 100vw"
          className={["object-cover", featured.imageClassName]
            .filter(Boolean)
            .join(" ")}
        />
      </figure>

      <div className="grid gap-4 md:grid-rows-2 md:min-h-[500px] lg:min-h-[clamp(520px,50vh,620px)]">
        <figure
          key={topRight.src}
          className={[
            cardBaseClass,
            "aspect-[4/3] md:aspect-auto",
            topRight.wrapperClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={topRight.src}
            alt={topRight.alt}
            fill
            sizes="(min-width: 1024px) 26vw, (min-width: 768px) 30vw, 100vw"
            className={["object-cover", topRight.imageClassName]
              .filter(Boolean)
              .join(" ")}
          />
        </figure>

        <figure
          key={bottomRight.src}
          className={[
            cardBaseClass,
            "aspect-[4/3] md:aspect-auto",
            bottomRight.wrapperClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={bottomRight.src}
            alt={bottomRight.alt}
            fill
            sizes="(min-width: 1024px) 26vw, (min-width: 768px) 30vw, 100vw"
            className={["object-cover", bottomRight.imageClassName]
              .filter(Boolean)
              .join(" ")}
          />
        </figure>
      </div>
    </div>
  );
}
