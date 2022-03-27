import React from 'react'

// class Car extends Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

const Car = () =>{
    const [color, setColor] = useState('red')

 return <h2>I am a Car!</h2>;
}

export default Car