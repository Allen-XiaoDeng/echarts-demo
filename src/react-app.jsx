import React, {useState} from 'react'
import {ReactEcharts} from './react-echarts'

export function ReactApp() {
  const [option, setOption] = useState({
                                         title: {
                                           show: true,
                                           text: 'bug数',
                                           right: 20,
                                         },
                                         legend: {
                                           data: ['bug数']
                                         },
                                         xAxis: {
                                           type: 'category',
                                           data: ['2022-2-1', '2022-2-2']
                                         },
                                         yAxis: {
                                           type: 'value'
                                         },
                                         tooltip: {
                                           show: true
                                         },
                                         series: [
                                           {
                                             lineStyle: {
                                               color: 'blue'
                                             },
                                             name: '金额',
                                             data: [1, 2],
                                             type: 'line'
                                           }]
                                       })
  const [loading, setLoading] = useState(false)
  const onClick = () => {
    if (loading) {return}
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOption({
                  xAxis: {
                    data: ['2022-2-1', '2022-2-2', '2022-2-3']
                  },
                  series: [{
                    data: [1, 2, 3]
                  }]
                })
    }, 3000)
  }
  return (
    <div>
      <h1>我来在 React 里面使用 Echarts</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>点击加载更多</button>
    </div>
  )
}