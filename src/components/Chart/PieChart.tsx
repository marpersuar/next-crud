import { ArcElement, ChartData, Chart as ChartJS, ChartOptions, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.defaults.font.family = 'Nunito';
ChartJS.defaults.font.size = 14;
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
}

export default function PieChart({ data, options }: PieChartProps) {
  return <Pie data={data} options={options} />;
}
