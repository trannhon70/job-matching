/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createCompanytoAgency,
  getAllListCompany,
} from "@/sevices/apis/admin/agency";
import { IListCompany } from "@/types/company";
import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

import { CheckboxGroup, NextUIProvider, Button } from "@nextui-org/react";
import "./modal.css";
import toast from "react-hot-toast";
import { searchByName } from "@/utils/formatDate";
import { Checkbox } from "@nextui-org/react";
interface IProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record: any;
}

const ModalAssign = (props: IProps) => {
  const { children, record } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [listCompany, setListcompany] = useState<IListCompany[]>([]);
  const [dataCheck, setDataCheck] = React.useState<any>([]);
  const [selected, setSelected] = React.useState<any>([]);

  const searchResult = searchByName(listCompany, search);

  useEffect(() => {
    const initialSelected = dataCheck
      .filter((item: any) => item.check === true)
      .map((item: any) => item.value);
    const reuslt = [...selected, ...initialSelected];
    setSelected(reuslt);
  }, [dataCheck?.[0]]);

  useEffect(() => {
    if (searchResult?.length > 0) {
      setDataCheck(
        searchResult.map((item: any) => ({
          value: item.id,
          label: `${item.companyName}`,
          check: item.isDistribution,
        }))
      );
    }
  }, [searchResult?.[0]]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setListcompany([]);
    setIsModalOpen(false);
  };

  const getAllCompany = async () => {
    {
      const result = await getAllListCompany("", record.user.id);
      setListcompany(result.data.data);
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
      companiesIds: selected || [],
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
  };

  const checkAllGroup = (e: any) => {
    if (e === true) {
      setSelected(dataCheck.map((item: any) => item.value));
    } else {
      setSelected([]);
    }
  };

  const onchangeSelected = (e: any) => {
    setSelected(e);
  };
  return (
    <div>
      <NextUIProvider>
        <div onClick={showModal}>{children}</div>
        <Modal
          title="Company list"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
          width={350}
        >
          <Checkbox
            onValueChange={(e) => {
              checkAllGroup(e);
            }}
            value="all"
            color="success"
          >
            All Check
          </Checkbox>

          <hr className="mb-2 mt-2" />

          <Input
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="h-[400px] overflow-y-auto mt-3 ">
            <CheckboxGroup
              value={selected}
              onValueChange={onchangeSelected}
              color="default"
              style={{ height: "400px", overflowY: "scroll" }}
            >
              {dataCheck.map((item: any, index: number) => {
                return (
                  <Checkbox
                    defaultChecked={true}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
          <div className="flex items-center justify-center">
            <Button
              isLoading={loading}
              onClick={onclickAssign}
              className="bg-lime-500 hover:bg-lime-600 p-[5px] text-white  w-[100px] h-[35px] mt-[20px]"
            >
              Assign
            </Button>
          </div>
        </Modal>
      </NextUIProvider>
    </div>
  );
};

export default ModalAssign;
