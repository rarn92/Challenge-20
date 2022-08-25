import React from 'react';
import quiz from '../../images/JavaScript Quiz.png';
import weather from '../../images/Weather Dashboard.png';
import scheduler from '../../images/Workday Scheduler.png';

export default function Blog() {
  return (
    <body>
      <div>
        <main>
          <h1 class="text-center">My Projects:</h1>
          <div>
            <figure>
              <h2>JavaScript Quiz</h2>
              <a href="https://rarn92.github.io/Challenge-04/"><img src={quiz} alt="quiz" width="350"
                height="250"></img></a>
            </figure>
            <figure>
              <h2>Weather Dashboard</h2>
              <a href="https://rarn92.github.io/Challenge-06/"><img src={weather} alt="weather" width="350"
                height="250" ></img></a>
            </figure>
            <figure>
              <h2>Work Scheduler</h2>
              <a href="https://rarn92.github.io/Challenge-05/"><img src={scheduler} alt="workday" width="350"
                height="250" ></img></a>
            </figure>
          </div>
        </main>
      </div>
    </body>
  );
}
