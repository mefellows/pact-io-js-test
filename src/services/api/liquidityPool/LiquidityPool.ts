// @TODO Note, this is the placeholder for LiquidityPool API endpoints
// @ts-ignore
import axios, * as others from 'axios';

const endpoint = '/frontoffice/api/liquidity-pool/';

export const getTotalPayout = async (userId: string) => {
  const response = await axios.get(`${endpoint}get-total-payout`, { params: userId });
  return response.data;
};
