import { darmenContent1 } from './darmen-1';
import { darmenContent2 } from './darmen-2';
import { energieContent1 } from './energie-1';
import { energieContent2 } from './energie-2';
import { hormonenContent1 } from './hormonen-1';
import { hormonenContent2 } from './hormonen-2';
import { huidContent } from './huid';
import { onregelmatigeCyclusContent } from './onregelmatige-cyclus';
import type { ComplaintContentMap } from './types';

export const complaintContent: ComplaintContentMap = {
  ...onregelmatigeCyclusContent,
  ...hormonenContent1,
  ...hormonenContent2,
  ...darmenContent1,
  ...darmenContent2,
  ...energieContent1,
  ...energieContent2,
  ...huidContent,
};
