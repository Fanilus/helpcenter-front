import React, { useEffect } from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

import { TYPOGRAPHY_SIZE } from '../../models/types';
import { useLocation } from 'react-router-dom';

const APP_LINK = process.env.REACT_APP_APP_LINK;

const Terms = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);
  return (
    <Styled.Terms>
      <UI.Container>
        <UI.H1>Terms of use</UI.H1>
        <Styled.SubTitle>
          <UI.H2>TYMIO User Terms of Service</UI.H2>
          <UI.Paragraph>Last Updated: December 6, 2022</UI.Paragraph>
        </Styled.SubTitle>
        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>1. Introduction</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Welcome to https://app.tymio.com a website-hosted user
                interface, and any associated software or services (collectively
                the "Interface") provided by TYMIO (“TYMIO”, "we", "our", or
                "us"). The Interface provides access to a protocol on the
                blockchain that allows users to transact certain digital assets
                (the "Protocol"). The TYMIO User Terms of Service is an
                agreement (“Agreement” or “Terms”) between TYMIO, the owner and
                operator of the Interface, and you (“you”, “your” or “user(s)”),
                a user of the Interface. Where you enter into this Agreement on
                behalf of a legal entity or organization you represent and
                warrant that you have the authority to bind such legal entity or
                organization to this Agreement.
              </UI.Paragraph>
              <UI.Paragraph size={'large'}>
                You must read this Agreement carefully. By accessing or using
                the Interface, you signify that you have read, understand, and
                agree to be bound by this Agreement in its entirety. If you do
                not agree to these Terms, you are not authorized to access or
                use the Interface.
              </UI.Paragraph>
              <UI.Paragraph size={'large'}>
                OUR INTERFACE IS NOT OFFERED TO PERSONS OR ENTITIES WHO RESIDE
                IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR
                HAVE A REGISTERED OFFICE IN THE UNITED STATES OF AMERICA
                (COLLECTIVELY, “US PERSONS”). MOREOVER, OUR INTERFACE IS NOT
                OFFERED TO PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF,
                ARE LOCATED IN, ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE
                IN ANY RESTRICTED TERRITORY, DEFINED BELOW (ANY SUCH PERSON OR
                ENTITY FROM A RESTRICTED TERRITORY, A “RESTRICTED PERSON”). WE
                DO NOT MAKE EXCEPTIONS; THEREFORE, IF YOU ARE A US PERSON OR
                RESTRICTED PERSON DO NOT ATTEMPT TO USE OUR PROTOCOL OR ACCESS
                OR ATTEMPT TO ACCESS THE INTERFACE. USE OF A VIRTUAL PRIVATE
                NETWORK (“VPN”) TO CIRCUMVENT THE RESTRICTIONS SET FORTH HEREIN
                IS PROHIBITED.WE RESERVE THE RIGHT TO RESTRICT ANY USERʼS ACCESS
                TO THE INTERFACE SUBJECT TO ANY RESTRICTIONS WE MAY SET FORTH IN
                THIS AGREEMENT.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>2. Use and Eligibility</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                As a condition to accessing or using the Interface, you
                represent, warrant, and covenant to TYMIO the following:
              </UI.Paragraph>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>1.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    If you are entering into these Terms to access the Protocol
                    or, in the future, to access the Protocol, then you are not
                    a US Person;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>2.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You are not a resident, national, or agent of Belarus, Burma
                    (Myanmar), Cote D'Ivoire (Ivory Coast), Cuba, Democratic
                    Republic of Congo, Iran, Iraq, Liberia, North Korea, Sudan,
                    Syria, Zimbabwe, or any other country to which the United
                    States, the United Kingdom or the European Union embargoes
                    goods or imposes similar sanctions (collectively,
                    “Restricted Territories” or singularly a “Restricted
                    Territory”);
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>3.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You are not a member of any sanctions list or equivalent
                    maintained by the United States government, the United
                    Kingdom government, the European Union, or the United
                    Nations (collectively, “Sanctions Lists Persons”);
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>4.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You do not intend to transact with any Restricted Person or
                    Sanctions List Person;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>5.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You only will transfer legally-obtained Digital Assets
                    (defined below) that belong to you (or you are legally
                    authorized to use), when using, transacting, or connecting
                    to the Interface;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>6.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You shall maintain the security and confidentiality of your
                    private keys associated with any Blockchain Technology
                    (defined below) address, passwords, and API keys.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>7.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Your access to the Interface is not (a) prohibited by and
                    does not otherwise violate or assist you to violate any
                    domestic or foreign law, rule, statute, regulation, by-law,
                    order, protocol, code, decree, or another directive,
                    requirement, or guideline, published or in force that
                    applies to or is otherwise intended to govern or regulate
                    any person, property, transaction, activity, event or other
                    matter, including any rule, order, judgment, directive or
                    other requirement or guideline issued by any domestic or
                    foreign federal, provincial or state, municipal, local or
                    other governmental, regulatory, judicial or administrative
                    authority having jurisdiction over TYMIO, you, the Interface
                    or Protocol, or as otherwise duly enacted, enforceable by
                    law, the common law or equity (collectively, “Applicable
                    Laws”); and (b) contributing to or facilitating any illegal
                    activity;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>8.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You will obey all Applicable Laws in connection with using
                    the Interface, and you will not use the Interface or
                    Protocol if any Applicable Laws prohibit you from doing so;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>9.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You understand the inherent risks associated with Blockchain
                    Technology, the Protocol, and the Interface, which may
                    result in the loss of some or all of your Digital Assets;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>10.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You have sufficient knowledge, market sophistication,
                    professional advice, and experience to make your evaluation
                    of the merits and risks of any transaction conducted in
                    connection with the Interface, Protocol, or any Digital
                    Asset;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>11.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You accept all consequences of using the Interface,
                    including the risk that you may lose access to your Digital
                    Assets indefinitely;
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>11.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    You are solely responsible for evaluating and understanding
                    any risks related to any transactions involving the
                    Interface, Protocol, and your Digital Assets including, but
                    not limited to, long or short positions using the Protocol;
                    and you do not, and will not, use VPN software or any other
                    privacy or anonymization tools or techniques to circumvent,
                    or attempt to circumvent, any restrictions that apply to the
                    Interface.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>3. Age</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You represent and warrant that you are at least the age of
                majority in your jurisdiction (e.g., eighteen years old) and
                have the full right, power, and authority to enter into and
                comply with the terms and conditions of this Agreement on behalf
                of yourself or any company or legal entity for which you may
                access or use the Interface.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>4. Privacy</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We care about your privacy. Please note that when you use the
                Interface, you are interacting with Blockchain Technology, which
                provides transparency into your transactions. TYMIO does not
                control and is not responsible for any information you make
                public on Blockchain Technology by either using the Interface or
                accessing the Protocol.
              </UI.Paragraph>
              <UI.Paragraph size={'large'}>
                The only information we collect from you is your blockchain
                wallet address, completed transaction hashes, and the digital
                asset names, symbols, or other blockchain identifiers of the
                digital assets that you use for transactions. We do not collect
                any personal information from you (e.g., your name or other
                identifiers that can be linked to you). We do, however, use
                third-party service providers, like Alchemy and Fathom
                Analytics. We do not control how these third parties handle your
                data and you should review their privacy policies to understand
                how they collect, use, and share your personal information.
              </UI.Paragraph>
              <UI.Paragraph size={'large'}>
                We use the Digital wallet address that you use to connect with
                the Interface to detect, prevent, and mitigate financial crime
                and other illicit or harmful activities on the Interface. For
                these purposes, we may share the Digital wallet address we
                collect with blockchain analytics providers. We share
                information with these service providers only so that they can
                help us promote the safety, security, and integrity of the
                Interface. We do not retain the information we collect any
                longer than necessary for these purposes.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>5. Prohibited Activity</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You may not use the Interface to engage in the following
                categories of activity set forth below or any activities that we
                determine in our sole discretion may harm us or a third party
                (“Prohibited Uses”). The Prohibited Uses include but are not
                limited to:
              </UI.Paragraph>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>1.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any activity that violates any relevant and applicable
                    anti-money laundering and anti-terrorist financing laws and
                    sanctions programs, such as, without limitation, the Bank
                    Secrecy Act and the U.S. Department of Treasuryʼs Office of
                    Foreign Asset Controls (“Financing Laws”). By using the
                    Interface, you agree that we must comply with Applicable Law
                    including any Financing Laws, which may require us to, upon
                    request by government agencies, take certain actions or
                    provide information which we deem necessary, which may not
                    be in your best interests.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>2.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any transactions involving items that infringe or violate
                    any copyright, trademark, right of publicity or privacy or
                    any other proprietary right under Applicable Law, including
                    but not limited to, sales, distribution, or access to
                    counterfeit software, or other licensed materials without
                    the appropriate authorization from the rights holder; use of
                    TYMIOʼs Intellectual Property (defined below) without
                    express consent from TYMIO.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>3.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any activity that seeks to interfere with or compromise the
                    integrity, security, or proper functioning of the Interface
                    or computer, server, network, personal device, or other
                    information technology system, including, but not limited
                    to, the deployment of viruses; denial-of-service attacks;
                    use of any robot, spider, crawler, scraper or other
                    automated means to extract or export data collected through
                    the Interface; and conduct that imposes, or may impose, an
                    unreasonable or disproportionately large load on our
                    infrastructure.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>4.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any activity that seeks to defraud us or any other person or
                    entity, including, but not limited to, providing any false,
                    inaccurate, or misleading information in order to unlawfully
                    obtain the property of another, or any action that implies
                    an untrue endorsement by or affiliation with TYMIO.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>5.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any activity that violates any Applicable Law including but
                    not limited to laws or regulations concerning the integrity
                    of trading markets such as manipulative tactics like
                    spoofing or wash trading.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
              <Styled.ListItem>
                <UI.Paragraph size={'large'}>6.</UI.Paragraph>
                <Styled.ItemDesc>
                  <UI.Paragraph size={'large'}>
                    Any use of the Interface to stalk, harass, bully, or harm
                    another individual, or use of the Interface in any way that
                    is defamatory, obscene, invasive, threatening, or harassing.
                  </UI.Paragraph>
                </Styled.ItemDesc>
              </Styled.ListItem>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>6. Access</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                After connecting your Digital Wallet (defined below) and
                complying with all obligations as set forth within this
                Agreement, we may grant you a fully revocable right to access
                and use the Interface in accordance with this Agreement and any
                additional instructions. Your access and use of the Interface is
                limited to yourself, and where you are an organization or entity
                any persons authorized by your organization or entity, you may
                not transfer or assign your access to any third parties. All
                rights not explicitly granted are reserved for TYMIO. Your
                access to use our Interface may be suspended or terminated, If
                you breach any of these access provisions or at our discretion.
                Additionally, we may revoke your access to our Interface if we
                believe that your actions may harm us, our business interests,
                or any third party rights. Failure by us to revoke your access
                does not act as a waiver of your conduct. Nothing in this
                Agreement obligates us to provide you any access or use of the
                Interface.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>7. Digital Wallet</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                In order to access the Protocol through the Interface you may be
                required to connect a digital wallet that is hosted by you or a
                third party (“Digital Wallet”) that contains digital assets
                (“Digital Assets”) legally owned by you. You are solely
                responsible for any transactions or transmissions that occur
                with your Digital Wallet. You agree to notify TYMIO immediately
                of any unauthorized use or other breach of security of your
                Digital Wallet. TYMIO will not be liable for any losses you
                incur as a result of someone else using your Digital Wallet.
                However, you could be held liable for losses incurred by TYMIO
                or another party due to someone else using your Digital Wallet.
                Any Digital Wallets connected to the Interface are
                non-custodial, meaning that TYMIO does not control your Digital
                Wallet and has no access to your private encryption keys. Under
                no circumstances should you attempt to use your Digital Wallet
                to store or transact any non-supported Digital Assets. TYMIO
                assumes no responsibility or liability in connection with any
                usage of your Digital Wallet with the Interface or Protocol, and
                you are solely responsible for your use of your Digital Wallet,
                including transfers of Digital Assets.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>8. No Professional Advice or Fiduciary Duties</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                All information accessible through the Interface is for
                informational purposes only and should not be construed as
                investment, tax, or legal advice. You should not take, or
                refrain from taking, any action based on any information
                contained within the Interface or any other information that we
                make available at any time, including, without limitation, blog
                posts, articles, links to third-party content, discord content,
                news feeds, tutorials, tweets, and videos. Before you make any
                financial, legal, or other decisions involving the Interface,
                you should seek independent professional advice from an
                individual who is licensed and qualified in the area for which
                such advice would be appropriate. We are not your broker,
                intermediary, agent or advisor and have no fiduciary
                relationship or obligation with you when you use the Interface
                or Protocol. We have no liability for any of your activities or
                decisions made while using the Interface. This Agreement is not
                intended to, and does not, create or impose any fiduciary duties
                on us. To the fullest extent permitted by law, you acknowledge
                and agree that we owe no fiduciary duties or liabilities to you
                or any other party, and that to the extent any such duties or
                liabilities may exist at law or in equity, those duties and
                liabilities are hereby irrevocably disclaimed, waived, and
                eliminated. You further agree that the only duties and
                obligations that we owe you are those set out expressly in this
                Agreement.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>9. Interface</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Use of the Interface, in particular for transactions involving
                Digital Assets, are highly volatile, experimental, and may carry
                financial risk. All transaction decisions are made solely by
                you. We accept no responsibility whatsoever for, and will in no
                circumstances be liable to you in connection with, your use of
                the Interface for performing Digital Asset transactions through
                the Protocol, including but not limited to you entering into any
                long short positions or trading Digital Assets. The Interface
                attempts to provide up-to-date information for all Digital
                Assets listed; however, due to the nature of Digital Assets some
                information may be out of date or inaccurate. As you control
                your own Digital Wallet you are solely responsible for verifying
                any information regarding the Digital Assets, the Interface, and
                the Protocol. No representation is made as to the accuracy,
                completeness, or appropriateness for any particular purpose of
                any information distributed via the Interface or otherwise
                encountered when using the Interface. We are not liable to you
                for any inaccurately quoted information including but not
                limited to Digital Asset rates or pricing rates for any Digital
                Assets. Our Interface cannot control the timing of any
                transactions, transaction times are based on your Digital Assets
                and the Blockchain Technology selected, and we are not liable or
                responsible for any delays or any issues due to untimeliness of
                any transactions initiated through the Interface. Use of the
                Interface is at your sole risk and liability.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>10. Protocol</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                The developed Protocol is built through smart contracts and
                subject to the operating procedures of any underlying Blockchain
                Technology. Your use and access to the Protocol is at your sole
                risk and liability. You understand that the Protocol remains
                under development, which creates technological, trading, and
                other risks when using the Interface. These risks include, but
                are not limited to, delays or losses in trades, withdrawals, and
                Digital Assets. You agree that these risks may materially impact
                your transactions while using the Interface, which could result
                in the loss of the transaction or a complete loss of your
                Digital Assets. As the Protocol and Blockchain Technology
                supporting the Protocol are constantly under development we
                cannot guarantee or otherwise ensure full security, fidelity,
                operation, accuracy, or completeness of the Protocol. You
                acknowledge that the Protocol is subject to flaws and that you
                are solely responsible for evaluating any code provided in the
                Protocol, and you represent and warrant that you have the skill
                and ability to evaluate and understand the risks of the
                Protocol. You are solely responsible for your use and access to
                the Protocol which may be accessed via the Interface or through
                other means as permitted by any Blockchain Technology.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>11. Blockchain Technology</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Please be aware that the underlying technology that makes
                blockchain based networks, cryptographic systems, and smart
                contracts available (collectively “Blockchain Technology”) can
                be used, copied, modified, and distributed by third parties.
                TYMIO does not control or operate the Blockchain Technology, and
                we assume no responsibility for the operation, functionality, or
                security of the Blockchain Technology. Blockchain Technology is
                subject to change that is out of our control, which could
                materially affect the Interface, the Protocol, and the value,
                functionality, availability, and use of any Digital Assets. It
                is your responsibility to make yourself aware of upcoming
                operating changes, and you must carefully consider publicly
                available information in determining whether to continue to use
                the Interface, transact with any Protocols using your Digital
                Assets, or otherwise interact with the Blockchain Technology
                through the Interface. Blockchain Technology is currently under
                development, and this creates uncertainty relating to Digital
                Assets and transactions through the Interface. You acknowledge
                and accept the risks of using your Digital Assets with our
                Interface that relies on Blockchain Technology and agree that
                TYMIO is not responsible for any changes to any Blockchain
                Technology that may cause you to experience a complete loss of
                value or access to your Digital Assets. Such changes may
                include, but are not limited, to forks, rollbacks, changes to
                operating rules, breaches of security, and outages.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>12. Fees and Costs</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Where you use the Interface, including the Protocol, you may be
                required to pay a fee where necessary, including but not limited
                to any third party fees. You are solely responsible for paying
                all fees, and we are not liable to you for any delays in any
                transactions where you have failed to pay any fees. Although we
                attempt to provide accurate fee information, this information
                reflects our estimate of fees. Such fees may vary from the
                actual fees that you pay to use the Protocol through the
                Interface and/or the gas fees required for your Digital Assets.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>13. Gas</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Any transaction involving the Digital Assets through the
                Interface is only completed upon confirmation through the
                Blockchain Technology, and we are not liable for any incomplete
                transactions or delays. You shall be required to maintain an
                adequate amount of Digital Assets to consume as gas (“Gas”)
                within your Digital Wallet to process any requested
                transactions. Where you fail to maintain adequate Gas amounts
                you understand that you will be unable to partake in any
                transactions using your Digital Wallet. We shall not be
                responsible for any delay in any transactions due to inadequate
                Gas within your Digital Wallet. Please be aware that any Gas
                used cannot be returned and all Gas consumption or charges are
                subject to the Blockchain Technology.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>14. Reversals</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Due to the nature of Blockchain Technology you understand and
                agree that using the Interface including interacting with any
                Protocols may be irreversible and you solely undertake this risk
                when using the Interface. As we do not control your Digital
                Wallet we cannot reverse any transactions that occur using your
                Digital Wallet.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>15. Interface Availability and Modification</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We do not guarantee that the Interface will always be available,
                work, or be accessible at any particular time. Specifically, we
                do not guarantee any uptime or specific availability of the
                Interface. You agree and acknowledge that the Interface uses
                remote access and may not always be either 100% reliable or
                available. We reserve the right to alter, modify, update, or
                remove the Interface or any portions thereof, at any time at our
                discretion. We reserve the right to discontinue previously
                offered features or functionality at our sole discretion and
                without prior notice. We are not liable to you or to any third
                party for any modification, suspension, or discontinuance of any
                feature or component of any portion of the Interface. We reserve
                the right to determine the timing and content of software
                updates, which may be automatically updated without notice to
                you. We may conduct such modifications to our Interface for
                security, intellectual property, legal reasons, or various other
                reasons at our discretion, and we are not required to explain
                such modifications or provide you access to previous versions of
                our Interface. Nothing in this section obligates us to take
                measures to update the Interface for security, legal, or other
                purposes.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>16. Third Parties</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We are not a party to any agreements that you may enter with any
                third party. TYMIO EXPRESSLY DISCLAIMS ANY RESPONSIBILITY OR
                LIABILITY FOR ANY DAMAGE, LOSS, OR INJURY ARISING OUT OF YOUR
                INTERACTIONS WITH THIRD PARTIES, INCLUDING ANY THIRD PARTY
                CONTENT (DEFINED BELOW), AND ANY LOSS OR INJURY ARISING OUT OF
                ANY ACT OR OMISSION OF ANY THIRD PARTY OR ANY THIRD PARTY
                CONTENT. TYMIO is not liable for the acts, errors, omissions,
                representations, warranties, breaches, negligence, misconduct of
                any third party or for any personal injuries, death, property
                damage, or other damages including lost profits, or expenses
                resulting from any agreements or interactions with third
                parties.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>17. Third Party Content</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Through the Interface, third party information may be accessed,
                and you may be able to interact with third parties (“Third Party
                Content”). TYMIO does not introduce, endorse, or recommend any
                third parties or any third partyʼs Third Party Content to you or
                vice versa. Any opinions, advice, or information expressed by
                any third party are those of the individual/organization, and
                they do not reflect the opinions of TYMIO. TYMIO does not
                direct, is not an employer of, has no control over, makes no
                representations, and does not guarantee the quality, safety or
                legality of any third party or any Third Party Content. Please
                be aware that any Third Party Content posted may not be
                truthful, accurate, or up-to-date.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>18. Termination</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We may terminate your access to the Interface, Protocol or this
                Agreement with you if we determine that: (1) you have violated
                any Applicable Laws while using our Interface; (2) if you have
                violated this Agreement or any other of our policies; or (3) if
                we believe that any of your actions may harm TYMIO or a third
                party, at our sole decision or discretion. Please be aware that
                upon termination of your access to the Interface, portions of
                our Interface may be immediately disabled. Where termination has
                occurred, portions of this Agreement shall survive and remain in
                full force as stated in the “Survival” section of this
                Agreement.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>19. Taxes</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Depending on the Applicable Laws of your jurisdiction you may be
                required to pay taxes related to your usage of the Interface.
                You agree that you are solely liable for any taxes related to
                your use of the Interface, any Digital Asset transactions, or
                activity involving your Digital Wallet. We shall not be liable
                for any taxes incurred by you under any Applicable Laws.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>20. Fraudulent Transactions</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                If we believe that you have participated in a fraudulent
                transaction we will pursue our claims against you to the fullest
                extent allowed by law and we reserve the right to take any
                action necessary regarding any fraudulent transactions. In the
                event that we believe that a user has completed a fraudulent
                transaction, we will forward your information to the applicable
                law enforcement agency, which may result in civil or criminal
                penalties.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>21. Intellectual Property</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                The name “TYMIO,” “TYMIO, Inc.”, the TYMIO logo, any associated
                software, and the trademarks, marks, and logos contained
                therein, are owned by or licensed to TYMIO or its licensors. The
                Protocol is comprised entirely of open source or
                source-available software running on the public Ethereum
                blockchain. This intellectual property is available under the
                terms of our copyright licenses and our trademark guidelines.
                You agree to not engage in the unauthorized use, access,
                copying, or distribution of the intellectual property, unless we
                have given you express written permission. All rights not
                expressly granted are hereby reserved for TYMIO and its
                licensors.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>22. Assumption of Risk</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                Transacting Digital Assets or using Blockchain Technology
                involves significant risks and potential for financial losses
                which may result in the theft or loss of some or all of your
                Digital Assets. Such risks include without limitation the
                following: - the Digital Assets and the Blockchain Technology
                are constantly under development making your Digital Assets
                vulnerable to hacking, breaches in security, flaws, errors,
                bugs, failures, loss, theft, and fraud (whether due to TYMIO or
                otherwise); - Digital Assets may fail to operate, lose all
                value, or be changed in a manner including without limitation a
                fork or rollback of the underlying Blockchain Technology; - the
                Digital Assets may decrease in value or lose all of its value
                due to various factors including discovery of wrongful conduct,
                market manipulation, changes to the underlying Digital Asset or
                Blockchain Technology. Such factors could cause transaction
                costs to increase which may impact your use of the Interface; -
                suspension or cessation of support for an Digital Assets by
                Blockchain Technology service providers may result in a total
                loss or inability to transfer or access any Digital Assets; and
                - Digital Assets may lose value or functionality due to
                governmental action, laws, or regulation as there is uncertainty
                to the legal status and categorization of Digital Assets. Such
                actions could result in the loss of access to the Interface. You
                hereby assume and agree that TYMIO will have no responsibility
                or liability for such risks. You hereby irrevocably waive,
                release, and discharge any and all claims, whether known or
                unknown to you, against TYMIO, its affiliates and their
                respective shareholders, members, directors, officers,
                employees, contractors, agents, and representatives related to
                any of the risks set forth herein. You accept the risk of all
                use of the Digital Assets and are responsible for conducting
                your own independent analysis of the risks specific to the
                Digital Assets. You should not acquire any Digital Assets unless
                you have sufficient financial resources and can afford to lose
                all value of the Digital Assets.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>23. Limitation of Liability</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                IN NO EVENT SHALL TYMIO, ITS OFFICERS, DIRECTORS, EMPLOYEES,
                CONTRACTORS, AFFILIATES, OR AGENTS, BE LIABLE TO YOU FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL
                DAMAGES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
                NEGLIGENCE), OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT TYMIO
                IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. In jurisdictions
                that allow a limitation on liability, you agree that our
                liability is no more than the amount you paid in the past six
                months in any fees (excluding Gas) to access the Interface or
                one-hundred US dollars (USD$100.00), whichever is greater. The
                limitations of damages set forth above are fundamental elements
                of the basis of the bargain between TYMIO and you. Some
                jurisdictions do not allow the exclusion or limitation of
                liability for consequential or incidental damages. So the above
                limitation or exclusion may not apply to you, and you may also
                have other legal rights that vary between jurisdictions.
                Specifically, in those jurisdictions not allowed, we do not
                disclaim liability for: (a) personal injury caused by TYMIOʼs
                negligence or that of any of its officers, employees,
                contractors, or agents; (b) fraudulent misrepresentation; or (c)
                any liability which it is not lawful to exclude either now or in
                the future. You agree that the exclusions and limitation of
                liability set out in this Agreement are reasonable. If you do
                not believe they are reasonable, please do not use our
                Interface.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>24. Release</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You expressly agree that you assume all risks in connection with
                your access and use of the Interface or your interaction with
                the Protocol, whether such risks are set forth in this Agreement
                or otherwise. YOU EXPRESSLY WAIVE AND RELEASE US FROM ANY AND
                ALL LIABILITY, CLAIMS, OR DAMAGES ARISING FROM OR IN ANY WAY
                RELATED TO YOUR USE OF THE INTERFACE OR PROTOCOL OR ANY RISKS
                ARISING FROM SUCH USE. YOU RELEASE TYMIO AND ITS DIRECTORS,
                OFFICERS, EMPLOYEES AND ASSIGNS FROM ANY AND ALL CLAIMS,
                DEMANDS, OR DAMAGES (ACTUAL, DIRECT, OR CONSEQUENTIAL) OF EVERY
                KIND AND NATURE, KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED,
                DISCLOSED AND UNDISCLOSED, ARISING OUT OF OR IN ANY WAY
                CONNECTED WITH ANY DISPUTE WITH ANOTHER USER, THE INTERFACE,
                PROTOCOL, OR OTHER THIRD PARTY.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>25. Indemnity</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You agree to release, defend, indemnify, and hold TYMIO and its
                affiliates and subsidiaries, and their officers, directors,
                employees, contractors, and agents, harmless from and against
                any claims, liabilities, damages, losses, and expenses,
                including, without limitation, reasonable legal and accounting
                fees, arising out of or in any way connected with (i) your
                breach of this Agreement; (ii) your improper use of the TYMIO
                Interface or Protocol; (iii) your interaction with any other
                user or other third party including without limitation any
                injuries, losses or damages of any kind arising in connection
                with or as a result of such interaction; and (iv) your breach of
                any Applicable Laws, regulations or third-party rights. You
                agree that this indemnity extends to requiring you to pay for
                our reasonable attorneysʼ fees, court costs, and disbursements.
                In the event of a claim such as one described in this paragraph,
                we may elect to settle with the party/parties making the claim
                and you shall be liable for the damages as though we had
                proceeded with a trial.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>26. No Warranties</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                The Interface is provided "AS IS", "AS AVAILABLE" and "WITH ALL
                FAULTS" BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, NEITHER
                TYMIO, NOR ANY OF THEIR EMPLOYEES, CONTRACTORS, MANAGERS,
                OFFICERS, ASSIGNS OR AGENTS MAKE ANY REPRESENTATIONS OR
                WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER, EXPRESS OR
                IMPLIED. In addition, we disclaim all warranties, express or
                implied, including, but not limited to, the warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, title, custom, trade, quiet enjoyment, lost
                profits, system integration and freedom from computer virus. The
                inclusion of any Digital Assets on this Interface does not
                constitute any endorsement or recommendation by TYMIO. TYMIO
                does not warrant that your use of the Interface or Protocol is
                lawful in any particular jurisdiction, and TYMIO specifically
                disclaims any such warranties.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>27. Informal Resolution</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                For any dispute or claim that you have against TYMIO, before
                seeking mediation, arbitration, or any other form of legal
                relief, you agree to first contact TYMIO and attempt to resolve
                the claim informally by sending a written notice of your claim
                (“Notice”) to TYMIO by email at legal@TYMIO.com. The Notice must
                (a) include your name, residence address, email address, and
                telephone number; (b) describe the nature and basis of the
                claim; and (c) set forth the specific relief sought. Our Notice
                to you will be similar in form to that described above. Where we
                receive or send such a Notice, you and TYMIO shall attempt in
                good faith to resolve such claims in an informal manner.The
                parties agree to maintain the confidential nature of all
                disputes and disagreements between them, including, but not
                limited to, informal negotiations, mediation or arbitration,
                except as may be necessary to prepare for or conduct these
                dispute resolution procedures or unless otherwise required by
                law or judicial decision.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>28. Force Majeure</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You agree that we are not responsible to you for anything that
                we may otherwise be responsible for, if it is the result of
                events beyond our control, including, but not limited to, acts
                of God, war, insurrection, riots, terrorism, crime, labor
                shortages (including lawful and unlawful strikes), embargoes,
                postal disruption, internet outage, contagion, communication
                disruption, failure or shortage of infrastructure, shortage of
                materials, or any other event beyond our control.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>29. Severability</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                In the event that a provision of this Agreement is found to be
                unlawful, conflicting with another provision of the Agreement,
                or otherwise unenforceable, the Agreement will remain in force
                as though it had been entered into without that unenforceable
                provision being included in it. If two or more provisions of
                this Agreement or any other agreement you may have with TYMIO
                are deemed to conflict with each otherʼs operation, you agree
                that TYMIO shall have the sole right to elect which provision
                remains in force.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>30. Non-Waiver</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We reserve all rights permitted to us under this Agreement as
                well as under the provisions of any applicable law. Our
                non-enforcement of any particular provision or provisions of
                this Agreement or any applicable law should not be construed as
                our waiver of the right to enforce that same provision under the
                same or different circumstances at any time in the future.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>31. Survival</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                All provisions of this Agreement which by their nature should
                survive termination shall survive termination, including,
                without limitation, TYMIO Intellectual Property provisions
                including use of the Interface or Protocol, User eligibility,
                User covenants, representations and warranties, limitation of
                liabilities, release, arbitration, indemnity, fees and costs,
                assumption of risk, warranty disclaimers, indemnity and
                miscellaneous provisions.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>32. Assignment</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                You may not assign your rights and/or obligations under this
                Agreement to any other party without our prior written consent.
                We may assign our rights and/or obligations under this Agreement
                to any other party at our discretion.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>33. Amendments</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                We may amend this Agreement from time to time. When we amend
                this Agreement, we will update this page and indicate the date
                that it was last modified. You may refuse to agree to the
                amendments, but if you do, you must immediately cease using our
                Interface.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>

        <Styled.Container>
          <Styled.Content>
            <Styled.Title>
              <UI.H2>34. Electronic Communications</UI.H2>
            </Styled.Title>
            <Styled.Description>
              <UI.Paragraph size={'large'}>
                The communications between you and TYMIO use electronic means,
                whether you visit the Interface or send TYMIO emails, write in
                the TYMIO telegram group, or whether TYMIO posts notices on the
                Interface or communicates with you via email. For contractual
                purposes, you (1) consent to receive communications from TYMIO
                in an electronic form; and (2) agree that all terms, conditions,
                agreements, notices, disclosures, and other communications that
                TYMIO provides to you electronically satisfy any legal
                requirement that such communications would satisfy if it were to
                be in writing. The foregoing does not affect your statutory
                rights.
              </UI.Paragraph>
            </Styled.Description>
          </Styled.Content>
        </Styled.Container>
      </UI.Container>
    </Styled.Terms>
  );
};

export default Terms;
