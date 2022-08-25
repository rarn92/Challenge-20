import React, { useState } from 'react';
import robo3png from '../../images/robo3png.png';

// function ContactMe(props) {
//   const [input, setInput] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     props.onSubmit({
//       text: input,
//     });

//     setInput('');
// };

//   const handleChange = (e) => {
//     setInput(e.target.value);
// };

// return !props.edit  (
//   <div>
//     <form className="contact-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add to your contact list"
//         value={input}
//         name="text"
//         className="contact-input"
//         onChange={handleChange}
//       ></input>
//       <button className="contact-button">Enter contact information</button>
//     </form>
//   </div>
// )
// };


export default function Contact() {
  return (
    <body>
      <div>
        <main>
          <h2 class="text-center">Contact Me</h2>
          <form class="text-center">
            <p>Email: robo@email.com</p>
            <p>Phone: 888-888-8888</p>
          </form>
          <figure>
            <img src={robo3png} alt="Robo"></img>
          </figure>
        </main>
      </div>
    </body>
  );
}

// export {ContactMe};