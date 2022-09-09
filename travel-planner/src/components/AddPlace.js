import React, {Component} from 'react';
import {Button, Modal} from "antd";
import Placeform from "./Placeform";
class AddPlace extends Component {
    state = {
        visible: false,
        confirmLoading: false
    };
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true
        });
    };

    handleCancel = () => {
        console.log("Clicked cancel button");
        this.setState({
            visible: false
        });
    };
    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type="primary"
                        onClick={this.showModal}>
                    Add Trip
                </Button>
                <Modal
                    title="Add a Trip"
                    visible={visible}
                    onOk={this.handleOk}
                    okText="Create"
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                <Placeform/>
                </Modal>
            </div>
        );
    }
}

export default AddPlace;