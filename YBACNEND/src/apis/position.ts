import http from '@/utils/http';
import { FunctionScheme } from './apis.d';

export const getPositions: FunctionScheme = (params = {}) => http.get('/position', { params });

export const createPosition: FunctionScheme = params => http.post('/position', params);

export const updatePosition: FunctionScheme = (id, params) => http.put(`/position/${id}`, params);

export const getPositionDetail: FunctionScheme = id => http.get(`/position/${id}`);

export const getPositionOnline: FunctionScheme = id => http.put(`/position/${id}/online`);

export const getPositionOffline: FunctionScheme = id => http.put(`/position/${id}/offline`);

export const refreshPosition: FunctionScheme = id => http.post(`/position/${id}/refresh`);

export const getTrashPositions: FunctionScheme = params => http.get('/trash/position/', { params });

export const deleteTrashPositions: FunctionScheme = id => http.delete(`/trash/position/${id}`);

export const recoverTrashPosition: FunctionScheme = id => http.put(`/trash/position/${id}/revert`);
