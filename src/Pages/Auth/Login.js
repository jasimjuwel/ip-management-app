import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { postData } from '../../Scripts/api-service';
import { LOGIN } from '../../Scripts/api';
import Cookies from 'js-cookie';


export default function Login() {

  const onFinish = async (values) => {
    let res = await postData(LOGIN, values, false);

    if (res) {
        let masterData = res?.data?.data;
        Cookies.set("IPToken", masterData.token, {expires: 1});
        window.location = "/";
    }
  };

  return (
    <div className="auth-content my-auto">
      <div className="text-center">
        <h5 className="mb-0 font-weight-normal">Welcome Back!</h5>
        <h5 className="mt-2">Sign in to continue to IP Management.</h5>
      </div>

      <Form name="basic" className="mt-3 pt-2"
        onFinish={onFinish} layout="vertical"
        autoComplete="off" size={"large"}
      >
        <Form.Item className='mb-3'
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder='Enter Email Address' />
        </Form.Item>


        <div className='password-content'>
          
          <Form.Item
            className='mb-2'
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder='Enter password' />
          </Form.Item>
        </div>

        <Form.Item className="mb-3">
          <Button type="primary" htmlType="submit" className="btn btn-primary w-100 waves-effect waves-light">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
