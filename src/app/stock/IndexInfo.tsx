'use client';

import { Row, Col, Spin } from 'antd';
import axios from 'axios';
import { useRequest } from 'ahooks';
import { green, red } from '@/constants';

const fieldMap = {
  f12: '代码',
  f14: '名称',
  f2: '最新价',
  f4: '涨跌额',
  f3: '涨跌幅',
  f5: '成交量',
  f6: '成交额',
  f18: '昨收',
  f17: '今开',
  f15: '最高',
  f16: '最低'
}

// 数据中心
const dataApi = 'https://datacenter-web.eastmoney.com/api/data/v1/get';

// 行情中心
const quotaApi = 'https://27.push2.eastmoney.com/api/qt/clist/get';

// https://quote.eastmoney.com/center/hszs.html;
const 指数 = {
  pn: 1,
  pz: 50,
  fs: 'b:MK0010',
  fields: 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152',
  // _: 1673625023733,
  // cb: 'jQuery1124031274261486155486_1673625023732',
  // po: 1,
  // np: 1,
  // ut: 'bd1d9ddb04089700cf9c27f6f7426281',
  // fltt: 2,
  // invt: 2,
  // wbp2u: '|0|0|0|web',
  // fid: '',
}

const indexArr = [
  '上证指数',
  '沪深300',
  '中证500',
  '中证1000',
  '深证成指',
  '北证50',
  '科创50',
  '创业板指'
]

const Index: FC<{
  date: string;
}> = ({
  date,
}) => {

    const { data, error, loading } = useRequest(() => axios.get(quotaApi, { params: 指数 }));

    const dataObj = data?.data?.data?.diff;
    const dataArr = Object.values(dataObj || {});

    return <div>
      <Spin spinning={loading} >
        <Row
          gutter={5}
          style={{
            textAlign: 'center'
          }}
        >
          {
            indexArr?.map(i => {
              const target = dataArr?.find(d => d.f14 === i);
              return <Col key={i} span={6}>
                <div>{i}</div>
                <div
                  style={{ color: target?.f3 > 0 ? red : green }}
                >
                  <div>
                    {(target?.f2 / 100).toFixed(2)}
                  </div>
                  <div>
                    <span style={{ fontSize: '14px' }}>{(target?.f3 / 100)?.toFixed(2)}%</span>
                  </div>
                </div>
              </Col>
            })
          }
        </Row>
      </Spin>
    </div>
  }

export default Index;

