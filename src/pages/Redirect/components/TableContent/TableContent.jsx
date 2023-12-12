import React from 'react';

import { COLORS } from '../../../../models/colors';
import * as UI from '../../../../components/index';

import { Table } from './index';
import ETH from '../../../../components/Icons/ETHIconSecond/ETHIconSecond';
import BTC from '../../../../components/Icons/BTCIcon/BTCIcon';

const TableContent = () => {
  return (
    <Table padding={'0'} color={'inherit'}>
      <Table.Head>
        <Table.Head.Tr
          grid_template_columns={'2fr 2fr 2fr 2fr 2fr'}
          // mobile_grid_template_columns={'1fr 2.5fr 1.5fr 1.5fr'}
        >
          <Table.Th align={'left'}>
            <UI.Paragraph size={'large'}>Asset</UI.Paragraph>
          </Table.Th>
          <Table.Th align={'left'}>
            <UI.Paragraph size={'large'}>Market price</UI.Paragraph>
          </Table.Th>
          <Table.Th align={'left'}>
            <UI.Paragraph size={'large'}>Our offer*</UI.Paragraph>
          </Table.Th>
          <Table.Th align={'left'}>
            <UI.Paragraph color={COLORS.LEMON} size={'large'}>
              You will save
            </UI.Paragraph>
          </Table.Th>
          <Table.Th align={'left'}></Table.Th>
        </Table.Head.Tr>
      </Table.Head>
      <Table.Body hr>
        <Table.Tr
          grid_template_columns={'2fr 2fr 2fr 2fr 2fr'}
          // mobile_grid_template_columns={'1fr 2.5fr 1.5fr 1.5fr'}
        >
          <Table.Td align={'left'} adaptive>
            <ETH />
            ETH
          </Table.Td>
          <Table.Td align={'left'} adaptive>
            2,050
          </Table.Td>
          <Table.Td align={'left'} adaptive>
            1,900
          </Table.Td>
          <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
            15%
          </Table.Td>
          <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
            $150
          </Table.Td>
        </Table.Tr>
        <Table.Tr
          grid_template_columns={'2fr 2fr 2fr 2fr 2fr'}
          // mobile_grid_template_columns={'1fr 2.5fr 1.5fr 1.5fr'}
        >
          <Table.Td align={'left'} adaptive>
            <BTC />
            BTC
          </Table.Td>
          <Table.Td align={'left'} adaptive>
            35,000
          </Table.Td>
          <Table.Td align={'left'} adaptive>
            34,900
          </Table.Td>
          <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
            7%
          </Table.Td>
          <Table.Td align={'left'} color={COLORS.LEMON} adaptive>
            $330
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table>
  );
};

export default TableContent;
