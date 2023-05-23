import React from "react";

 //function component
const Home = () => {
     let firstName = "Will"
     let lastName = "Smith"
     return (
         <div>
<p>{firstName + " " + lastName}</p>;
       </div>
     ) 
 };


// class component
// class Home extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Hello from class component</h3>
//             </div>
//         )
//     }
// }
// const Home = () => {
//     let name = "Vincent"
//     let age = 20
//     return (
//         <div>
//             <h2> {name} </h2>
//             <h2> {age} </h2>



//         </div>
//     )
// }


 export default Home;

