import ReactApexChart from 'react-apexcharts';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// utils
import numeral from 'numeral';


// ----------------------------------------------------------------------

type Props = {
  title: string;
  iconImage: string;
  total: number;
  percent: number;
  chartColor?: string;
  chartData: number[];
};

export default function AppWidgetSummary({ title, percent, total, chartColor, chartData, iconImage }: Props) {
  const theme = useTheme();

  const chartOptions = {
    colors: ['#FFA500', '#FFA500', '#FFA500'],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '48%', borderRadius: 1 } },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName: number | string) => numeral(seriesName).format(),
        title: {
          formatter: (seriesName: number | string) => '',
        },
      },
      marker: { show: false },
    },
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1, pt: 3 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <div className='d-flex justify-content-baseline'>
          <Typography variant="h6">{numeral(total).format()}</Typography>
          <ReactApexChart
            style={{ marginLeft: '10px' }}
            type="line"
            series={[{ data: chartData }]}
            options={chartOptions}
            width={60}
            height={26}
          />

        </div>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 3 }}>
        <div className="dropdown" style={{ marginLeft: '3rem' }}>
          <Stack direction="row" style={{ marginLeft: '1rem' }}  spacing={1} sx={{ mt: 0, mb: 1 }}>
            <img src={`${iconImage}`} alt='' /><br />
          </Stack>
          <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            today
          </button>
        </div>
      </Box>
    </Card>
  );
}
