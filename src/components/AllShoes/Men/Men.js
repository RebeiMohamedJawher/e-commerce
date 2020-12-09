import React from 'react';

import './Men.css';
import MenWomenFootwear from '../MenWomenFootwear/MenWomenFootwear';
import MGym from './mGym.jpg';
import MTennis from './mTennis.jpeg';
import MJordan from './mJordan.jpg';
import MRunning from './mRunning.jpg';
import MFootball from './mFootball.jpg';
import MBasketball from './mBasketball.jpg';

const Men = () => {
  return (
    <div className="men">
      {}
      .
      <div className="men__categories">
        <MenWomenFootwear 
          title="Gym Shoes"
          image={MGym}
          pathTo="/men/gym"
        />
        <MenWomenFootwear 
          title="Tennis Shoes"
          image={MTennis}
          pathTo="/men/tennis"
        />
        <MenWomenFootwear 
          title="Air Jordan"
          image={MJordan}
          pathTo="/men/jordan"
        />
        <MenWomenFootwear 
          title="Running Shoes"
          image={MRunning}
          pathTo="/men/running"
        />
        <MenWomenFootwear 
          title="Football Boots"
          image={MFootball}
          pathTo="/men/football"
        />
        <MenWomenFootwear 
          title="Basketball Shoes"
          image={MBasketball}
          pathTo="/men/basketball"
        />
      </div>
      .
    </div>
  );
}

export default Men;