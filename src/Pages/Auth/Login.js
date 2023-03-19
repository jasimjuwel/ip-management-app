import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';


export default function Login() {

  const onFinish = (values) => {

  };

  return (
    <div class="auth-content my-auto">
      <div class="text-center">
        <h5 class="mb-0 font-weight-normal">Welcome Back!</h5>
        <h5 class="mt-2">Sign in to continue to IP Management.</h5>
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


        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item class="mb-3">
          <Button type="primary" htmlType="submit" className="btn btn-primary w-100 waves-effect waves-light">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
