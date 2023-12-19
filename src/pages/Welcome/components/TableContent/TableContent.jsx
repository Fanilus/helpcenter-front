import React, { useEffect } from 'react';

import { COLORS } from '../../../../models/colors';

import useWelcomePage from '../../hooks/useWelcomePage';
import WelcomePageService from '../../../../services/welcome-page.service';
import { Table } from './index';
import ETH from '../../../../components/Icons/ETHIconSecond/ETHIconSecond';
import BTC from '../../../../components/Icons/BTCIcon/BTCIcon';
import { LoadingSpinner } from '../../../../components/_DEPRECATED';
import * as UI from '../../../../components';

const DIRECTION = process.env.REACT_APP_WELCOME_PAGE_DIRECTION;

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
          grid_template_columns={'1fr 1fr 1fr 1fr'}
          mobile_grid_template_columns={'1fr 1.5fr 1fr 1.5fr'}
        >
          <Table.Th align={'left'}>Asset</Table.Th>
          <Table.Th align={'left'}>Market price</Table.Th>
          <Table.Th align={'left'}>Our offer</Table.Th>
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
              grid_template_columns={'1fr 1fr 1fr 1fr'}
              mobile_grid_template_columns={'1fr 1.5fr 1fr 1fr'}
            >
              <Table.Td align={'left'} adaptive>
                <ETH style={{ marginRight: '10px' }} />
                ETH
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                ${currentETHOffer.market_price}
              </Table.Td>
              <Table.Td align={'left'} alignItems={'flex-start'} adaptive>
                ${currentETHOffer.offer_price}
                <UI.Tooltip
                  icon={true}
                  text={`${
                    currentETHOffer.target_price
                  }$ (${DIRECTION} price) ${DIRECTION === 'sell' ? '+' : '-'} ${
                    currentETHOffer.receive
                  }$ (yield) = ${
                    currentETHOffer.offer_price
                  }$ (effective price)`}
                  size={20}
                  position={'top'}
                  style={{ marginLeft: '5px' }}
                />
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                {currentETHOffer.save_percent}%
              </Table.Td>
            </Table.Tr>
            <Table.Tr
              grid_template_columns={'1fr 1fr 1fr 1fr'}
              mobile_grid_template_columns={'1fr 1.5fr 1fr 1fr'}
            >
              <Table.Td align={'left'} adaptive>
                <BTC style={{ marginRight: '10px' }} />
                BTC
              </Table.Td>
              <Table.Td align={'left'} adaptive>
                ${currentWBTCOffer.market_price}
              </Table.Td>
              <Table.Td align={'left'} alignItems={'flex-start'} adaptive>
                ${currentWBTCOffer.offer_price}
                <UI.Tooltip
                  icon={true}
                  text={`${
                    currentWBTCOffer.target_price
                  }$ (${DIRECTION} price) ${DIRECTION === 'sell' ? '+' : '-'} ${
                    currentWBTCOffer.receive
                  }$ (yield) = ${
                    currentWBTCOffer.offer_price
                  }$ (effective price)`}
                  size={20}
                  position={'top'}
                  style={{ marginLeft: '5px' }}
                />
              </Table.Td>
              <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
                {currentWBTCOffer.save_percent}%
              </Table.Td>
            </Table.Tr>
          </>
        )}
      </Table.Body>
    </Table>
  );
};

export default TableContent;
