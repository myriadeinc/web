import React, { Component } from 'react'
import { ResponsiveLine } from '@nivo/line';

import _ from 'lodash';

class LineChart extends Component {

    constructor(props){
        super(props);
        this.state = {
            hashrates: [],
            credits: [],
            shares: [],
        }
    }

    componentWillMount(){
        let hashrates = _.map(this.props.data.hashrates, (h) => {
            return {
                x: h.time,
                y: h.rate
            }
        })
        let credits = _.map(this.props.data.credits, (c) => {
            return {
                x: c.time,
                y: c.credit
            }
        })
        let shares = _.map(this.props.data.shares, (s) => {
            return {
                x: s.time,
                y: s.share
            }
        })
        return this.setState({
            hashrates,
            credits,
            shares,
        })
    }

    render() {
        return (
            <ResponsiveLine
                data={[
                    {
                        id: 'hashrates',
                        color: "hsl(239, 70%, 50%)",
                        data: this.state.hashrates,
                    },
                    {
                        id: 'credits',
                        color: "hsl(342, 70%, 50%)",
                        data: this.state.credits,
                    },
                    {
                        id: 'shares',
                        color: "hsl(230, 70%, 50%)",
                        data: this.state.shares,
                    }
                ]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Hashrate/Credits/Shares',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'oranges' }}
                lineWidth={3}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={0.9}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }
}

export default LineChart;