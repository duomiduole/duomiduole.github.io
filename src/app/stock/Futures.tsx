'use client';

// @ts-ignore
import { useRequest } from 'ahooks';
import axios from 'axios';
import { red, green } from '@/constants';
import { Table, Tag } from 'antd';
import SubTitle from './SubTitle';

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


const imApi = '//futsseapi.eastmoney.com/list/variety/220/7';
const ifApi = '//futsseapi.eastmoney.com/list/variety/220/2';
const icApi = '//futsseapi.eastmoney.com/list/variety/220/1';
const ihApi = '//futsseapi.eastmoney.com/list/variety/220/3';


const Index = () => {

  const params = {
    orderBy: 'dm',
    sort: 'asc',
    pageSize: 20,
    pageIndex: 0
  }

  const { data: indexData } = useRequest(() => axios.get(quotaApi, { params: 指数 }));

  const indexArray = Object.values(indexData?.data?.data?.diff || {});
  const cur_000300 = indexArray?.find?.(i => i.f12 === '000300')?.f2;
  const cur_000050 = indexArray?.find?.(i => i.f12 === '000016')?.f2;
  const cur_000500 = indexArray?.find?.(i => i.f12 === '000905')?.f2;
  const cur_001000 = indexArray?.find?.(i => i.f12 === '000852')?.f2;

  const { data: imData, loading: im_loading } = useRequest(() => axios.get(imApi, { params }));
  const { data: icData, loading: ic_loading } = useRequest(() => axios.get(icApi, { params }));
  const { data: ifData, loading: if_loading } = useRequest(() => axios.get(ifApi, { params }));
  const { data: ihData, loading: ih_loading } = useRequest(() => axios.get(ihApi, { params }));

  const getColumns = (cur) => {

    return [
      {
        title: '名称',
        dataIndex: 'name',
        width: 120,
      },
      {
        title: '最新价',
        dataIndex: 'p',
        width: 100,
      },
      {
        title: '涨跌幅',
        width: 100,
        dataIndex: 'zde',
        render: (text, record) => {
          return <Tag color={record?.zde === 0 ? '#ccc' : record?.zde > 0 ? red : green}>
            <span style={{ marginRight: 4 }}>{record?.zde}</span>
            <span>({record?.zdf}%)</span>
          </Tag>
        }
      },
      {
        title: '期现差',
        width: 100,
        dataIndex: 'diff',
        render: (text, record) => {
          const value = (record?.p - cur / 100).toFixed(2);
          return <Tag
            color={value === '0.00' ? '#ccc' : +value > 0 ? red : green}
          >
            {value}
          </Tag>
        }
      },
    ]
  };


  return <div>
    <SubTitle>股指期货</SubTitle>
    <div>
      <div>
        IM
      </div>
      <Table
        rowKey="name"
        loading={im_loading}
        columns={getColumns(cur_001000)}
        dataSource={imData?.data?.list?.filter(i => {
          return !['IMM', 'IMS', 'IMS1', 'IMS2', 'IMM0', 'IMM1', 'IMM2'].includes(i.dm)
        })}
        pagination={false}
        size="small"
        bordered
      />
    </div>
    <div>
      <div>
        IC
      </div>
      <Table
        rowKey="name"
        loading={ic_loading}
        columns={getColumns(cur_000500)}
        dataSource={icData?.data?.list?.filter(i => {
          return !['ICM', 'ICS', 'ICS1', 'ICS2', 'ICM0', 'ICM1', 'ICM2'].includes(i.dm)
        })}
        pagination={false}
        size="small"
        bordered
      />
    </div>
    <div>
      <div>
        IF
      </div>
      <Table
        rowKey="name"
        loading={if_loading}
        columns={getColumns(cur_000300)}
        dataSource={ifData?.data?.list?.filter(i => {
          return !['IFM', 'IFS', 'IFS1', 'IFS2', 'IFM0', 'IFM1', 'IFM2'].includes(i.dm)
        })}
        pagination={false}
        size="small"
        bordered
      />
    </div>
    <div>
      <div>
        IH
      </div>
      <Table
        rowKey="name"
        loading={ih_loading}
        columns={getColumns(cur_000050)}
        dataSource={ihData?.data?.list?.filter(i => {
          return !['IHM', 'IHS', 'IHS1', 'IHS2', 'IHM0', 'IHM1', 'IHM2'].includes(i.dm)
        })}
        pagination={false}
        size="small"
        bordered
      />
    </div>
  </div>
}

export default Index;
