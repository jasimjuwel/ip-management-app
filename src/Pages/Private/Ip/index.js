import { Space, Table, Card, Modal, Form, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { IP_LIST, IP_STORE, IP_UPDATE } from '../../../Scripts/api';
import { getData, postData, putData } from '../../../Scripts/api-service';
import { alertPop } from '../../../Scripts/helper';

export default function IPList() {
    const [form] = Form.useForm()
    const [logData, setLogData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState();
    const [open, setOpen] = useState(false);
    const [context, setContext] = useState();
    const [selectedIp, setSelectedIP] = useState();


    const columns = [
        {
            title: 'IP Address',
            dataIndex: 'ip_address',
            key: 'ip_address'
        },
        {
            title: 'IP Label',
            dataIndex: 'ip_label',
            key: 'ip_label'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => updateIP(record)}>Edit </Button>
                </Space>
            ),
        },
    ];

    const getIpData = async () => {
        let res = await getData(IP_LIST + `?pages=${currentPage}`);

        if (res) {
            let masterData = res?.data?.data;
            setLogData(masterData?.items);
            setPageCount(masterData.max_page);
        }
    };

    const paginate = (page) => {
        setCurrentPage(page);
    };

    const updateIP = (data) => {
        setOpen(true);
        setSelectedIP(data);
        form.setFieldsValue({
            ip_address: data.ip_address,
            ip_label: data.ip_label
        });
    }

    const onFinish = async (values) => {
        if (context === "create") {
            let res = await postData(IP_STORE, values, false, form);

            if (res) {
                alertPop("success", res?.data?.message);
                getIpData();
                setOpen(false);
                form.resetFields();

            }
        } else {
            let res = await putData(IP_UPDATE + '/' + selectedIp.id, values, false, form);

            if (res) {
                alertPop("success", res?.data?.message);
                getIpData();
                setOpen(false);
                form.resetFields();

            }
        }

    };

    useEffect(() => {
        getIpData();
    }, [currentPage]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-bottom-0 pb-1">
                            <h4 className="card-title mb-0">All IP List</h4>
                        </div>{/* end card header */}
                        <div className="card-body mb-2 pt-0">
                            <div className="d-flex align-items-center border-bottom-0 justify-content-between mb-3">
                                <button className="btn btn-primary cursor-pointer font-size-12 btn-sm"
                                    onClick={() => { setOpen(true); setContext('create') }}>
                                    Create New IP
                                </button>
                            </div>{/* end card header */}
                        </div>

                        <Card>
                            <Table columns={columns} dataSource={logData}
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
            <Modal
                title={context === 'create' ? 'Create IP' : 'Update IP'}
                open={open}
                footer={false}
                onCancel={() => { setOpen(false);  }}
            >
                <Form
                    name="basic" layout='vertical'
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="IP Address"
                        name="ip_address"
                        rules={[
                            {
                                required: true,
                                message: 'Enter IP Address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="IP Label"
                        name="ip_label"
                        rules={[
                            {
                                required: true,
                                message: 'Enter IP Label!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
