/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTemplateAgency, getAllCountry } from "@/sevices/apis/auth/authApi";
import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { useMutation } from "react-query";
// import {  useNavigate } from "react-router-dom";
export const MasterApprovalRequestForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [country, setCountry] = useState([])
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //  const navigate = useNavigate();
   const mutation = useMutation({
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     mutationFn: (body) => {
       return createTemplateAgency(body);
     },
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     onSuccess: (res) => {

        console.log(res, 'res');
        
    //    if (res.data.error === false) {
    //      toast.success(res.data.message);
    //      navigate("/login-agency");
    //    }
     },
     onError: (err) => {
       console.log(err);
 
       // toast.error(err.response.data.message);
     },
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onFinish = (value: any) => {
 
     mutation.mutate(value);
   };

   const getAllCountrys = async() => {
    const result = await getAllCountry()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
    let data : any  = []
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    result.data.map((item : any ) => {
        const body = {
            label: item.countryName,
            value: item.id,
        }
        data.push(body)
    })
    setCountry(data)
    
   }

 
   useEffect(() => {
    getAllCountrys()
   }, [])
  

  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div
        style={{
          border: "1px solid #d9d9d9",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        {/* <div className="flex items-center justify-center text-3xl mb-5 ">
          Register Agency
        </div> */}
        
        <Form
          className="w-[400px]"
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="agencyName"
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
            label="Name"
          >
            <Input
              //   prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Verify code"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
            label="Country:"
          >
            <Select options={country} />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
            label="Address:"
          >
            <Input
            //   prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="address"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item
            name="contactName"
            rules={[{ required: true, message: "Please input your Contact Name!" }]}
            label="Contact Name:"
          >
            <Input
            //   prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Contact Name"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
            label="phone:"
          >
            <Input
            //   prefix={<LockOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="phone"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[40px]"
            >
              Submit
            </Button>
          </Form.Item>
        
        </Form>
      </div>
    </div>
  );
};
