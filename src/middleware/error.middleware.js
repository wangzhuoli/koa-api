/**
 * 错误处理中间件
 * **/

/**
 * 服务器发生错误
 * **/
export const serverError = (ctx, error, options = {}) => {
  const { status = 500, message = "服务器发生错误" } = options;
  ctx.status = status;
  ctx.body = {
    message,
    data: error,
  };
};

/**
 * 客户端发生错误
 * **/
export const clientError = (ctx, error, options = {}) => {
  const { status = 400, message = "客户端请求错误" } = options;
  ctx.status = status;
  ctx.body = {
    message,
    data: error,
  };
};
