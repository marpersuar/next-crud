import { ArcElement, ChartData, Chart as ChartJS, ChartOptions, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.defaults.font.family = 'Nunito';
ChartJS.defaults.font.size = 14;
ChartJS.register(ArcElement, Tooltip, Legend);

interface BarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

export default function BarChart({ data, options }: BarChartProps) {
  return <Bar data={data} options={options} />;
}
