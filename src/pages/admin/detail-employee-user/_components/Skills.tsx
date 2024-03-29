import { DetailEmployeeType } from "@/types/employee";
import { Card, List, Rate } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailEmployeeType;
}

const Skills: React.FC<Props> = ({ data }) => {
  const skillsList = useMemo(() => data?.userTechnical ?? [], [data]);

  return (
    <Card title="Skills">
      <List
        itemLayout="horizontal"
        dataSource={skillsList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <span className="text-lg font-medium">
                  {item?.skillName ?? item?.technical?.technicalName}
                </span>
              }
              description={<Rate defaultValue={item?.rate ?? 0} disabled />}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Skills;
