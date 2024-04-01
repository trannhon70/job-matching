/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createCompanytoAgency,
  getAllListCompany,
} from "@/sevices/apis/admin/agency";
import { IListCompany } from "@/types/company";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import "./modal.css";
import toast from "react-hot-toast";
import { searchByName } from "@/utils/formatDate";
interface IProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record: any;
}
type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

// let defaultCheckedList = [] as any;

const ModalAssign = (props: IProps) => {
  const { children, record } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search] = useState<string>("");
  const [listCompany, setListcompany] = useState<IListCompany[]>([]);
  const [defaultCheckedList, setDefaultCheckedList] = useState<any[]>([]);

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  useEffect(() => {
    setCheckedList(defaultCheckedList);
  }, [defaultCheckedList]);

  const options = listCompany.map((item) => ({
    label: item.companyName,
    value: item.id,
    checked: item.isDistribution,
  }));

  const searchResult = searchByName(options, search);

  const checkAll = searchResult.length === checkedList.length;

  const indeterminate =
    checkedList.length > 0 && checkedList.length < searchResult.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCheckAllChange: CheckboxProps["onChange"] = (e: any) => {
    const newCheckedList = e.target.checked
      ? options.map((option) => option.value)
      : [];
    setCheckedList(newCheckedList);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setListcompany([]);
    setDefaultCheckedList([]);
    setIsModalOpen(false);
  };

  const getAllCompany = async () => {
    {
      const result = await getAllListCompany("", record.user.id);
      setListcompany(result.data.data);
      const defaultCheckedIds: any[] = [];
      result.data.data.forEach((item: any) => {
        if (item.isDistribution === true) {
          defaultCheckedIds.push(item.id);
        }
      });
      setDefaultCheckedList(defaultCheckedIds);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      getAllCompany();
    }
  }, [isModalOpen]);

  const onclickAssign = async () => {
    const userId = record.user.id;
    const body = {
      companiesIds: checkedList as [],
    };
    setLoading(true);
    createCompanytoAgency(userId, body)
      .then((res: any) => {
        if (res.data.error === false) {
          toast.success(`${res.data.message}`);
          getAllCompany();
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        setLoading(false);
      });

    setLoading(false);
  };
  return (
    <div>
      <div onClick={showModal}>{children}</div>
      <Modal
        title="Company list"
        open={isModalOpen}
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
        {/* <Input
          placeholder="Search.."
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <div className="h-[400px] overflow-y-auto mt-1 ">
          <Checkbox.Group
            value={checkedList}
            onChange={onChange}
            style={{ display: "block" }}
          >
            {searchResult.map((item: any, index: number) => {
              return (
                <Checkbox key={index} value={item.value}>
                  {item.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        </div>
        <div className="flex items-center justify-center">
          <Button
            loading={loading}
            onClick={onclickAssign}
            className="bg-lime-500 hover:bg-lime-600 p-[5px] text-white  w-[100px] h-[40px] mt-[5px]"
          >
            Assign
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAssign;
