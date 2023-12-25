const partnerImages = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
];

export default function Brands() {
  return (
    <div className="container width-5">
      <div className="grid columns-5 columns-mobile-2 centered">
        {partnerImages.map((imageUrl, index) => (
          <div key={index} className="column image pad-2">
            <img alt={`Partner ${index + 1}`} src={imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}
