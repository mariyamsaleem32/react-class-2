import { Card, Col, Row } from 'antd';

const Appcard = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="greeting 1" bordered={false}>
      <h1>hey</h1>
      <p>how are you</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="greeting 2" bordered={false}>
     <h1>hi</h1>
     <p>how is going</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="greeeting 3" bordered={false}>
    <h1>hello</h1>
    <p>how are you doing</p>
      </Card>
    </Col>
  </Row>
);
export default Appcard;