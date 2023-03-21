import { Space, Table, Card } from 'antd';
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
];

export default function AuditLog() {
    const [logData, setLogData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState();

    const getAuditLog = async () => {
        let res = await getData(AUDITLOG_LIST + `?pages=${currentPage}`);

        if (res) {
            let masterData = res?.data?.data;
            setLogData(masterData?.items);
            setPageCount(masterData.max_page);
        }
    };

    const paginate = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        getAuditLog();
    }, [currentPage]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-bottom-0 pb-1">
                            <h4 className="card-title mb-0">All IP List</h4>
                        </div>{/* end card header */}

                        <Card>
                            <Table columns={columns} dataSource={logData}
                                scroll={{
                                    x: 'calc(700px + 50%)',
                                }}
                                pagination={{
                                    showSizeChanger: false,
                                    current: currentPage,
                                    total: pageCount * 10,
                                    onChange: (page) => paginate(page)
                                }} />
                        </Card>
                    </div>
                    {/* end card */}
                </div>
            </div>
            {/* end row */}
        </div>
    )
}
