import React from "react";
import { Space, Spin } from 'antd';
export default function loader(){
    return (<div>
        <Space size="middle">
        <Spin size="large" />
        </Space>
         </div>
    );
}