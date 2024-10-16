import React from 'react';
import './App.css';
import bgshape from './images/bgshape.svg';
import profile from './images/Profile.png';
import bgimg from './images/bgimg.svg';


const ResponsiveCard = () => {
	return (
	  <div className="card-container">
		<div className="card">
		  <h2>Card 1</h2>
		  <p>This is the first card.</p>
		</div>
		<div className="card">
		  <h2>Card 2</h2>
		  <p>This is the second card.</p>
		</div>
		<div className="card">
		  <h2>Card 3</h2>
		  <p>This is the third card.</p>
		</div>
	  </div>
	);
  };
  
  export default ResponsiveCard;

// function App() {
//     return (
// 		<div className='bg'>
// 			<div className="app-container">
// 				<div className='avatar'>
// 					<img src={profile} alt="Profile" />
// 				</div>
// 				<div className='text'>
// 					<p>Designer / Developer</p>
// 					<h1>Matt
// 					McDonald</h1>
// 				</div>
// 			</div>
// 		</div>
//     );
// }

// export default App;

// import './App.css';
// import bgshape from './images/bgshape.svg';
// import profile from './images/Profile.png';


// function App() {
//     return (
// 		<body>
// 			<div className='avatar'>
// 				<img src={profile} alt="My Awesome Image" />
// 			</div>
// 		</body>
// );
// }


// function Header() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Header />
//       <Header />
//     </div>
//   );
// }



// function Welcome(props) {
//   return <h1>Hello, {props.city}!</h1>;
// }


// function App() {
//   return (
//     <div>
//       <Welcome city="Alice" />
//       <Welcome city="Bob" />
//       <Welcome city="Charlie" />
//     </div>
//   );
// }



// function Button(props) {
//   return <button>{props.label}</button>;


// }
// function App() {
//   return (
//     <div>
//       <Welcome city="Alice" />
//       <Button label="Click Me!" />
//       <Button label="Submit" />
//       <Button label="Cancel" />
//     </div>
//   );
// }

// function ShowMessage(props) {
//   return (
//     <div>
//       {props.show ? <p>You can see this message!</p> : null}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ShowMessage show={true} />
//       <ShowMessage show={false} />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function ShowMessage(props) {
//   return (
//     <div>
//       {props.show ? <p>You can see this message!</p> : null}
//     </div>
//   );
// }

// function App() {
//   // Create a state variable called 'isVisible' to control the message display
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to toggle the message visibility
//   const toggleMessage = () => {
//     setIsVisible(!isVisible); // Toggle the boolean value
//   };

//   return (
//     <div>
//       <button onClick={toggleMessage}>
//         {isVisible ? 'Hide Message' : 'Show Message'}
//       </button>
//       <ShowMessage show={isVisible} /> {/* Pass the state to the ShowMessage component */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function Counter() {
//   // Declare a state variable called count, and initialize it to 0
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;


