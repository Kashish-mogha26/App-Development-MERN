import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, eeww <code>src/App.js</code> and save to f*ck.
//         </p>
//       </div>
//     );
//   }
// }
// class App extends Component {
//   constructor(props) {
//   super(props);
//       this.state = {
//             dishes: DISHES
//         };
//       }

//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes= {this.state.dishes} />
//         {/* Now if I want to make use of the app component inside my menu component, all I need to do is go down here and then simply say menu with a self closing tack and that's it. Now, my menu component will be rendered below the nav bar in my app component. */}
//         {/* So, this way the dishes that I have defined in the state for my App component is now made available as props to my menu component. */}
//       </div>
//     );
//   }
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
