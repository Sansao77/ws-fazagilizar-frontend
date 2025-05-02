import { BarChart, PieChart, ResponsiveChartContainer, pieArcLabelClasses } from "@mui/x-charts"
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from "../../mock/stores-data"
import './statistics.scss'
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const chartSetting = {
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
};

const data = [
    {id: 1, value: 10, label: 'FEIRA'},
    {id: 2, value: 20, label: 'LOJA ONLINE'},
    {id: 3, value: 30, label: 'LOJA FÍSICA 1'},
    {id: 4, value: 40, label: 'LOJA FÍSICA 2'}
]

const colors = ['#20B9AE', '#3E70C9', '#A567E2', '#43B968'];

const Statistics = () =>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <div className="charts">
            <section style={{ height: "300px", width: "100%" }}>
                <BarChart
                colors={colors}
                dataset={dataset}
                xAxis={[{scaleType: 'band', dataKey: 'month'}]}
                series={[
                    {dataKey: 'feira', label: 'FEIRA', valueFormatter},
                    {dataKey: 'loja_online', label: 'LOJA ONLINE', valueFormatter},
                    {dataKey: 'loja_fisica_1', label: 'LOJA FÍSICA 1', valueFormatter},
                    {dataKey: 'loja_fisica_2', label: 'LOJA FÍSICA 2', valueFormatter},
                ]}
                slotProps={{ legend: { hidden: true } }}
                borderRadius={50}
                {...chartSetting}
                />
            </section>

            <span className="divider"></span>

            <section className="pie-chart-align">
                <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center">
                    <PieChart
                    colors={colors}
                    series={[
                        {
                            data,
                            highlightScope: {highlight: 'item', fade: 'global'},
                            innerRadius: 60,
                        },
                    ]}
                    slotProps={{
                        legend:{
                            hidden: true,
                        }
                    }}
                    />

                    <Stack spacing={1} ml={4}>
                        {data.map((item, index) => (
                            <Box key={item.id} display="flex" alignItems="center">
                            <Box
                                sx={{
                                width: 16,
                                height: 16,
                                backgroundColor: colors[index],
                                mr: 1,
                                }}
                            />
                            <Typography color="black" variant="body2">{item.label}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                <span>R$ 850.000,00</span>
            </section>
        </div>
    )
}

export default Statistics