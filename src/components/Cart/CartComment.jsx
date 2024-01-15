import React from 'react';
import { Button, Form, Input } from 'antd';

export default function CartComment() {
  return (
    <div className="mt-5">
      <div className="border border-1 py-5 px-3">
        <div>
          <h5>
            Post your Comments and Discuss CompTIA DS0-001 exam with other
            Community members:
          </h5>
          <div>
            <Form layout="vertical">
              <Form.Item
                label={<span style={{ fontSize: '18px' }}>Full Name</span>}
              >
                <Input
                  className="rounded-0 authFormInput"
                  size="large"
                  placeholder="Enter full name"
                  name="fullName"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ fontSize: '18px' }}>Email</span>}
              >
                <Input
                  className="rounded-0 authFormInput"
                  size="large"
                  placeholder="Enter email address"
                  name="email"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ fontSize: '18px' }}>Password</span>}
              >
                <Input.TextArea
                  className="rounded-0 authFormInput"
                  size="large"
                  placeholder="Enter Comment"
                  name="comment"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size='large' htmlType="submit" className='w-100'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
