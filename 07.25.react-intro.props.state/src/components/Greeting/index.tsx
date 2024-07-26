interface IGreeting {
  name: string;
  age: number;
}
const Greeting = ({ name, age }: IGreeting) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>you are {age} years old</p>
    </div>
  );
};

export default Greeting;
