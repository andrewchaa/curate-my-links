"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useSession } from "next-auth/react";

export default function BlogPostCreate() {
  const { data } = useSession();
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name={["email"]}
          initialValue={data?.user?.email}
          hidden
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Link"}
          name={["link"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label={'Tags'}
          name='tags'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode='tags'
          />
        </Form.Item>
      </Form>
    </Create>
  );
}
