import React, { useEffect } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { Grid, GridElem } from '../../../../components/_DEPRECATED';
import useStatistics from './hooks/useStatistics';

const Stats = () => {
  const {
    // error, loading,
    statistics,
  } = useStatistics();

  useEffect(() => {
    console.log(statistics);
  }, [statistics]);

  return (
    <Grid
      template={'8fr 7fr 6fr 7fr 8fr'}
      lgColumns={4}
      mdColumns={2}
      gap={'30px'}
      lgGap={'15px'}
    >
      <UI.Animation delay={1.2} distance={'25px'}>
        <GridElem
          column={1}
          row={1}
          lgColumn={1}
          lgRow={1}
          mdColumn={1}
          mdRow={1}
          textAlign={'left'}
        >
          <Styled.Card>
            <UI.HH mobile={true}>$3.7M</UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total TradedVolume
            </UI.Paragraph>
          </Styled.Card>
        </GridElem>
      </UI.Animation>
      <UI.Animation delay={1.3} distance={'25px'}>
        <GridElem
          column={2}
          row={1}
          lgColumn={2}
          lgRow={1}
          mdColumn={2}
          mdRow={1}
          textAlign={'left'}
        >
          <Styled.Card>
            <UI.HH mobile={true}>$93.1K</UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total ValueLocked
            </UI.Paragraph>
          </Styled.Card>
        </GridElem>
      </UI.Animation>
      <UI.Animation delay={1.4} distance={'25px'}>
        <GridElem
          column={3}
          row={1}
          lgColumn={3}
          lgRow={1}
          mdColumn={1}
          mdRow={2}
          textAlign={'left'}
        >
          <Styled.Card>
            <UI.HH mobile={true}>751</UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total orders
            </UI.Paragraph>
          </Styled.Card>
        </GridElem>
      </UI.Animation>
      <UI.Animation delay={1.5} distance={'25px'}>
        <GridElem
          column={4}
          row={1}
          lgColumn={4}
          lgRow={1}
          mdColumn={2}
          mdRow={2}
          textAlign={'left'}
        >
          <Styled.Card>
            <UI.HH mobile={true}>50.2%</UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Average APR
            </UI.Paragraph>
          </Styled.Card>
        </GridElem>
      </UI.Animation>
      <UI.Animation delay={1.6} distance={'25px'}>
        <GridElem
          column={5}
          row={1}
          lgColumn={'span 4'}
          lgRow={2}
          mdColumn={'span 2'}
          mdRow={3}
          textAlign={'left'}
        >
          <Styled.Card>
            <UI.HH mobile={true}>$40.5K</UI.HH>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Total Premium Generated
            </UI.Paragraph>
          </Styled.Card>
        </GridElem>
      </UI.Animation>
    </Grid>
  );
};

export default Stats;
