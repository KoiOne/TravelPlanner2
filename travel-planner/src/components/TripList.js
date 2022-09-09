


import React, {Component} from 'react';
import AddPlace from "./AddPlace";
import {List, Spin, Checkbox, Button, Pagination, Col, Row, Card} from "antd";
class TripList extends Component {
    state = {
        dayIndex : 1
    }

    render() {
        const {dayIndex} = this.state;
        const { Meta } = Card;
        
        var isLoad = false;
        var trip1 = {
            start : "A",
            Destination : "B"
        }

        var trip2  = {
            start : "B",
            Destination : "C"
        }
        
        var trip3 = {
            start : "C",
            Destination : "D"
        }
        
        var trip4 = {
            start : "D",
            Destination : "E"
        }
        
        var day1 = {
            Date : "01/09/2022",
            dayTripList : [trip1, trip2, trip3, trip4]
        }
        
        var day2 = {
            Date : "01/09/2022",
            dayTripList : [trip2, trip1, trip3]
        }

        var day3 = {
            Date : "01/09/2022",
            dayTripList : [trip3, trip2, trip1]
        }

        var day4 = {
            Date : "01/09/2022",
            dayTripList : [trip3, trip1, trip2]
        }

        
        var dayList = [day1, day2, day3, day4, day2, day1, day3, day2, day1, day3]
        return (
            <div className="day-list-box">
            
                <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                <div className="btn-container">
                <Button
                    className="day-list-btn"
                    type='primary'
                    onClick={this.onShowSatMap}
                >Show Map</Button> 
                
                </div>
                </Col>
                <Col span={8}>
                <AddPlace/>
                </Col>
            </Row>

            <hr/>
            {
                isLoad 
                ? 
                <div className="spin-box">
                    <Spin tip="Loading..." size="large"/>
                </div>
                : 
                <div>
                <List className='day-list'
                      itemLayout="horizontal"
                      dataSource={dayList[dayIndex - 1].dayTripList}
                      renderItem={(item) => (
                        <Card className='day-list-card' 
                           
                            extra={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}>
                            Trip: {item.start + " -> " + item.Destination}
                            
                            
                        
                           
                        </Card> 
                
                    )}
                />
                <Pagination 
                    defaultCurrent={1}
                    pageSize={1}
                    total={dayList.length}
                    responsive={true}
                    onChange={(page, pageSize) => {
                        this.setState({dayIndex : page})
                    }}/>
                </div>
            }
            
        </div>
        );
    }
}

export default TripList;

