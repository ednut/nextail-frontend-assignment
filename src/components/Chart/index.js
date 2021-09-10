import ChartStyle from './chartStyle';
import { Bar } from 'react-chartjs-2';

const Chart = ({ product }) => {
  const data = {
    labels: Object.keys(product),
    datasets: [
      {
        label: '',
        data: Object.values(product),
        backgroundColor: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)'
        ],
        borderColor: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return (
    <ChartStyle>
      <Bar data={data} options={options} />
    </ChartStyle>
  );
};

export default Chart;
