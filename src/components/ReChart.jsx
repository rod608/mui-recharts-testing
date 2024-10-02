import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Electric', count: 50 },
  { name: 'Fire', count: 60 },
  { name: 'Water', count: 80 },
  { name: 'Grass', count: 40 },
  { name: 'Psychic', count: 30 },
  { name: 'Rock', count: 20 },
  { name: 'Ground', count: 25 },
  { name: 'Ice', count: 15 },
  { name: 'Dragon', count: 10 },
  { name: 'Fairy', count: 5 },
];

const PokemonTypeChart = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default PokemonTypeChart;