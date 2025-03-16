'use client';
import React from 'react';
import ReactCharts from 'echarts-for-react';
import { useRequest } from 'ahooks';
import axios from 'axios';
import moment from 'moment';
import SubTitle from './SubTitle';

// https://data.eastmoney.com/gzfx/

const peColor = '#2eade6';
const hs300Color = '#df4427';

const Index = () => {

  const dataApi = '//datacenter-web.eastmoney.com/api/data/v1/get';
  const params = {
    reportName: 'RPT_VALUEMARKET',
    columns: 'ALL',
    sortColumns: 'TRADE_DATE',
    pageNumber: 1,
    sortTypes: 1,
    filter: `(TRADE_MARKET_CODE="000300")(TRADE_DATE>'${moment().subtract(2, 'y').format('YYYY-MM-DD')}')`,
    // quoteColumns: null,
    // source: 'WEB',
    // client: 'WEB',
    // _: 1674988478164
  }


  const { data: dataSource, error, loading } = useRequest(() => axios.get(dataApi, {
    params
  }));

  const data = dataSource?.data?.result?.data || [];

  const getChartOptions = () => {

    const option = {
      // title: {
      //   top: -2,
      //   left: 'center',
      //   text: '市场估值走势',
      //   textStyle: {
      //     color: '#fff',
      //     fontSize: 12,
      //   },
      // },
      grid: {
        left: 30,
        right: 40,
        top: 10,
        bottom: 40,
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 10,
        },
        axisLine: {
          lineStyle: {
            color: '#000',
          }
        },
        data: data?.map(i => moment(i.TRADE_DATE, 'YYYY-MM-DD HH:mm:ss')?.format('YYYY-MM-DD')),
      },
      yAxis: [
        {
          type: 'value',
          // name: '两市平均市盈率(左)',
          scale: true,
          nameTextStyle: {
            align: 'left'
          },
          axisLine: {
            lineStyle: {
              color: peColor,
            }
          },
        },
        {
          type: 'value',
          // name: '沪深300(右)',
          scale: true,
          nameTextStyle: {
            align: 'right'
          },
          axisLine: {
            lineStyle: {
              color: hs300Color,
            }
          },
        },
      ],

      series: [
        {
          data: data?.map(i => (i.PE_TTM_AVG).toFixed(2)),
          type: 'line',
          name: '两市平均市盈率',
          yAxisIndex: 0,
          color: peColor,
          symbol: 'none',
          lineStyle: {
            width: 1,
          }
        },
        {
          data: data?.map(i => (i.CLOSE_PRICE).toFixed(2)),
          type: 'line',
          name: '沪深300',
          yAxisIndex: 1,
          color: hs300Color,
          symbol: 'none',
          lineStyle: {
            width: 1,
          }
        },
      ],
      legend: {
        bottom: 0,
        textStyle: {
          color: '#000',
        }
      },
    };

    return option;
  }

  return <div>
    <SubTitle>市场估值走势</SubTitle>
    <ReactCharts
      style={{
        height: 200,
      }}
      option={getChartOptions()}
    />
  </div>
}

export default Index;
