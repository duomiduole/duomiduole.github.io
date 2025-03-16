// filepath: /workspaces/duomiduole.github.io/src/components/nav/index.tsx
'use client'

import { getPathName } from '@/utils';
import { Button, Space } from 'antd';
import './index.css';

const Index = () => {
    return (
        <div className="nav-container">
            <Space className="nav-space">
                <Button
                    className="nav-button"
                    onClick={() => {
                        open(getPathName.home())
                    }}
                    type="link"
                    size="small"
                >首页</Button>
                <Button
                    className="nav-button"
                    onClick={() => {
                        open(getPathName.nav())
                    }}
                    type="link"
                    size="small"
                >热点导航</Button>
                <Button
                    className="nav-button"
                    onClick={() => {
                        open(getPathName.hot())
                    }}
                    type="link"
                    size="small"
                >今日热搜</Button>
                <Button
                    className="nav-button"
                    onClick={() => {
                        open(getPathName.stock())
                    }}
                    type="link"
                    size="small"
                >股市概览</Button>
                <Button
                    className="nav-button"
                    onClick={() => {
                        open(getPathName.cctv())
                    }}
                    type="link"
                    size="small"
                >新闻联播</Button>
            </Space>
        </div>
    );
}

export default Index;