import dayjs from "#src/plugins/dayjs.js";

export const formatDateFiled = (data) => {
  if (Array.isArray(data)) {
    // 处理查询结果中的多个记录
    data.forEach((item) => {
      if (item.dataValues.created_at) {
        item.dataValues.created_at = dayjs(item.dataValues.created_at).format("YYYY-MM-DD HH:mm:ss");
      }
      if (item.dataValues.updated_at) {
        item.dataValues.updated_at = dayjs(item.dataValues.updated_at).format("YYYY-MM-DD HH:mm:ss");
      }
    });
  } else {
    // 处理单个记录
    if (data.dataValues.created_at) {
      data.created_at = dayjs(data.dataValues.created_at).format("YYYY-MM-DD HH:mm:ss");
    }
    if (data.dataValues.updated_at) {
      data.updated_at = dayjs(data.dataValues.updated_at).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
