import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { getDetailEmployee } from "@/sevices/apis/admin/employee";
import { DetailEmployeeType } from "@/types/employee";
import { Button, Result, Spin } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Certificate from "./_components/Certificate";
import Education from "./_components/Education";
import Personal from "./_components/Personal";
import Skills from "./_components/Skills";
import WorkExp from "./_components/WorkExp";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFetching, data } = useQuery({
    queryKey: [`${AdminQueryKeyEnum.EMPLOYEE}_${id}`],
    queryFn: () => {
      return getDetailEmployee(id);
    },
  });

  const formattedData = useMemo(
    () => data?.data?.data as DetailEmployeeType,
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
              navigate("/admin/employee-user");
            }}
            type="primary">
            Back
          </Button>
        }
      />
    );

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <Personal data={formattedData} />
      <div className="grid grid-cols-2 gap-4">
        <Education data={formattedData} />
        <Skills data={formattedData} />
        <Certificate data={formattedData} />
        <WorkExp data={formattedData} />
      </div>
    </div>
  );
};

export default Page;
