import React, { useState, useEffect, useRef } from 'react';
import AnimatedNumber from 'react-animated-numbers';
import * as TymioUI from '../../../../components';
import usePreloader from '../../../../hooks/usePreloader';
import { useStatistics } from '../hooks';
import * as Styled from '../styled';

const Statistics = () => {
  const { error, loading, statistics } = useStatistics();
  const { loaded } = usePreloader();
  const [animatedStatistics, setAnimatedStatistics] = useState(null);
  const blockRef = useRef(null);

  useEffect(() => {
    if (loaded) {
      const handleScroll = () => {
        if (blockRef.current) {
          const { top, bottom } = blockRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (top + 150 < windowHeight && bottom > 350) {
            setAnimatedStatistics(statistics);
          }
        }
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [statistics, loaded]);

  return (
    <>
      {loading && <TymioUI.LoadingSpinner />}
      {!error && statistics && (
        <Styled.Statistics ref={blockRef}>
          <TymioUI.Grid
            alignItems={'flex-top'}
            className="grid"
            columns={5}
            gap={'167px'}
            xsColumns={2}
          >
            <TymioUI.GridElem
              textAlign={'center'}
              column={1}
              xsColumn={1}
              xsRow={1}
            >
              <Styled.Titles>
                {animatedStatistics && (
                  <>
                    $
                    <AnimatedNumber
                      animateToNumber={
                        animatedStatistics.formatted.totalTradedVolume
                      }
                    />
                    {animatedStatistics.totalTradedVolume > 999999 && 'M'}
                    {animatedStatistics.totalTradedVolume > 999 &&
                      animatedStatistics.totalTradedVolume < 1000000 &&
                      'K'}
                  </>
                )}
              </Styled.Titles>
              <Styled.Subtitle>
                Total Traded <br /> Volume
              </Styled.Subtitle>
            </TymioUI.GridElem>
            <TymioUI.GridElem
              textAlign={'center'}
              column={2}
              xsColumn={2}
              xsRow={1}
            >
              <Styled.Titles>
                {animatedStatistics && (
                  <>
                    $
                    <AnimatedNumber
                      animateToNumber={
                        animatedStatistics.formatted.totalValueLocked
                      }
                    />
                    {animatedStatistics.totalValueLocked > 999 && 'K'}
                  </>
                )}
              </Styled.Titles>
              <Styled.Subtitle>
                Total Value <br /> Locked
              </Styled.Subtitle>
            </TymioUI.GridElem>
            <TymioUI.GridElem
              textAlign={'center'}
              column={3}
              xsColumn={1}
              xsRow={3}
            >
              <Styled.Titles>
                {animatedStatistics && (
                  <>
                    <AnimatedNumber
                      animateToNumber={animatedStatistics.formatted.totalOrders}
                    />
                    {animatedStatistics.totalOrders > 999 && 'K'}
                  </>
                )}
              </Styled.Titles>
              <Styled.Subtitle>Total orders</Styled.Subtitle>
            </TymioUI.GridElem>
            <TymioUI.GridElem
              textAlign={'center'}
              column={4}
              xsColumn={2}
              xsRow={2}
            >
              <Styled.Titles>
                {animatedStatistics && (
                  <>
                    <AnimatedNumber
                      animateToNumber={animatedStatistics.formatted.averageAPY}
                    />
                    %
                  </>
                )}
              </Styled.Titles>
              <Styled.Subtitle>
                Average <br /> APR
              </Styled.Subtitle>
            </TymioUI.GridElem>
            <TymioUI.GridElem
              textAlign={'center'}
              column={5}
              xsColumn={1}
              xsRow={2}
            >
              <Styled.Titles>
                {animatedStatistics && (
                  <>
                    $
                    <AnimatedNumber
                      animateToNumber={
                        animatedStatistics.formatted.totalPremiumGenerated
                      }
                    />
                    {animatedStatistics.totalPremiumGenerated > 999 && 'K'}
                  </>
                )}
              </Styled.Titles>
              <Styled.Subtitle>
                Total Premium <br />
                Generated
              </Styled.Subtitle>
            </TymioUI.GridElem>
          </TymioUI.Grid>
        </Styled.Statistics>
      )}
    </>
  );
};

export default Statistics;
