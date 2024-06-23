import React from "react";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperContentList from "../Components/WrapperContentList";
import WrapperList from "../Components/WrapperList";
import Input from "../Components/Input";
import CardReview from "../BlockCard/CardReview";
import CardImgCircle from "../BlockCard/CardImgCircle";
import { toast } from "react-toastify";

const BlockCmt = ({ dataMovie }) => {
  return (
    <WrapperList>
      <TopHeaderList
        have_titleList={false}
        title_list={"Comments"}
      ></TopHeaderList>
      <WrapperContentList>
        <div className="flex items-center justify-center gap-x-2">
          <div className="w-[50px] h-[50px] rounded-full">
            <CardImgCircle></CardImgCircle>
          </div>
          <div className="flex-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
              className="flex gap-x-5"
            >
              <div className="flex-1">
                <Input
                  className="w-full  block bg-transparent rounded-none border-b-2 text-white"
                  placeholder="Enter your comment... "
                ></Input>
              </div>
              <button
                onClick={() =>
                  toast.info("Please login")
                }
                className="w-[100px] bg-[#326cce] rounded-md capitalize font-semibold text-white"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </WrapperContentList>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {dataMovie.loading === false &&
          Array.isArray(dataMovie.dataDetail?.overview?.results) &&
          dataMovie.dataDetail?.overview?.results.map((item, index) => {
            return (
              <CardReview
                name={item.author_details.username}
                rating={item.author_details.rating}
                content_review={item.content}
                created_at={item.updated_at}
                avt_path={item.author_details.avatar_path}
              ></CardReview>
            );
          })}
      </div>
    </WrapperList>
  );
};

export default BlockCmt;
