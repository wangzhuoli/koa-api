import dayjs from "#src/plugins/dayjs.js";

export const formatDateFiled = (data) => {
  if (!data) {
    return;
  }
  if (Array.isArray(data)) {
    // 处理查询结果中的多个记录
    data.forEach((item) => {
      const create_at = item.dataValues.created_at;
      const updated_at = item.dataValues.updated_at;
      if (create_at) {
        item.dataValues.created_at = dayjs(create_at).format("YYYY-MM-DD HH:mm:ss");
      }
      if (updated_at) {
        item.dataValues.updated_at = dayjs(updated_at).format("YYYY-MM-DD HH:mm:ss");
      }
    });
  } else {
    // 处理单个记录
    const create_at = data.dataValues.created_at;
    const updated_at = data.dataValues.updated_at;
    if (create_at) {
      data.created_at = dayjs(create_at).format("YYYY-MM-DD HH:mm:ss");
    }
    if (updated_at) {
      data.updated_at = dayjs(updated_at).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
