import React from "react";
import CardChannel from "../BlockCard/CardChannel";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperList from "../Components/WrapperList";
import WrapperContentList from "../Components/WrapperContentList";

const ListChannel = ({ title_list }) => {
  return (
    <WrapperList>
      <TopHeaderList
        have_titleList={false}
        title_list={title_list}
      ></TopHeaderList>
      <WrapperContentList addClass="mobile:grid mobile:grid-cols-2 mobile:gap-1 tablet:gap-2 laptop:grid-cols-4">
        <CardChannel src="https://variety.com/wp-content/uploads/2022/12/HBO-Max.png?w=1000&h=667&crop=1"></CardChannel>
        <CardChannel src="https://cdn.tgdd.vn/Files/2023/10/03/1550181/image71-031023-142108-800-resize.jpg"></CardChannel>
        <CardChannel src="https://hnm.1cdn.vn/2022/09/13/hanoimoi.com.vn-uploads-images-quangcao-2022-09-13-_g1.jpg"></CardChannel>
        <CardChannel src="https://cdn.popsww.com/blog-kids/sites/3/2021/09/phim-hoat-hinh-walt-disney.jpg"></CardChannel>
        <CardChannel src="https://phunuvietnam.mediacdn.vn/zoom/660_412/media/news/52b8e6d0773472f490daafa68658b651/thumb/4-bo-phim-hoat-hinh-dinh-da-cua-cartoon-network-vua-cap-ben-viet-nam-phim33-thumb43.jpg"></CardChannel>
        <CardChannel src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/3d/c6/65/3dc665f1-b6f1-b9a9-7d5c-82c6125ebfec/1e548976-643a-49a2-8804-147580a3cd38_01.png/643x0w.jpg"></CardChannel>
        <CardChannel src="https://hnm.1cdn.vn/2022/09/13/hanoimoi.com.vn-uploads-images-quangcao-2022-09-13-_g1.jpg"></CardChannel>
        <CardChannel src="https://cdn.popsww.com/blog-kids/sites/3/2021/09/phim-hoat-hinh-walt-disney.jpg"></CardChannel>
      </WrapperContentList>
    </WrapperList>
  );
};

export default ListChannel;
