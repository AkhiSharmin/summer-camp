import { useTheme } from "../../Provider/ThemeContext";
import "./Gallery.css";
const Gallery = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="py-20">
      <div className="text-center pb-20 w-1/2 mx-auto">
        <h1 className="text-5xl font-bold text-purple-700 drop-shadow-2xl">
          Our Gallery
        </h1>
        <p className="mt-5 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magni nostrum quas alias possimus labore Lorem ipsum dolor,sit amet
        </p>
      </div>
      <div className="gallery">
        <figure className="gallery__item gallery__item--1" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-vector/gradient-old-village-illustration_23-2149441202.jpg?w=996&t=st=1686135838~exp=1686136438~hmac=78278f83ae7b45ff1d983862b1903c5cab4686c7514bfd883b3749c77405d0d9"
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2" data-aos="zoom-in">
          <img
            src="https://plus.unsplash.com/premium_photo-1673514503535-0ef307e0c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/top-view-colorful-watercolor-with-brushes_23-2148612728.jpg?w=900&t=st=1686153572~exp=1686154172~hmac=01cfb98128f825fa9ab958fb50f02e5998e67adc8eb76e371093e1924304a61c"
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4" data-aos="zoom-in">
          <img
            src="https://plus.unsplash.com/premium_photo-1673514503545-1ca1193e4094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/kK6z0th/Screenshot-2023-06-07-171710.png"
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1536331897257-b616ebd9c9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Gallery image 6"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-school-kids-riding-pencil_43633-3622.jpg?w=740"
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1457295767206-0cb0658056cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10" data-aos="zoom-in">
          <img
            src="https://media.istockphoto.com/id/665219074/photo/graphic-designer-at-work-color-samples-note-to-inspector-i-am-the-author-of-everything-that.jpg?s=2048x2048&w=is&k=20&c=qXgMfk_J7q4Gu1z_w1w0EE_PxkNrSC5-Mm8SvLsZqAc="
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/art-desk-concept-with-paint-brushes_23-2148577669.jpg?w=996&t=st=1686153446~exp=1686154046~hmac=3dbded36aba8059b82b13fe07e8be61e09466fa3a02f3773224970d644e782ca"
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-photo/child-paints-tree-with-autumn-leaves-art-concept_206268-2141.jpg?w=996"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1585840887185-dc28a1b86ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14" data-aos="zoom-in">
          <img
            src="https://media.istockphoto.com/id/925384274/photo/watercolor-pastel-sketchbook-with-pencil-portrait-paintbrushes-tubes-of-paint-palette-with-oil.jpg?s=2048x2048&w=is&k=20&c=qv53vws5h3GPm79nEJurkmDXgLMbaDEBOYQfllwJnAA="
            alt="Gallery image 14"
            className="gallery__img"
          />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
