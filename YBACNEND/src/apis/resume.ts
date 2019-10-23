import http from '@/utils/http';
import { FunctionScheme } from './apis.d';

export const getResumes: FunctionScheme = (id, params) => http.get(`/position/${id}/resume`, { params });

export const confirmEmploy: FunctionScheme = (positionId, resumeId) => http.put(`/position/${positionId}/resume/${resumeId}/employed`);

export const confirmInterview: FunctionScheme = (positionId, resumeId) => http.put(`/position/${positionId}/resume/${resumeId}/info`);

export const confirmOffer: FunctionScheme = (positionId, resumeId) => http.put(`/position/${positionId}/resume/${resumeId}/offer`);

export const confirmProcessedHistory: FunctionScheme = (positionId, resumeId) => http.put(`/position/${positionId}/resume/${resumeId}/processedHistory`);

export const confirmUnfit: FunctionScheme = (positionId, resumeId) => http.put(`/position/${positionId}/resume/${resumeId}/unfit`);

export const getResumeDetail: FunctionScheme = id => http.get(`/resume/${id}`);

export const getResumeAwardCert: FunctionScheme = (id, certId) => http.get(`/resume/${id}/award/${certId}/cert/url`);

export const getResumeAttachment: FunctionScheme = id => http.get(`/resume/${id}/file/url`);

export const getResumeSkillCert: FunctionScheme = (id, certId) => http.get(`/resume/${id}/skill/${certId}/cert/url`);

export const getResumeStatistics: FunctionScheme = () => http.get('/resume/processedStats');
