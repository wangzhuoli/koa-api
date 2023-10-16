/**
 * 分页处理
 * **/
export const paginateMiddleware = (ctx, next) => {
  const { page, size } = ctx.request.query;
  ctx.state.pagination = {
    page: parseInt(page) || 1,
    size: parseInt(size) || 10,
  };
  next();
};
