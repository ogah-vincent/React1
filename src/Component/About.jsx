

import React from "react";
const user = {
name: "Mark",
age: 25
}



const About = () => {  
return(
<div>
<h2> {user.name} </h2>
<h2> {user.age} </h2>
</div>
)
};

export default About;