import React from 'react';
import robo1png from '../../images/robo1png.png';
import '../../styles/style.css';

export default function Home() {
  return (
    <body>
      <div>
        <main class="text-center">
          <h1>Hello!</h1>
          <h1>My name is Robo!</h1>
          <h1>Welcome to my page!</h1>
          <figure>
            <img src={robo1png} alt="Robo"></img>
          </figure>
        </main>
      </div>
    </body>
  );
}
