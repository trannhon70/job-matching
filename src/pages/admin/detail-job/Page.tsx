import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { getDetailJob } from "@/sevices/apis/admin/job";
import { DetailJobType } from "@/types/job";
import { Button, Result, Spin } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Company from "./_components/Company";
import Information from "./_components/Information";
import Primary from "./_components/Primary";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFetching, data } = useQuery({
    queryKey: [`${AdminQueryKeyEnum.JOB}_${id}`],
    queryFn: () => {
      return getDetailJob(id);
    },
  });

  const formattedData = useMemo(
    () => data?.data?.data as DetailJobType,
    [data]
  );

  if (isFetching) return <Spin />;
  if (!formattedData && !isFetching)
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              navigate("/admin/job");
            }}
            type="primary">
            Back
          </Button>
        }
      />
    );
  return (
    <div className="container mx-auto space-y-4">
      <div className="grid w-full grid-cols-3 space-x-4">
        <div className="col-span-2">
          <Primary data={formattedData} />
        </div>
        <Company data={formattedData} />
      </div>
      <Information data={formattedData} />
    </div>
  );
};

export default Page;
