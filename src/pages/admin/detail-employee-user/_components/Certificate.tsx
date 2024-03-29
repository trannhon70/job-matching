import { DetailEmployeeType } from "@/types/employee";
import { Button, Card, List } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailEmployeeType;
}

const Certificate: React.FC<Props> = ({ data }) => {
  const certificateList = useMemo(() => data?.certificate ?? [], [data]);

  return (
    <Card title="Certificate">
      <List
        itemLayout="horizontal"
        dataSource={certificateList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <span className="text-lg font-medium">{item?.nameFile}</span>
              }
              description={
                <div className="flex flex-col gap-2">
                  <span>
                    {item?.monthStartCer}/{item?.yearStartCer} -{" "}
                    {item?.monthEndCer}/{item?.yearEndCer}
                  </span>
                  <a href={item?.file ?? ""} target="_blank">
                    <Button className="w-fit">View</Button>
                  </a>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Certificate;
