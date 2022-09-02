import {Component} from "react";
import TripList from "./TripList";
import Map from "./Map";
import {Col, Row} from "antd";
class Main extends Component {

    render() {
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <TripList />

                </Col>
                <Col span={16} >
                    <Map />
                </Col>
            </Row>
        )
    }
}

export default Main;