import React, { FC } from 'react';

// Define the type for props using an interface
interface GreetingProps {
  name: string;  // 'name' should be a string
}

// Define the functional component using the 'FC' (Functional Component) type
const Greeting: FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;
