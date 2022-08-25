import React from 'react';
import robo1png from '../../images/robo2png.png';



export default function About() {
  return (
    <body>
      <div>
        <main class="text-center">
          <h1>Please stand by!</h1>
          <h1>Resume coming soon!</h1>
          <figure>
            <img src={robo1png} alt="Robo"></img>
          </figure>
        </main>
      </div>
    </body>
  );
}
