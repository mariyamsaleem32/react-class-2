import { Card, Col, Row } from 'antd';
import Appcarousel from "../components/carousel"

const Appcard = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="option 1" bordered={false}>
      <Appcarousel/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="option 2" bordered={false}>
      <Appcarousel/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="option 3" bordered={false}>
      <Appcarousel/>
      </Card>
    </Col>
  </Row>
);
export default Appcard;