import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import {car,bike,bike_2,car_2} from '../components/image';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Appcarousel = () => {
  const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
        <img style={contentStyle} src={car} alt="this is img" />
        </div>
        <div>
        <img style={contentStyle} src={car_2} alt="this is img" />
        </div>
        <div>
        <img style={contentStyle} src={bike_2} alt="this is img" />
        </div>
        <div>
        <img style={contentStyle} src={bike} alt="this is img" />
        </div>
      </Carousel>
    </>
  );
};
export default Appcarousel;