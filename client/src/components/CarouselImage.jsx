import Carousel from 'react-bootstrap/Carousel';
import MermaidCrown from '../components/MermaidCrown';
import JeanJacket from '../components/JeanJacket';
import FlowerCrown from '../components/FlowerCrown';

function CarouselImage() {
  return (
    <Carousel fluid='true'>
      <Carousel.Item interval={2000}>
        <MermaidCrown text='Mermaid Crown' />
        <Carousel.Caption>
          <h3 style={{ color: "#fffb0a" }}>Mermaid Crown</h3>
          <p style={{ color: "#fffb0a" }}>Handcrafted crown adorned with shells and pearls.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <JeanJacket text='Jean Jacket' />
        <Carousel.Caption>
          <h3 style={{ color: "#fffb0a" }}>Jean Jacket</h3>
          <p style={{ color: "#fffb0a" }}>Upcycled denim beauties ready to wear anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <FlowerCrown text='Flower Crown' />
        <Carousel.Caption>
          <h3 style={{ color: "#fffb0a" }}>Flower Crown</h3>
          <p style={{ color: "#fffb0a" }}>
          Forever flower crown made with assorted blooms.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;