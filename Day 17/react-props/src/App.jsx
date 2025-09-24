import "./App.css";
import Card from "./components/Card";

function App() {
  const users = [
    { name: "Pranto Bapary", buttonText: "Visit Profile" },
    { name: "Sam Altman", buttonText: "Check Profile" },
    { name: "John Doe", buttonText: "View Profile" },
    { name: "Jane Smith", buttonText: "See Profile" },
    { name: "Michael Jack", buttonText: "Watch Profile" },
  ];
  return (
    <div className="my-cards">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-8 text-white">
        Day 17 | React Props & Tailwind | 60 Days of Coding Challenge |<br />Pranto Bapary
      </h1>
      <div className="flex flex-col justify-center md:flex-row gap-5">
        {users.map((user) => <Card username={user.name} buttonText={user.buttonText}/>)}
      </div>
    </div>
  );
}

export default App;
