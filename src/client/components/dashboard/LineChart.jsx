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
import { MinerConsumer } from '../../pages/Dashboard.jsx'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hashrates: [],
        }
    }

    render() {
        return (
            <MinerConsumer>
                {(miner) => (
                    <ResponsiveContainer>
                        <LineChart data={miner.historical_hashrates}>
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
                                    style={{
                                        textAnchor: 'middle',
                                        fontSize: 12,
                                    }}
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
                )}
            </MinerConsumer>
        )
    }
}

export default Chart
