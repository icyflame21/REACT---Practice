import { Bar } from "./Bar";
export const Progess = () => {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const colors = [
    "orange",
    "green",
    "yellow",
    "red",
    "purple",
    "violet",
    "pink",
  ];
  return (
    <main id="progress">
      <h1>Progress Bar</h1>
      {arr.map((i, index) => (
        <Bar bgcolor={colors[index % 6]} progess={arr[index]} key={index} />
      ))}
    </main>
  );
};
