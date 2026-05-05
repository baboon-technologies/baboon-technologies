import './LogoCarousel.css';

const partnerImages = [
  '/Partners/20.png', '/Partners/21.png', '/Partners/22.png',
  '/Partners/23.png', '/Partners/24.png', '/Partners/25.png', '/Partners/26.png',
];

const clientImages = [
  '/Clients/20.png', '/Clients/21.png', '/Clients/22.png', '/Clients/23.png',
  '/Clients/24.png', '/Clients/25.png', '/Clients/26.png',
  '/Clients/27.png', '/Clients/28.png', '/Clients/29.png', '/Clients/30.png', '/Clients/31.png',
  '/Clients/32.png', '/Clients/34.png', '/Clients/35.png',
  '/Clients/36.png',
];

const BASE_COUNT = partnerImages.length;
const BASE_DURATION = 30;

function CarouselTrack({ images, direction }) {
  const doubled = [...images, ...images];
  const duration = (images.length / BASE_COUNT) * BASE_DURATION;
  return (
    <div className="carousel-track-wrapper">
      <div
        className={`carousel-track carousel-track--${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="carousel-card">
            <img src={src} alt="" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoCarousel() {
  return (
    <div className="logo-carousel-root">
      <div className="carousel-group">
        <span className="carousel-label">Partners</span>
        <CarouselTrack images={partnerImages} direction="left" />
      </div>
      <div className="carousel-group">
        <span className="carousel-label">Clientes</span>
        <CarouselTrack images={clientImages} direction="right" />
      </div>
    </div>
  );
}

export default LogoCarousel;
