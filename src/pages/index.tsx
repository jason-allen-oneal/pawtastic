export default function Home() {
  const images = [
    '/cover_1.jpg',
    '/cover_2.jpg',
    '/cover_3.jpg',
  ];
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="w-full items-center text-center">
        <h2>Pawtastic Pet Camp</h2>
        <div className="w-full carousel rounded-box border border-primary bg-base-300 text-base-content">
        {images.map((img: string, i: number) => (
          <div
            key={i}
            id={`item-${i + 1}`}
            className="carousel-item w-1/2 h-full text-center relative"
          >
            <img src={`/images${img}`} className="w-full" alt="" />
          </div>
        ))}
        </div>
        <p>We are a doggy day care service, boarding, and more! Let us know if we can assist you in any way!</p>
      </div>
    </main>
  )
}
