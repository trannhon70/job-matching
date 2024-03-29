import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { getDetailCompany } from "@/sevices/apis/admin/company";
import { DetailCompanyType } from "@/types/company";
import { Button, Result, Spin } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Information from "./_components/Information";
import Reviews from "./_components/Reviews";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFetching, data } = useQuery({
    queryKey: [`${AdminQueryKeyEnum.COMPANY}_${id}`],
    queryFn: () => {
      return getDetailCompany(id);
    },
  });

  const formattedData = useMemo(
    () => data?.data?.data as DetailCompanyType,
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
              navigate("/admin/company");
            }}
            type="primary">
            Back
          </Button>
        }
      />
    );

  return (
    <div className="container mx-auto space-y-4">
      <Information data={formattedData} />
      <Reviews data={formattedData} />
    </div>
  );
};

export default Page;
