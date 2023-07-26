type Props = {
  img: string;
  i: number;
  size: number;
};

export default function CarouselItem({img, i, size}: Props) {
  const nextSlide = (size > i+1) ? i+1 : 1;
  const prevSlide = (i-1 > 0) ? i-1 : size-1;
  
  return (
  <>
    <img src={`/images${img}`} className="w-full" alt="" />
  </>
  );
}