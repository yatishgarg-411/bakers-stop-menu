import React from 'react';
import Slider from 'react-slick';
import './Blog.css';

const Blog = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="blog" id='blog1'>
      {/* Text Section */}
      <div className="blog-header">
        <h1 className="blog-title">WE'RE BAKING BEST CAKES IN MARKET</h1>
        <p className="blog-description">
          We're here to cultivate a positive, adventurous, and mindful approach to cake creations. That's why we embrace curiosity in every aspect of our baking. We've even established our own innovation hub — a cutting-edge kitchen where we explore ways to enhance flavor, nutrition, and sustainability in the world of desserts.
        </p>
      </div>

      {/* Image Slider Section */}
        <div className='ptani'>
          <img src='/c.png' id='contactimg'></img>

          <div className="blog-slider-container">
            <div className="dom-shaped-image">
              <Slider {...sliderSettings} className="image-slider">
                <img
                  src="/seating.jpeg"
                  alt="Cake 1"
                  className="slider-image"
                />
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Cake 2"
                  className="slider-image"
                />
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Cake 3"
                  className="slider-image"
                />
              </Slider>
            </div>

          </div>
        </div>
    </section>
  );
};

export default Blog;
