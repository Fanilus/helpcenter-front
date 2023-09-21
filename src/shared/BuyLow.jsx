import React from 'react';

import * as TymioUI from '../components';
import * as Styled from '../shared/styled';

const BUY_LOW_LINK = process.env.REACT_APP_BUY_LOW_LINK;

const BuyLow = () => {
  const handleLinkOpen = () => {
    window.open(BUY_LOW_LINK, '_blank');
  };

  return (
    <Styled.WrapperCard>
      <TymioUI.Card>
        <Styled.TitleSell>Buy low</Styled.TitleSell>
        <Styled.ListTitle>
          <TymioUI.USDCIcon />
          Your have USDC and ready <br />
          to buy ETH below market price
        </Styled.ListTitle>
        <Styled.List>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Connect your MetaMask wallet
          </Styled.ListItems>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Set your price
          </Styled.ListItems>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Set contract time period for lock up
          </Styled.ListItems>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Check yield, contract text and confirm
          </Styled.ListItems>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Relax and wait until agreed date
          </Styled.ListItems>
          <Styled.ListItems>
            <TymioUI.CheckMarck />
            Receive fixed yield and either ETH <br /> or USDC back directly to
            your wallet
          </Styled.ListItems>
        </Styled.List>
      </TymioUI.Card>
      <TymioUI.Button main onClick={handleLinkOpen}>
        Start earning
      </TymioUI.Button>
    </Styled.WrapperCard>
  );
};

export default BuyLow;
