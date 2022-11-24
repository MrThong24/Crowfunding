import LayoutDashboard from "../layout/LayoutDashboard";
import { useForm } from "react-hook-form";
import React, { useMemo, useState } from "react";
import FieldComponents from "../components/common/FieldComponents";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import Dropdown from "../components/dropdown/Dropdown";
import { apiURL, imgbbAPI } from "../config/config";
import Select from "../components/dropdown/Select";
import Textarea from "../components/input/Textarea";
import Option from "../components/dropdown/Option";
import List from "../components/dropdown/List";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageUploader from "quill-image-uploader";
import { Button } from "../components/button";
Quill.register("modules/imageUploader", ImageUploader);

const StartCampaignPage = () => {
  const {
    control,
    setValue,
    getValues,
    watch,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });
  const [content, setContent] = React.useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  return (
    <LayoutDashboard>
      <div className="bg-white w-full h-full rounded-[10px] pt-[40px] p-[60px]">
        <div className="text-center">
          <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
            Start a Campaign 🚀
          </h1>
        </div>
        <form>
          <FieldComponents defaultClassName="rowForm">
            <FieldComponents>
              <Label
                htmlFor="title"
                className="font-medium text-[14px] text-text2"
              >
                Campaign title *
              </Label>
              <Input
                control={control}
                type="name"
                placeholder="Write a title"
                name="title"
              ></Input>
            </FieldComponents>
            <FieldComponents>
              <Dropdown>
                <Label htmlFor="dropdown">Select a category *</Label>
                <Select placeholder="Select a category"></Select>
                <List>
                  <Option>asddddd</Option>
                  <Option>asddddd</Option>
                </List>
              </Dropdown>
            </FieldComponents>
          </FieldComponents>
          <FieldComponents>
            <Label htmlFor="textArea">Short Description</Label>
            <Textarea
              control={control}
              name="short_description"
              placeholder="Write a short description...."
            ></Textarea>
          </FieldComponents>
          <FieldComponents>
            <Label>Story</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            ></ReactQuill>
          </FieldComponents>
          <FieldComponents defaultClassName="rowForm">
            <FieldComponents>
              <Label htmlFor="goal">Goal *</Label>
              <Input
                control={control}
                name="goal"
                type="number"
                placeholder="$0.00 USD"
              ></Input>
            </FieldComponents>
            <FieldComponents>
              <Label htmlFor="raised">Raised Amount *</Label>
              <Input
                control={control}
                name="raised"
                type="number"
                placeholder="$0.00 USD"
              ></Input>
            </FieldComponents>
          </FieldComponents>
          <FieldComponents defaultClassName="rowForm">
            <FieldComponents>
              <Label htmlFor="amount">Amount Prefilled</Label>
              <Input
                control={control}
                name="amount"
                type="number"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-text3 text-[14px] font-normal pr-[140px] leading-[30px] mt-[15px]">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FieldComponents>
            <FieldComponents>
              <Label htmlFor="video">Video</Label>
              <Input control={control} name="video" placeholder="Video"></Input>
              <p className="text-text3 text-[14px] font-normal leading-[30px] mt-[15px]">
                Place Youtube or Vimeo Video URL
              </p>
            </FieldComponents>
          </FieldComponents>
          <FieldComponents defaultClassName="rowForm">
            <FieldComponents>
              <Dropdown>
                <Label htmlFor="method">Campaign End Method</Label>
                <Select placeholder="Select one"></Select>
                <List>
                  <Option>asddddd</Option>
                  <Option>asddddd</Option>
                </List>
              </Dropdown>
            </FieldComponents>
            <FieldComponents>
              <Dropdown>
                <Label htmlFor="country">Country</Label>
                <Select placeholder="Select a country"></Select>
                <List>
                  <Option>asddddd</Option>
                  <Option>asddddd</Option>
                </List>
              </Dropdown>
            </FieldComponents>
          </FieldComponents>
          <FieldComponents defaultClassName="rowForm">
            <FieldComponents>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                control={control}
                name="startDate"
                placeholder="Start Date"
              ></Input>
            </FieldComponents>
            <FieldComponents>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                control={control}
                name="endDate"
                placeholder="End Date"
              ></Input>
            </FieldComponents>
          </FieldComponents>
          <Button
            type="submit"
            className="mx-auto text-white inline-block text-[16px] font-semibold px-[40px] mt-[40px]"
            kind="primary"
          >
            Submit new campaign
          </Button>
        </form>
      </div>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
