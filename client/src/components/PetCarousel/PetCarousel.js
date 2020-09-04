import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./styles.css";
import Carlisle from "../Images/Carlisle.jpg";
import Charly from "../Images/Charly.png";
import Chippy from "../Images/Chippy.jpeg";
import Malone from "../Images/Malone.jpeg";
import Brennan from "../Images/Brennan.jpg";
import Bulma from "../Images/Bulma.jpg";
import Leo from "../Images/Leo.png";


const items = [
  {
    src: Carlisle,
    altText: 'Carlisle the Honey Badger',
    caption: 'Carlisle',
    style: {height: "400px", width: "540px", margin: "auto"},
    
  },
  {
    src: Leo,
    altText: 'Leo',
    caption: 'Leo (the other one)',
    style: {height: "400px", width: "540px", margin: "auto"},
    
  },
  {
    src: Malone,
    altText: 'Malone the Cat',
    caption: 'Malone',
    style: {height: "400px", width: "540px", margin: "auto"},
    
  },
  {
    src: Charly,
    altText: 'Charly the Dog',
    caption: 'Charly',
    style: {height: "400px", width: "540px"}
  },
  {
    src: Chippy,
    altText: 'Chippy the Dog',
    caption: 'Chippy',
    style: {height: "400px", width: "540px"}
  },
  {
    src: Brennan,
    altText: 'Brennan the Dog',
    caption: 'Brennan',
    style: {height: "400px", width: "540px", margin: "auto"},
    
  },
  {
    src: Bulma,
    altText: 'Bulma the Dog',
    caption: 'Bulma',
    style: {height: "400px", width: "540px", margin: "auto"},
    
  }
];


const PetCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={item.style} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
      
    );
  });

  return (
    
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      // style={{ margin: "auto" }}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
   
  );
}

export default PetCarousel;