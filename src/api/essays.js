import request from '@/utils/request';

export const addEssaysMethods = (data) => {
    const param = data
    return request.post('api/addEssays', param)
};
export const selectEssaysMethods = (data) => {
    const param = data
    return request.post('api/selectEssays', param)
};

export const deleteOneEssays = (data) => {
    const param = data
    return request.post('api/deleteOneEssays', param)
};