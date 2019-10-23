import http from '@/utils/http';
import { FunctionScheme } from './apis.d';

export const getOccupationBoardStatistics: FunctionScheme = () => http.get('/dashboard/position');

export const getResumeBoardStatistics: FunctionScheme = () => http.get('/dashboard/resume');
