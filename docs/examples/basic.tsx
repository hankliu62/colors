import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@hankliu/colors';

console.log(blue); // ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']
console.log(blue.primary); // '#1677FF'
import * as React from 'react';

export default function Base() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        {blue.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: item,
              color: blue.primary === item ? '#fff' : '#000',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={`${blue.primary ? 'primary' : 'default'}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{ flex: '1' }}>
        {gold.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: item,
              color: gold.primary === item ? '#fff' : '#000',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={`${blue.primary ? 'primary' : 'default'}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{ flex: '1' }}>
        {magenta.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: item,
              color: magenta.primary === item ? '#fff' : '#000',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={`${blue.primary ? 'primary' : 'default'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
