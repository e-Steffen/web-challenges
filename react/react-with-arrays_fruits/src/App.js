import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 21,
      name: "carot",
      color: "orange",
    },
    {
      id: 22,
      name: "apple",
      color: "yellow",
    },
    {
      id: 23,
      name: "orange",
      color: "orange",
    },
    {
      id: 24,
      name: "pineapple",
      color: "yellow",
    },
    {
      id: 25,
      name: "kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <p key={fruit.id}>
            <Card id={fruit.id} name={fruit.name} color={fruit.color} />
          </p>
        );
      })}
    </div>
  );
}
