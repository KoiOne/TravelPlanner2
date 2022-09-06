import { Form, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import React from 'react';

function Placeform(props) {
    return (
        <Form
            name = "validate_other"

            >
            <Form.Item
                name = "Start"
                label = "Start"
                rules={[
                    {
                        required: true,
                        message: 'Please input your start!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name = "Destination"
                label = "Destination"
                rules={[
                    {
                        required: true,
                        message: 'Please input your destination!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            {/*<Form.Item*/}
            {/*    name = "description"*/}
            {/*    label = "Date"*/}
            {/*>*/}
            {/*    <Input/>*/}
            {/*</Form.Item>*/}
        </Form>
    );
}

export default Placeform;