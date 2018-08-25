import React from 'react'
import {PieChart, Pie, Sector, Cell} from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const SimplePieChart = () => (
    <PieChart width={500} height={200} >
        <Pie
            data={data}
            cx={80}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
        >
            {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
        </Pie>
        <Pie
            data={data}
            cx={380}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
        >
            {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
        </Pie>
    </PieChart>
);
export default SimplePieChart