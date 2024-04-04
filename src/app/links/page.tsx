"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table, Tag } from "antd";
import { useSession } from "next-auth/react";

export default function LinkList() {
  const { data } = useSession();
  const { tableProps, setFilters } = useTable({
    syncWithLocation: true,
    filters: {
      permanent: [{
        field: 'email',
        operator: 'eq',
        value: data?.user?.email
      }]
    },
  });

  // setFilters([]);

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "categories",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.category?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="title"
          title={"Title"}
          render={(value: string, record: any) => (
            <a href={record.link} target='_blank' rel='noopener noreferer'>
              {value}
            </a>
          )}
        />
        <Table.Column
          dataIndex="description"
          title={"Description"}
          render={(value: any) => {
            if (!value) return "-";
            return <MarkdownField value={value.slice(0, 80) + "..."} />;
          }}
        />
        <Table.Column
          dataIndex={["createdAt"]}
          title={"Created at"}
          render={(value: any) => <DateField value={value} format={'DD/MM/YYYY'} />}
        />
        <Table.Column
          dataIndex='tags'
          title='Tags'
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </>
          )}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
