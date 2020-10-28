import request from '@/utils/request';

export const addcommentMethods = (data) => {
    const param = data
    return request.post('api/addcomment', param)
};
export const replycommentMethods = (data) => {
    const param = data
    return request.post('api/replycomment', param)
};
export const selectcommentMethods = (data) => {
    const param = data
    return request.post('api/selectcomment', param)
};
export const selectReplyMethods = (data) => {
    const param = data
    return request.post('api/selectReply', param)
};
export const praseMethods = (data) => {
    const param = data
    return request.post('api/prase', param)
};