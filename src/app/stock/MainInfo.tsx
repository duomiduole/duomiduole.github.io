'use client';
import React from 'react';
import ReactCharts from 'echarts-for-react';
import { useRequest } from 'ahooks';
import axios from 'axios';
import { red, green } from '@/constants';

// https://quote.eastmoney.com/ztb/?from=center
// https://push2ex.eastmoney.com/getTopicZDFenBu?ut=7eea3edcaed734bea9cbfc24409ed989&dpt=wz.ztzt

const Index = () => {

  const dataApi = 'https://push2ex.eastmoney.com/getTopicZDFenBu?ut=7eea3edcaed734bea9cbfc24409ed989&dpt=wz.ztzt';

  const colors = [
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    '#ccc',
    green,
    green,
    green,
    green,
    green,
    green,
    green,
    green,
    green,
    green,
    green,
  ]

  const { data: dataSource, error, loading } = useRequest(() => axios.get(dataApi));

  const data = dataSource?.data?.data?.fenbu || [];

  let leftData = new Array(11).fill(0);
  leftData = leftData?.map((i, index) => {
    const target = data?.find?.(d => {
      return Object.keys(d)[0] * 1 === index + 1;
    });
    return target?.[Object.keys(target)[0]];
  })?.reverse?.() || [];

  let rightData = new Array(11).fill(0);
  rightData = rightData?.map((i, index) => {
    const target = data?.find?.(d => {
      return Object.keys(d)[0] * -1 === index + 1;
    });
    return target?.[Object.keys(target)[0]];
  }) || [];

  let flatData = data?.find?.(i => Object.keys(i)[0] == 0);
  flatData = flatData?.[0];

  const up = leftData?.reduce?.((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0)

  const down = rightData?.reduce?.((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0)

  const upRatio = up / (up + down + flatData) * 100 + '%';
  const downRatio = down / (up + down + flatData) * 100 + '%';
  const flatRatio = flatData / (up + down + flatData) * 100 + '%';

  const getChartOptions = () => {

    const option = {
      grid: {
        left: 10,
        right: 0,
        top: 30,
        bottom: 26,
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 10,
          interval: false,
          rotate: 45,
          color: (c, index) => {
            return colors[index];
          }
        },
        data: [
          '涨停',
          '10~9',
          '9~8',
          '8~7',
          '7~6',
          '6～5',
          '5~4',
          '4～3',
          '3~2',
          '2~1',
          '1~0',
          '平板',
          '0~1',
          '1~2',
          '2~3',
          '3~4',
          '4~5',
          '5~6',
          '6~7',
          '7~8',
          '8~9',
          '9~10',
          '跌停'
        ]
      },
      yAxis: {
        type: 'value',
        // type: 'log',
        // logBase: 5000,
        show: false,
      },
      series: [
        {
          data: [...leftData, flatData, ...rightData]?.map((i, index) => {
            return {
              value: i,
              itemStyle: {
                color: colors[index],
              },
              label: {
                color: colors[index],
              },
            }
          }),
          type: 'bar',
          label: {
            show: true,
            position: 'top',
            fontSize: '10px',
          },
        }
      ]
    };

    return option;
  }

  return <div>
    <ReactCharts
      style={{
        height: 200,
      }}
      option={getChartOptions()}
    />
    <div
      style={{
        marginTop: 5,
        lineHeight: '10px',
      }}
    >
      <div
        style={{
          width: upRatio,
          borderRadius: 5,
          height: '10px',
          background: red,
          display: 'inline-block'
        }}
      ></div>
      <div
        style={{
          width: flatRatio,
          borderRadius: 5,
          height: '10px',
          background: '#ccc',
          display: 'inline-block'

        }}
      ></div>
      <div
        style={{
          width: downRatio,
          borderRadius: 5,
          background: green,
          height: '10px',
          display: 'inline-block'
        }}
      ></div>
    </div>
    <div>
      <div
        style={{
          display: 'inline-block',
          width: '50%',
          color: red,
          fontSize: '12px',
        }}
      >
        涨：{up}
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'right',
          color: green,
          fontSize: '12px',
        }}
      >
        跌：{down}
      </div>
    </div>
  </div>
}

export default Index;
