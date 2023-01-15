import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.locale('ru');
dayjs.extend(utc);
dayjs.extend(customParseFormat);

export const getDateNow = (): Dayjs => dayjs();

export const formatDate = (unFormattedDate: string, template: string) => (unFormattedDate ? dayjs(unFormattedDate).format(template) : '');
