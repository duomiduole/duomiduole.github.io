
'use client'

import { useEffect, useState } from 'react';
import { Button, Space, Card } from 'antd';
import Nav from '@/components/nav';
import { navData } from '@/constants';


const Index = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(navData);
    }, []);

    return (<div>
        <Nav />
        <div>
            {data.map((category, index) => (
                <div key={index} className="nav-category">
                    <h2>{category.category}</h2>
                    <Space className="nav-space">
                        {category.items.map((item, idx) => (
                            <Card 
                                key={idx}
                                hoverable
                                size="small"
                            >
                                <div
                                    style={{
                                        
                                    }}
                                    onClick={() => {
                                        open(item.href)
                                    }}
                                    type="link"
                                    size="small"
                                >
                                    <div>
                                        <span
                                            style={{
                                                width: 14,
                                                height: 14,
                                            }}
                                        >{item.icon}</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <div 
                                        style={{
                                            color: '#666',
                                            fontSize: 12,
                                        }}
                                    >{item.desc}</div>
                                </div>
                            </Card>
                        ))}
                    </Space>
                </div>
            ))}
        </div>
    </div>);
}

export default Index;