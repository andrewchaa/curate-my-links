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
import { Button, Space, Table, Tag } from "antd";
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
      {tableProps.dataSource?.map((record: any) => (
        <div key={record.id} style={{paddingTop:15}}>
          <div>
            <a href={record.link} target='_blank' rel='noopener noreferrer'>
              {record.title}{': '}
            </a>
            {record.description ? (
              <span>{record.description.slice(0, 80) + "..."}</span>
            ) : (
              "-"
            )}
          </div>
          <div>
            {record.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          <Space>
            <EditButton hideText size="small" recordItemId={record.id} />
            <ShowButton hideText size="small" recordItemId={record.id} />
            <DeleteButton hideText size="small" recordItemId={record.id} />
          </Space>

          </div>
        </div>
      ))}

    </List>
  );
}
