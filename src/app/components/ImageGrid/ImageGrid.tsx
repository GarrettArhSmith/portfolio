import Image from "next/image";

export type ImageGridItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapperClassName?: string;
};

type Props = {
  items: ImageGridItem[];
};

export default function ImageGrid({ items }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <figure
          key={item.src}
          className={[
            "overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-sm",
            item.wrapperClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="h-full w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
