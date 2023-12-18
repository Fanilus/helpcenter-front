import React, { useEffect } from 'react';

import { COLORS } from '../../../../models/colors';

import useWelcomePage from '../../hooks/useWelcomePage';
import WelcomePageService from '../../../../services/welcome-page.service';
import { Table } from './index';
import ETH from '../../../../components/Icons/ETHIconSecond/ETHIconSecond';
import BTC from '../../../../components/Icons/BTCIcon/BTCIcon';
import { LoadingSpinner } from '../../../../components/_DEPRECATED';

const TableContent = () => {
  const { currentETHOffer, currentWBTCOffer, loading, error } =
    useWelcomePage();

  useEffect(() => {
    WelcomePageService.getData();
  }, []);

  return (
    <Table>
      <Table.Head>
        <Table.Head.Tr
          grid_template_columns={'1fr 1fr 1fr 1fr 0.5fr'}
          mobile_grid_template_columns={'1fr 1.5fr 1fr 1.5fr '}
        >
          <Table.Th align={'left'}>Asset</Table.Th>
          <Table.Th align={'left'}>Market price</Table.Th>
          <Table.Th align={'left'}>Our offer*</Table.Th>
          <Table.Th align={'left'} color={COLORS.LEMON}>
            You will save
          </Table.Th>
          <Table.Th align={'left'}></Table.Th>
        </Table.Head.Tr>
      </Table.Head>

      <Table.Body hr>
        {loading && <LoadingSpinner style={{ margin: 'auto' }} />}
        {!loading && !error && currentETHOffer && currentWBTCOffer && (
          <>
            <Table.Tr
              grid_template_columns={'1fr 1fr 1fr 1fr 0.5fr'}
              mobile_grid_template_columns={'1fr 1.5fr 1fr 1fr 0.5fr'}
            >
              <Table.Td align={'left'} adaptive>
                <ETH />
                ETH
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                {currentETHOffer.market_price}
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                {currentETHOffer.offer_price}
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                {currentETHOffer.save_percent}%
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                ${currentETHOffer.prices_difference}
              </Table.Td>
            </Table.Tr>
            <Table.Tr
              grid_template_columns={'1fr 1fr 1fr 1fr 0.5fr'}
              mobile_grid_template_columns={'1fr 1.5fr 1fr 1fr 0.5fr'}
            >
              <Table.Td align={'left'} adaptive>
                <BTC />
                BTC
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                {currentWBTCOffer.market_price}
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                {currentWBTCOffer.offer_price}
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                {currentWBTCOffer.save_percent}%
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                ${currentWBTCOffer.prices_difference}
              </Table.Td>
            </Table.Tr>
          </>
        )}
      </Table.Body>
    </Table>
  );
};

export default TableContent;
