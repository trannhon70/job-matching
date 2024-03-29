import { DetailEmployeeType } from "@/types/employee";
import { Card, List } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailEmployeeType;
}

const Education: React.FC<Props> = ({ data }) => {
  const educationList = useMemo(() => data?.userSchool ?? [], [data]);

  return (
    <Card title="Education">
      <List
        itemLayout="horizontal"
        dataSource={educationList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div className="flex flex-col">
                  <span className="text-lg font-medium">
                    {item?.schoolName ?? item?.school?.schoolName}
                  </span>
                  <span>{item?.majorName ?? item?.major?.majorName}</span>
                </div>
              }
              description={`${item?.monthStartEdu}/${item?.yearStartEdu} - ${item?.monthEndEdu}/${item?.yearEndEdu}`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Education;
