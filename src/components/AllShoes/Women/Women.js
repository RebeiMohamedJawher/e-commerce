/* eslint-disable no-unused-vars */
import React from 'react';

import './Women.css';
import MenWomenFootwear from '../MenWomenFootwear/MenWomenFootwear';
import WGym from './wGym.jpg';
import WTennis from './wTennis.jpg';
import WJordan from './wJordan.jpg';
import WRunning from './wRunning.jpg';
import WFootball from './wFootball.jpg';
import WBasketball from './wBasketball.jpg';

const Women = () => {
  return (
    <div className="women">
      {}
      .
      <div className="men__categories">
        <MenWomenFootwear 
          title="Gym Shoes"
          image={WGym}
          pathTo="/women/gym"
        />
        <MenWomenFootwear 
          title="Tennis Shoes"
          image={WTennis}
          pathTo="/women/tennis"
        />
        <MenWomenFootwear 
          title="Air Jordan"
          image={WJordan}
          pathTo="/women/jordan"
        />
        <MenWomenFootwear 
          title="Running Shoes"
          image={WRunning}
          pathTo="/women/running"
        />
        <MenWomenFootwear 
          title="Football Boots"
          image={WFootball}
          pathTo="/women/football"
        />
        <MenWomenFootwear 
          title="Basketball Shoes"
          image={WBasketball}
          pathTo="/women/basketball"
        />
      </div>
      .
    </div>
  );
}

export default Women;