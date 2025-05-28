import { ArcElement, ChartData, Chart as ChartJS, ChartOptions, Legend, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.defaults.font.family = 'Nunito';
ChartJS.defaults.font.size = 14;
ChartJS.register(ArcElement, Tooltip, Legend);

interface LineChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

export default function LineChart({ data, options }: LineChartProps) {
  return <Line data={data} options={options} />;
}
