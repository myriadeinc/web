import React, { Component } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Label,
    ResponsiveContainer,
} from 'recharts'
import _ from 'lodash'
import moment from 'moment'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hashrates: [],
        }
    }

    componentWillMount() {
        this.updateChart()
    }

    updateChart = () => {
        let hashrates = this.getHashrates().map((entry) => {
            return {
                time: new Date(entry.time).getTime(),
                rate: entry.rate,
            }
        })
        this.setState({ hashrates: hashrates })
    }

    getHashrates = () => [
        {
            blockHeight: '0',
            time: '2020-08-11T02:18:18.891Z',
            rate: '0',
        },
        {
            blockHeight: '1',
            time: '2020-08-11T02:18:18.902Z',
            rate: '1000',
        },
        {
            blockHeight: '2',
            time: '2020-08-11T02:18:18.908Z',
            rate: '2000',
        },
        {
            blockHeight: '3',
            time: '2020-08-11T02:18:18.916Z',
            rate: '3000',
        },
        {
            blockHeight: '4',
            time: '2020-08-11T02:18:18.923Z',
            rate: '4000',
        },
        {
            blockHeight: '5',
            time: '2020-08-11T02:18:18.931Z',
            rate: '5000',
        },
        {
            blockHeight: '6',
            time: '2020-08-11T02:18:18.937Z',
            rate: '6000',
        },
        {
            blockHeight: '7',
            time: '2020-08-11T02:18:18.944Z',
            rate: '7000',
        },
        {
            blockHeight: '8',
            time: '2020-08-11T02:18:18.951Z',
            rate: '8000',
        },
        {
            blockHeight: '9',
            time: '2020-08-11T02:18:18.959Z',
            rate: '9000',
        },
        {
            blockHeight: '10',
            time: '2020-08-11T02:18:18.965Z',
            rate: '10000',
        },
        {
            blockHeight: '11',
            time: '2020-08-11T02:18:18.972Z',
            rate: '11000',
        },
        {
            blockHeight: '12',
            time: '2020-08-11T02:18:18.978Z',
            rate: '12000',
        },
        {
            blockHeight: '13',
            time: '2020-08-11T02:18:18.985Z',
            rate: '13000',
        },
        {
            blockHeight: '14',
            time: '2020-08-11T02:18:18.992Z',
            rate: '14000',
        },
        {
            blockHeight: '15',
            time: '2020-08-11T02:18:18.999Z',
            rate: '15000',
        },
        {
            blockHeight: '16',
            time: '2020-08-11T02:18:19.012Z',
            rate: '16000',
        },
        {
            blockHeight: '17',
            time: '2020-08-11T02:18:19.018Z',
            rate: '17000',
        },
        {
            blockHeight: '18',
            time: '2020-08-11T02:18:19.028Z',
            rate: '18000',
        },
        {
            blockHeight: '19',
            time: '2020-08-11T02:18:19.035Z',
            rate: '19000',
        },
        {
            blockHeight: '20',
            time: '2020-08-11T02:18:19.049Z',
            rate: '20000',
        },
        {
            blockHeight: '21',
            time: '2020-08-11T02:18:19.059Z',
            rate: '21000',
        },
        {
            blockHeight: '22',
            time: '2020-08-11T02:18:19.067Z',
            rate: '22000',
        },
        {
            blockHeight: '23',
            time: '2020-08-11T02:18:19.080Z',
            rate: '23000',
        },
        {
            blockHeight: '24',
            time: '2020-08-11T02:18:19.088Z',
            rate: '24000',
        },
        {
            blockHeight: '25',
            time: '2020-08-11T02:18:19.099Z',
            rate: '25000',
        },
        {
            blockHeight: '26',
            time: '2020-08-11T02:18:19.107Z',
            rate: '26000',
        },
        {
            blockHeight: '27',
            time: '2020-08-11T02:18:19.116Z',
            rate: '27000',
        },
        {
            blockHeight: '28',
            time: '2020-08-11T02:18:19.123Z',
            rate: '28000',
        },
        {
            blockHeight: '29',
            time: '2020-08-11T02:18:19.130Z',
            rate: '29000',
        },
        {
            blockHeight: '30',
            time: '2020-08-11T02:18:19.139Z',
            rate: '30000',
        },
        {
            blockHeight: '31',
            time: '2020-08-11T02:18:19.147Z',
            rate: '31000',
        },
        {
            blockHeight: '32',
            time: '2020-08-11T02:18:19.154Z',
            rate: '32000',
        },
        {
            blockHeight: '33',
            time: '2020-08-11T02:18:19.161Z',
            rate: '33000',
        },
        {
            blockHeight: '34',
            time: '2020-08-11T02:18:19.170Z',
            rate: '34000',
        },
        {
            blockHeight: '35',
            time: '2020-08-11T02:18:19.181Z',
            rate: '35000',
        },
        {
            blockHeight: '36',
            time: '2020-08-11T02:18:19.191Z',
            rate: '36000',
        },
        {
            blockHeight: '37',
            time: '2020-08-11T02:18:19.199Z',
            rate: '37000',
        },
        {
            blockHeight: '38',
            time: '2020-08-11T02:18:19.208Z',
            rate: '38000',
        },
        {
            blockHeight: '39',
            time: '2020-08-11T02:18:19.215Z',
            rate: '39000',
        },
        {
            blockHeight: '40',
            time: '2020-08-11T02:18:19.221Z',
            rate: '40000',
        },
        {
            blockHeight: '41',
            time: '2020-08-11T02:18:19.227Z',
            rate: '41000',
        },
        {
            blockHeight: '42',
            time: '2020-08-11T02:18:19.234Z',
            rate: '42000',
        },
        {
            blockHeight: '43',
            time: '2020-08-11T02:18:19.243Z',
            rate: '43000',
        },
        {
            blockHeight: '44',
            time: '2020-08-11T02:18:19.251Z',
            rate: '44000',
        },
        {
            blockHeight: '45',
            time: '2020-08-11T02:18:19.258Z',
            rate: '45000',
        },
        {
            blockHeight: '46',
            time: '2020-08-11T02:18:19.265Z',
            rate: '46000',
        },
        {
            blockHeight: '47',
            time: '2020-08-11T02:18:19.272Z',
            rate: '47000',
        },
        {
            blockHeight: '48',
            time: '2020-08-11T02:18:19.278Z',
            rate: '48000',
        },
        {
            blockHeight: '49',
            time: '2020-08-11T02:18:19.285Z',
            rate: '49000',
        },
    ]

    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.state.hashrates}>
                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            transform: 'translate(0, 10)',
                        }}
                        domain={['auto', 'auto']}
                        tickFormatter={(unixTime) =>
                            moment(unixTime).format('MMM D LT')
                        }
                        type="number"
                        scale="time"
                    />
                    <YAxis
                        dataKey="rate"
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={false}
                        tick={{
                            fontSize: 12,
                        }}
                        domain={[0, 50000]}
                    >
                        <Label
                            value="Hashrate (H/s)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: 'middle', fontSize: 12 }}
                        />
                    </YAxis>
                    <Tooltip
                        contentStyle={{
                            border: 'none',
                            fontSize: 14,
                        }}
                        itemStyle={{ color: '#f07c00' }}
                        labelFormatter={(unixTime) =>
                            moment(unixTime).format('LLLL')
                        }
                    />
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="orange" />
                            <stop offset="100%" stopColor="blue" />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="rate"
                        dot={false}
                        strokeWidth={4}
                        stroke="url(#colorUv)"
                    />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default Chart
