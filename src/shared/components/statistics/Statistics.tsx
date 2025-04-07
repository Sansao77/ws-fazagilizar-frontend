import { BarChart, PieChart, pieArcLabelClasses } from "@mui/x-charts"
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from "../../mock/stores-data"
import './statistics.scss'

const chartSetting = {
    width: 650,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
};

//const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

/*const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};*/

const colors = ['#20B9AE', '#3E70C9', '#A567E2', '#43B968'];

const Statistics = () =>{
    return (
        <div className="charts">
            <section>
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
                <PieChart
                colors={colors}
                width={450}
                height={200}
                slotProps={{ legend: { 
                    
                 } }}
                series={[
                    {
                        highlightScope: {highlight: 'item', fade: 'global'},
                        innerRadius: 60,
                        data:[
                        {id: 1, value: 10, label: 'FEIRA'},
                        {id: 2, value: 20, label: 'LOJA ONLINE'},
                        {id: 3, value: 30, label: 'LOJA FÍSICA 1'},
                        {id: 4, value: 40, label: 'LOJA FÍSICA 2'}
                        ],
                        //arcLabel: getArcLabel,
                    }
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]:{
                        fill: 'white',
                        fontSize: 12
                    }
                }}
                />

                <span>R$ 850.000,00</span>
            </section>
        </div>
    )
}

export default Statistics