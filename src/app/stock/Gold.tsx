'use client';

import React from 'react';
import SubTitle from './SubTitle';
import { useRequest } from 'ahooks';
import axios from 'axios';
import { red, green } from '@/constants';
import { Table, Tag } from 'antd';
import moment from 'moment';

// 行情中心
const goldApi = 'https://4.push2.eastmoney.com/api/qt/clist/get?pn=1&pz=100&po=1&np=1&fltt=2&invt=2&dect=1&wbp2u=4712365547389930|0|1|0|web&fid=f14&fs=m:118&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f28,f11,f62,f128,f136,f115,f152,f133,f124';

const showData = ['AU9999', 'AU9995', 'iAu999', 'iAu995', 'SHAU', 'AG9999', 'AG999', 'SHAG'];

const Index = () => {
  const { data: shData, loading: shLoading } = useRequest(() => axios.get(goldApi));

  const columns = [
    {
      title: '品种',
      dataIndex: 'f14',
    },
    {
      title: '最新价',
      dataIndex: 'f2',
      render: (text, record) => {
        return <Tag color={record?.f4 > 0 ? red : green}>{text}</Tag>
      }
    },
    {
      title: '涨跌额',
      dataIndex: 'f4',
      render: text => {
        return <Tag color={text > 0 ? red : green}>{text}</Tag>
      }
    },
    {
      title: '更新时间',
      dataIndex: 'f124',
      render: text => {
        return moment.unix(text)?.format('MM-DD')
      }
    },
  ];

  return <div>
    <SubTitle>上海黄金现货</SubTitle>
    <div>
      <Table
        rowKey="symbol"
        loading={shLoading}
        columns={columns}
        dataSource={shData?.data?.data?.diff?.filter?.(i => {
          return showData?.includes(i.f12);
        }).sort((a, b) => {
          return showData?.indexOf(a.f12) - showData?.indexOf?.(b.f12)
        }) || []}
        pagination={false}
        size="small"
        bordered
      />
    </div>
  </div>
}

export default Index;
