import { DetailEmployeeType } from "@/types/employee";
import { Card, List } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailEmployeeType;
}

const WorkExp: React.FC<Props> = ({ data }) => {
  const workExpList = useMemo(() => data?.experience ?? [], [data]);

  return (
    <Card title="Work Experience">
      <List
        itemLayout="horizontal"
        dataSource={workExpList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  <div className="text-lg font-medium">
                    {item?.company?.companyName ?? item?.companyName}
                  </div>
                  <div>{item?.description}</div>
                </>
              }
              description={
                <div className="flex flex-col gap-2">
                  <span>
                    {item?.monthStart}/{item?.yearStart} - {item?.monthEnd}/
                    {item?.yearStart}
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default WorkExp;
