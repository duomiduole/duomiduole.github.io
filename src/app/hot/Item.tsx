'use client';

import { useState } from 'react';

import { Card, Button } from 'antd'

const indexStyle = {
    display: 'inline-block',
    width: 26,
    textAlign: 'right',
    marginRight: 5
}

const Index = ({
    loading,
    data,
    title,
}) => {

    const [expand, setExpand] = useState(true);
    // const expand = true;

    return <Card
        hoverable
        styles={{
            body: {

                height: expand ? 'calc(100vh - 160px)' : 0,
                padding: expand ? 12 : 0,
                overflow: 'auto',
            }
        }}
        size='small'
        style={{
            marginBottom: 10,
        }}
        title={title}
        loading={loading}
        extra={<Button type="link" size="small" onClick={() => setExpand(!expand)}>{expand ? '收起' : '展开'}</Button>}
    >
        {
            data?.map?.((i, index) => {
                return <div>
                    <b
                        style={indexStyle}
                    >
                        {index + 1}
                    </b>
                    <a
                        target="_blank"
                        href={i.href}
                    >
                        {i.title}
                    </a>
                </div>
            })
        }
    </Card>
}

export default Index;
