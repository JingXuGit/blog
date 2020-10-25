import request from '@/utils/request';

export const loginMethods = (data) => {
  const param = data
  return request.post('api/login', param)
};
export const registerMethods = (data) => {
  const param = data
  return request.post('api/register', param)
};
/* 验证token 是否过期 */
// export const tokenVisibleMethods = (data) => {
//     const param = data
//     return request.get('loginController/selectkUserStatus?tokenval=' + param)
// };

// /* 导出 */
// export const exportStaffexcelMethods = (data) => {
//     const param = data;
//     var url = 'hkUserinfo/exportexcel'
//     return request.post(url, param, { responseType: 'arraybuffer' })
// };

// /* 导入 */
// export const importexcelMethods = (data) => {
//     const param = data;
//     return request.post('hkUserinfo/importexcels', param);
// };