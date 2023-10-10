import React, { useState } from 'react';
import './App.css';
import Daikichi from './image/omikuji_Daikichi.jpg';
import Cyukichi from './image/omikuji_Cyukichi.jpg';
import Syoukichi from './image/omikuji_Syoukichi.jpg';
import Kichi from './image/omikuji_Kichi.jpg';
import Kyou from './image/omikuji_Kyou.jpg';
import Daikyou from './image/omikuji_Daikyou.jpg';


const Fortune = () =>{
  const [omikuji, setOmikuji] = useState('');

  const drawFortune = () => {
    const fortunes = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    setOmikuji(fortune);
  };

  const renderFortuneImage = () =>{
    switch(omikuji){
      case '大吉':
        return <img src={Daikichi} className='omikuji-img' alt="大吉"/>

      case '中吉':
        return <img src={Cyukichi} className='omikuji-img' alt="中吉"/>
      
      case '小吉':
        return <img src={Syoukichi} className='omikuji-img' alt="小吉"/>
      
      case '吉':
        return <img src={Kichi} className='omikuji-img' alt="吉"/>

      case '凶':
        return <img src={Kyou} className='omikuji-img' alt="凶"/>
      
      case '大凶':
        return <img src={Daikyou} className='omikuji-img' alt="大凶"/>

      default:
        return null;
        };
      };

    return (
      <div className="App">
        <section className='Fortune-container'>
          <h2 className='Fortune-h2'>おみくじ</h2>
          <button onClick={drawFortune} className='omikuji-btn'>おみくじを引く</button>
          {omikuji && renderFortuneImage()}
        </section>
      </div>
    );
};

export default Fortune;