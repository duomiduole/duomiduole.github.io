'use client';
import React, { FC } from 'react';
import { Spin } from 'antd';
import SubTitle from './SubTitle';
import { useRequest } from 'ahooks';
import axios from 'axios';
import { yi } from '@/constants';

const dataApi = 'https://push2.eastmoney.com/api/qt/ulist.np/get';
// 资金流向
// https://data.eastmoney.com/zjlx/detail.html
const 成交额 = {
  fltt: 2,
  secids: '1.000001,0.399001',
  fields: 'f1,f2,f3,f4,f6,f12,f13,f104,f105,f106',
  // ut: 'b2884a393a59ad64002292a3e90d46a5',
  // cb: 'jQuery1123025602337441479106_1673923716769',
  // _: 1673923716771
}

const Index: FC = () => {
  const { data, error, loading } = useRequest(() => axios.get(dataApi, { params: 成交额 }));

  const hu = (data?.data?.data?.diff?.[0]?.f6 / yi)?.toFixed?.(2);
  const shen = (data?.data?.data?.diff?.[1]?.f6 / yi)?.toFixed?.(2);
  const total = ((data?.data?.data?.diff?.[0]?.f6 + data?.data?.data?.diff?.[1]?.f6) / yi)?.toFixed?.(2);

  return <div>
    <Spin
      spinning={loading}
    >
      <SubTitle>成交额</SubTitle>
      <div>
        <span style={{ marginRight: 10 }}>
          <span>
            沪:
          </span>
          <span style={{ margin: '0 5px' }}>{hu}</span>
          <span>(亿)</span>
        </span>
        <span style={{ marginRight: 10 }}>
          <span>
            深:
          </span>
          <span style={{ margin: '0 5px' }}>{shen}</span>
          <span>(亿)</span>
        </span>
        <span>
          <span>
            共:
          </span>
          <span style={{ margin: '0 5px' }}>{total}</span>
          <span>(亿)</span>
        </span>
      </div>
    </Spin>
  </div>
}

export default Index;
