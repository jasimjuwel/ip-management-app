import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { AUDITLOG_LIST } from '../../Scripts/api';
import { getData } from '../../Scripts/api-service';
const columns = [
  {
    title: 'Log Time',
    dataIndex: 'log_time',
    key: 'log_time'
  },
  {
    title: 'Request Path',
    dataIndex: 'request_path',
    key: 'request_path'
  },
  {
    title: 'Post Json',
    dataIndex: 'post_json',
    key: 'post_json'
  },
  {
    title: 'Final Response',
    dataIndex: 'final_response',
    key: 'final_response'
  },
  {
    title: 'Request IP',
    dataIndex: 'request_ip',
    key: 'request_ip'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export default function AuditLog() {
    const [logData, setLogData] = useState()

    const getAuditLog = async () => {
        let res = await getData(AUDITLOG_LIST);

        if (res) {
            let masterData = res?.data?.data;

            console.log("master", masterData);
            setLogData(masterData?.items)
        }
    };

    useEffect(() => {
        getAuditLog();
    }, [])
  return (
    <div>
        <Table columns={columns} dataSource={logData} />
    </div>
  )
}
