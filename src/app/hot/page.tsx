import Nav from '@/components/nav';
import moment from 'moment';

import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import Item from './Item';
import GithubItem from './GithubItem';

const pageLayout = {
    xs: {
        span: 24,
    },
    sm: {
        span: 24,
    },
    md: {
        span: 6,
    },
}

const weibo = require(`../../../raw/weibo/${moment().format('YYYY-MM-DD')}.json`);
const toutiao = require(`../../../raw/toutiao/${moment().format('YYYY-MM-DD')}.json`);
const zhihu = require(`../../../raw/zhihu/${moment().format('YYYY-MM-DD')}.json`);
const baidu = require(`../../../raw/baidu/${moment().format('YYYY-MM-DD')}.json`);
const douyin = require(`../../../raw/douyin/${moment().format('YYYY-MM-DD')}.json`);
const kuaishou = require(`../../../raw/kuaishou/${moment().format('YYYY-MM-DD')}.json`);

const Today: FC = () => {


    return <div
    >
        <Nav />
        <div
            style={{ padding: 20 }}

        >
            <Row
                gutter={20}
            >
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="微博热搜"
                        loading={false}
                        data={weibo}
                    />
                </Col>
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="头条热搜"
                        loading={false}
                        data={toutiao}
                    />
                </Col>
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="百度热搜"
                        loading={false}
                        data={baidu}
                    />
                </Col>
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="知乎热搜"
                        loading={false}
                        data={zhihu}
                    />
                </Col>
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="抖音热榜"
                        loading={false}
                        data={douyin}
                    />
                </Col>
                <Col
                    {...pageLayout}
                >
                    <Item
                        title="快手热榜"
                        loading={false}
                        data={kuaishou}
                    />
                </Col>
            </Row>
        </div>
    </div>
}

export default Today;

