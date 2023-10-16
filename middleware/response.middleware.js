/**
 * 响应中间件
 * **/

/**
 * 不带分页响应中间件
 * **/
export const responseWithoutPagination = (ctx, data, options = {}) => {
  const { status = 200, message = "" } = options;
  ctx.status = status;
  ctx.body = {
    message,
    data,
  };
};

/**
 * 带分页响应中间件
 * **/
export const responseWithPagination = (ctx, data, options = {}) => {
  const { status = 200, message = "", count = 0 } = options;
  const { page, size } = ctx.state.pagination;
  const lastPage = Math.ceil(count / size);
  ctx.status = status;

  console.log(data);

  ctx.body = {
    message,
    data: {
      list: data,
      count,
      currentPage: page,
      pageSize: size,
      lastPage,
    },
  };
};
