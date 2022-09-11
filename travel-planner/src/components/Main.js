import {Component} from "react";
import TripList from "./TripList";
import Login from "./Login";
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

                </Col>
            </Row>
        )
    }
}

export default Main;