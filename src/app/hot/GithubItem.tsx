import React from 'react';
import { Card, Button, Space } from 'antd';
import { StarOutlined, ForkOutlined } from '@ant-design/icons';

const colors = {
  'C': '#555555',
  'C#': '#178600',
  'C++': '#f34b7d',
  'Dart': '#00B4AB',
  'Go': '#00ADD8',
  'HTML': '#e34c26',
  'Java': '#b07219',
  'JavaScript': '#f1e05a',
  'Jupyter Notebook': '#DA5B0B',
  'Python': '#3572A5',
  'Ruby': '#701516',
  'Rust': '#dea584',
  'Shell': '#89e051',
  'Swift': '#F05138',
  'TypeScript': '#3178c6',
}

const Index = ({
  loading,
  data,
  title,
}) => {

  return <Card
    bodyStyle={{
      height: expand ? 'calc(100vh - 160px)' : 0,
      padding: expand ? 12 : 0,
      overflow: 'auto',
    }}
    size='small'
    style={{
      marginBottom: 10,
    }}
    title={title}
    loading={loading}
    // extra={<Button type="link" size="small" onClick={() => setExpand(!expand)}>{expand ? '收起' : '展开'}</Button>}
  >
    {
      data?.result?.map?.((i, index) => {
        return <div
          style={{
            borderBottom: '1px dashed #ccc',
            padding: '10px 0',
            cursor: 'pointer',
          }}
          onClick={() => {
            open(`https://github.com/${i.repo}`);
          }}
        >
          <div>
            <Space>
              <b>
                {index + 1}
              </b>
              <a>
                <b>
                  {i.repo}
                </b>
              </a>
            </Space>
          </div>
          <div style={{ textAlign: 'right', color: '#ccc' }}>{i.star_add}</div>
          <div>
            <span>{i.desc}</span>
          </div>
          <div>
            <Space>
              {i.code_language && <Space>
                <div>
                  <div
                    style={{
                      height: 12,
                      width: 12,
                      borderRadius: 12,
                      background: colors[i.code_language] || '#ccc',
                    }}
                  >
                  </div>
                </div>
                <div>
                  {i.code_language}
                </div>
              </Space>}
              <div>
                <StarOutlined />
                <span>
                  {i.star_all}
                </span>
              </div>
              <div>
                <ForkOutlined />
                <span>
                  {i.fork}
                </span>
              </div>
            </Space>
          </div>
        </div>
      })
    }
  </Card>
}

export default Index;
