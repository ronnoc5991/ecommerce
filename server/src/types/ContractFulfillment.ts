import { Contract, ContractResponse } from 'shared';

export type ContractFulfillment<T extends Contract<any, any, any>> = Promise<
  ContractResponse<T>
>;
