import { DetailCompanyType } from "@/types/company";
import { Avatar, Card, List } from "antd";

interface Props {
  data: DetailCompanyType;
}

const Reviews: React.FC<Props> = ({ data }) => {
  return (
    <Card title="Review">
      <List
        itemLayout="horizontal"
        dataSource={data?.review ?? []}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item?.user?.avatarUrl} />}
              title={<a href="https://ant.design">{item.content}</a>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Reviews;
