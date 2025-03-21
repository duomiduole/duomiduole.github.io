'use client'

import { Row, Col } from 'antd';
import Nav from '@/components/nav';

const navData = require('./data.json');

const Index = () => {
    return <div>
        <Nav />
        <div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {navData?.map?.((category, index) => {
                return <div key={index} style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>
                        {category?.category}
                    </div>
                    <Row gutter={[16, 16]}>
                        {category?.items?.map((item, idx) => {
                            return <Col xs={12} sm={8} md={6} lg={4} xl={4} key={idx}>
                                <a href={item?.href} style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    padding: '8px 12px',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '8px',
                                    transition: 'background-color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src={item?.icon} alt={item?.title} style={{ width: '32px', height: '32px', objectFit: 'cover', display: item?.icon ? 'block' : 'none' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{item?.title}</span>
                                    </div>
                                    <div style={{
                                        marginTop: '8px',
                                        fontSize: '11px',
                                        color: '#666',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        <p title={item?.desc}>{item?.desc}</p>
                                    </div>
                                </a>
                            </Col>
                        })}
                    </Row>
                </div>
            })}
        </div>
    </div>
}

export default Index;