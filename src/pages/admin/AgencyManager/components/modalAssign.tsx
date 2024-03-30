import { getAllListCompany } from "@/sevices/apis/admin/agency";
import { IListCompany } from "@/types/company";
import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Checkbox, Divider } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import "./modal.css";
interface IProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record: any;
}
type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange", "Pear", "Orange"];
const defaultCheckedList = [] as any;

const ModalAssign = (props: IProps) => {
  const { children, record } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [listCompany, setListcompany] = useState<IListCompany[]>([]);

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getAllCompany = async () => {
    {
      const result = await getAllListCompany(search);
      setListcompany(result.data.data);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      getAllCompany();
    }
  }, [isModalOpen, search]);
  return (
    <div>
      <div onClick={showModal}>{children}</div>
      <Modal
        title="Company list"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={350}
      >
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <hr className="mb-2 mt-2" />
        <Input
          placeholder="Search.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="h-[400px] overflow-y-auto mt-1 ">
          <CheckboxGroup
            options={listCompany.map((item) => ({
              label: item.companyName,
              value: item.id,
            }))}
            value={checkedList}
            onChange={onChange}
            style={{ display: "block" }}
          />
        </div>
        <div className="flex items-center justify-center mt-2">
          <button className="bg-lime-500 hover:bg-lime-600 p-[5px] text-white  w-[100px]">
            Assign
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAssign;
