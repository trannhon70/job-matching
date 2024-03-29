import { ManageJobEnum } from "@/enums/admin";
import { ManageJob } from "@/types/employment";
import { Empty } from "antd";
import { useState } from "react";
import Note from "./Note";
import Step from "./Step";

interface Props {
  data: ManageJob;
  jobId: number;
  isActive: boolean;
}

const ProgressCheck: React.FC<Props> = ({ data, jobId, isActive }) => {
  const [currentStep, setCurrentStep] = useState<ManageJobEnum>(
    data?.currentStep
  );

  const setActiveCurrentStep = (step: ManageJobEnum) => {
    setCurrentStep(step);
  };

  if (!data) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full font-medium bg-green-950/10 p-4">
        Post-Hiring Progress Check
      </div>
      <div className="grid w-full grid-cols-5 gap-2">
        <div className="bg-[#164e63]/80 p-3 text-base font-semibold text-white">
          Confirm recruiter down payment
        </div>
        <div className="col-span-3 bg-[#164e63]/80 p-3 text-base font-semibold text-white">
          Apply for an Employer LMIA
        </div>
        <div className="bg-[#164e63]/80 p-3 text-base font-semibold text-white">
          Paying Secondary Costs
        </div>
        <Step
          disabled={!isActive}
          setActiveCurrentStep={setActiveCurrentStep}
          isActive={currentStep === ManageJobEnum.confirm}
          jobId={jobId}
          name={ManageJobEnum.confirm}
          key="confirm"
          title="Confirm"
          data={data.confirm}
        />
        <Step
          disabled={!isActive}
          setActiveCurrentStep={setActiveCurrentStep}
          isActive={currentStep === ManageJobEnum.step1}
          jobId={jobId}
          name={ManageJobEnum.step1}
          key="step 1"
          title="Step 1 : Register a job bank"
          data={data.step1}
        />
        <Step
          disabled={!isActive}
          setActiveCurrentStep={setActiveCurrentStep}
          isActive={currentStep === ManageJobEnum.step2}
          jobId={jobId}
          name={ManageJobEnum.step2}
          key="step 2"
          title="Step 2 : Service Canada"
          data={data.step2}
        />
        <Step
          disabled={!isActive}
          setActiveCurrentStep={setActiveCurrentStep}
          isActive={currentStep === ManageJobEnum.step3}
          jobId={jobId}
          name={ManageJobEnum.step3}
          key="step 3"
          title="Step 3 : Finalization"
          data={data.step3}
        />
        <Step
          disabled={!isActive}
          setActiveCurrentStep={setActiveCurrentStep}
          isActive={currentStep === ManageJobEnum.lmia}
          jobId={jobId}
          name={ManageJobEnum.lmia}
          key="LMIA"
          title="Deliver LMIA & confirm departure date"
          data={data.lmia}
        />
      </div>
      <Note
        disabled={!isActive}
        data={data?.[currentStep]}
        jobId={jobId}
        currentStep={currentStep}
      />
    </div>
  );
};

export default ProgressCheck;
