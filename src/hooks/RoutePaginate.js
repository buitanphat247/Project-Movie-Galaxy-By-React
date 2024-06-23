import { Pagination, PaginationItem, Grid } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const RoutePaginate = ({ type, totalPage, onChange, check_query, media }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page") || "1", 10);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Pagination
          page={currentPage}
          count={totalPage}
          onChange={onChange}
          color="primary"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          hidePrevButton
          hideNextButton
          sx={{
            display: "flex",
            justifyContent: "center",
            "& .MuiPaginationItem-ellipsis": {
              color: "white",
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={
                check_query === null
                  ? `/${type}?page=${item.page}`
                  : `/${type}?page=${item.page}&media=${media}&search=true`
              }
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#3b82f6", // Màu nền khi item được chọn
                  color: "white", // Màu chữ khi item được chọn
                },
                "&:hover": {
                  backgroundColor: "#6b7280", // Màu nền khi hover
                },
                "& .MuiPaginationItem-ellipsis": {
                  color: "red", // Đổi màu sắc của dấu ba chấm
                },
              }}
              {...item}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default RoutePaginate;
