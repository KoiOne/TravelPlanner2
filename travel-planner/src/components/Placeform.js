import { Form, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import React from 'react';

function Placeform(props) {
    return (
        <Form
            name = "validate_other"

            >
            <Form.Item
                name = "description"
                label = "Start"
                >
                <Input/>
            </Form.Item>
            <Form.Item
                name = "description"
                label = "Destination"
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name = "description"
                label = "Date"
            >
                <Input/>
            </Form.Item>
        </Form>
    );
}

export default Placeform;