import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { Grid, GridElem } from '../../../../components/_DEPRECATED';

const Stats = ({ statistics }) => {
  return (
    <Grid
      template={'8fr 7fr 6fr 7fr 8fr'}
      lgColumns={4}
      mdColumns={2}
      gap={'30px'}
      lgGap={'15px'}
    >
      <GridElem
        column={1}
        row={1}
        lgColumn={1}
        lgRow={1}
        mdColumn={1}
        mdRow={1}
        textAlign={'left'}
      >
        <UI.Animation delay={0.8} distance={'25px'}>
          <Styled.Card>
            <UI.HH mobile={true}>
              {statistics && (
                <>
                  ${statistics.formatted.totalTradedVolume}
                  {statistics.totalTradedVolume > 999999 && 'M'}
                  {statistics.totalTradedVolume > 999 &&
                    statistics.totalTradedVolume < 1000000 &&
                    'K'}
                </>
              )}
            </UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total Traded Volume
            </UI.Paragraph>
          </Styled.Card>
        </UI.Animation>
      </GridElem>

      <GridElem
        column={2}
        row={1}
        lgColumn={2}
        lgRow={1}
        mdColumn={2}
        mdRow={1}
        textAlign={'left'}
      >
        <UI.Animation delay={0.87} distance={'25px'}>
          <Styled.Card>
            <UI.HH mobile={true}>
              {statistics && (
                <>
                  ${statistics.formatted.totalValueLocked}
                  {statistics.totalValueLocked > 999 && 'K'}
                </>
              )}
            </UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total Value Locked
            </UI.Paragraph>
          </Styled.Card>
        </UI.Animation>
      </GridElem>

      <GridElem
        column={3}
        row={1}
        lgColumn={3}
        lgRow={1}
        mdColumn={1}
        mdRow={2}
        textAlign={'left'}
      >
        <UI.Animation delay={0.93} distance={'25px'}>
          <Styled.Card>
            <UI.HH mobile={true}>
              {statistics && (
                <>
                  {statistics.formatted.totalOrders}
                  {statistics.totalOrders > 999 && 'K'}
                </>
              )}
            </UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total orders
            </UI.Paragraph>
          </Styled.Card>
        </UI.Animation>
      </GridElem>

      <GridElem
        column={4}
        row={1}
        lgColumn={4}
        lgRow={1}
        mdColumn={2}
        mdRow={2}
        textAlign={'left'}
      >
        <UI.Animation delay={1.5} distance={'25px'}>
          <Styled.Card>
            <UI.HH mobile={true}>
              {statistics && (
                <>{Math.round(statistics.averageAPY * 10) / 10}%</>
              )}
            </UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Average APR
            </UI.Paragraph>
          </Styled.Card>
        </UI.Animation>
      </GridElem>

      <GridElem
        column={5}
        row={1}
        lgColumn={'span 4'}
        lgRow={2}
        mdColumn={'span 2'}
        mdRow={3}
        textAlign={'left'}
      >
        <UI.Animation delay={1.6} distance={'25px'}>
          <Styled.Card>
            <UI.HH mobile={true}>
              {statistics && (
                <>
                  ${statistics.formatted.totalPremiumGenerated}
                  {statistics.totalPremiumGenerated > 999 && 'K'}
                </>
              )}
            </UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total Premium Generated
            </UI.Paragraph>
          </Styled.Card>
        </UI.Animation>
      </GridElem>
    </Grid>
  );
};

export default Stats;
