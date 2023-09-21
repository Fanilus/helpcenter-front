import React from 'react';

import * as TymioUI from '../components';
import * as Styled from '../shared/styled';

const SELL_HIGHT_LINK = process.env.REACT_APP_SELL_HIGHT_LINK;

const SellHigh = () => {
  const handleLinkOpen = () => {
    window.open(SELL_HIGHT_LINK, '_blank');
  };

  return (
    <Styled.WrapperCard>
      <TymioUI.Card>
        <Styled.TitleSell>Sell high</Styled.TitleSell>
        <Styled.ListTitle>
          <TymioUI.ETHIcon />
          Your have ETH and ready <br />
          to sell it above the market price
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

export default SellHigh;
