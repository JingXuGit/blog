import request from '@/utils/request';

export const addArticleMethods = (data) => {
    const param = data
    return request.post('api/addArticle', param)
};
export const selectArticleMethods = (data) => {
    const param = data
    return request.post('api/selectArticle', param)
};
export const selectOneArticle = (data) => {
    const param = data
    return request.post('api/selectOneArticle', param)
};
export const deleteOneArticle = (data) => {
    const param = data
    return request.post('api/deleteOneArticle', param)
};