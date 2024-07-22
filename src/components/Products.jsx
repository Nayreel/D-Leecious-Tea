import Slider from "react-slick";
import { products } from "../data";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Products = () => {
  return (
    <section
      id="products"
      className="products-section w-screen overflow-hidden h-full common-padding bg-brown"
    >
      <div className="highlights-container screen-max-width">
        <div className="title-container mb-12 w-full items-end justify-between">
          <h1 id="title" className="title section-heading text-green-900">
            D-Leecious Delights
          </h1>
        </div>

        <div className="carousel-container w-full p-10">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <div className="product-card bg-brown-100 p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 h-full">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-32 h-32 lg:w-96 lg:h-96 object-cover mb-4 border-2 border-brown"
                  />
                  <h1 className="text-base xl:text-lg  font-bold text-brown text-center">
                    {product.name}
                  </h1>
                  <p className="text-white text-center text-xs xl:text-sm line-clamp-3">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
