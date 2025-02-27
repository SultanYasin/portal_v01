import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';


export const desktopOS = [
  {
    label: 'Windows',
    value: 72.72,
  },
  {
    label: 'OS X',
    value: 16.38,
  },
  {
    label: 'Linux',
    value: 3.83,
  },
  {
    label: 'Chrome OS',
    value: 2.42,
  },
  {
    label: 'Other',
    value: 4.65,
  },
];

export const mobileOS = [
  {
    label: 'Android',
    value: 70.48,
  },
  {
    label: 'iOS',
    value: 28.8,
  },
  {
    label: 'Other',
    value: 0.71,
  },
];

export const platforms = [
  {
    label: 'Mobile',
    value: 59.12,
  },
  {
    label: 'Desktop',
    value: 40.88,
  },
];

const normalize = (v: number, v2: number) =>
  Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
    value: normalize(v.value, platforms[0].value),
  })),
  ...desktopOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;

export default function BasicBars() {
    const palette = ['lightcoral', 'slateblue'];

    const colorPerItem = [
      { ...platforms[0], color: 'orange' },
      { ...platforms[1], color: 'gray' },
    ];
  return (
    <Box display={'flex'} minHeight={'80vh'} m={5}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={800}
        height={700}
      />

      <Stack direction="column" width="100%" textAlign="center" spacing={2}>
        <Box flexGrow={1}>
          <Typography>Default</Typography>
          <PieChart
            series={[
              {
                data: platforms,
              },
            ]}
            {...pieParams}
          />
        </Box>
        <Box flexGrow={1}>
          <Typography>Palette</Typography>
          <PieChart
            colors={palette}
            series={[
              {
                data: platforms,
              },
            ]}
            {...pieParams}
          />
        </Box>
        <Box flexGrow={1}>
         
          
        </Box>
      </Stack>
    </Box>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};


/* 

import { PieChart } from '@mui/x-charts/PieChart';

<PieChart
  series={[
    {
      data: [ ... ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>
*/