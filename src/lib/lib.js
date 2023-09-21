import Cookies from 'js-cookie';
import MessageDialogService from '../services/message-dialog.service';

const BLOCK_EXPLORER = process.env.REACT_APP_BLOCK_EXPLORER;
const APP_TYPE = process.env.REACT_APP_TYPE;
export const updateCookies = (sessionInfo) => {
  const { sessionToken, userAddress } = sessionInfo;
  Cookies.set('sessionToken', sessionToken);
  Cookies.set('userAddress', userAddress);
};

export const spliceAddress = (address) => {
  return address
    ? address.substr(0, 5) + '..' + address.substr(address.length - 4, 4)
    : '';
};

export const isMobile = function () {
  let isMobile = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      //eslint-disable-next-line
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      isMobile = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return isMobile;
};

export const smartRound = (target) => {
  if (!target) return 0;
  const rounded = String(target.toFixed(Math.max(-Math.log10(target) + 2, 2)));
  if (rounded.length > 4)
    return parseFloat(rounded.substring(0, rounded.length - 1));
  return parseFloat(rounded);
};

export const convertUSDCToETH = (amount, rate) => {
  if (parseFloat(amount) && parseFloat(rate))
    return parseFloat(amount) / parseFloat(rate);
  return 0;
};

export const formatDate = (date, format = 'default') => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year = new Date(date).getFullYear();
  const month = monthNames[new Date(date).getMonth()];
  const monthNumber = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  if (format === 'utc') return `${day}/${monthNumber}/${year}`;
  return `${day} of ${month} ${year}`;
};

export const formatTime = (date, format = 'default') => {
  const hours = new Date(date).getHours();
  let minutes = new Date(date).getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  if (format === 'utc') return `${hours}:${minutes}`;
  return `${hours}.${minutes}`;
};

export const getDaysDifference = (date1, date2 = new Date()) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertObjectKeyToString = (key) => {
  return capitalizeFirstLetter(String(key).replaceAll('_', ' '));
};

export const toRound = (amount, decim = 1) => {
  if (Number(amount)) {
    if (Number(amount) % 1) return parseFloat(Number(amount).toFixed(decim));
    return Number(amount);
  } else {
    return 0;
  }
};

export const getUntilExpirationDays = (period) => {
  return getDaysDifference(Number(period)) > 1
    ? `${getDaysDifference(Number(period))} days`
    : `${getDaysDifference(Number(period))} day`;
};

export const getRecieveETH = (recieve, currentPrice) => {
  return smartRound(convertUSDCToETH(recieve, currentPrice));
};

export const getTimeLeft = (startDate, endDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  if (date1 > date2) return `Paid`;
  let delta = Math.abs(date2 - date1) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // const seconds = Math.floor(delta % 60);

  return `${days} days, ${hours} hours, ${minutes} minutes`;
};

export const parseTransactionDetails = (order) => {
  try {
    let rows = [
      {
        name: 'Deal date:',
        value: `${formatDate(order.execute_date, 'utc')} ${formatTime(
          order.execute_date,
          'utc'
        )} UTC`,
      },
      {
        name: 'Asset:',
        value:
          order.direction === 'sell'
            ? `${order.amount} ETH`
            : `${order.amount * order.price} USDC`,
      },
      {
        name: 'Asset:',
        value:
          order.direction === 'sell'
            ? `${order.amount} ETH`
            : `${order.amount * order.price} USDC`,
      },
      {
        name: 'ETH index price on deal date:',
        value: Math.floor(order.start_index_price),
      },
      {
        name: 'Deposit tx:',
        value: `${BLOCK_EXPLORER}/tx/${order.user_payment_tx_hash}`,
        type: 'link',
      },
      {
        name: 'Deposit wallet:',
        value: `${BLOCK_EXPLORER}/address/${order.from}`,
        type: 'link',
      },
      {
        name: 'Earn:',
        value: `${Math.floor(order.recieve)}$`,
      },
      {
        name: 'Status:',
        value: order.displayStatus,
      },
    ];
    if (order.settlement_date) {
      rows.push(
        {
          name: 'Settlement date:',
          value: `${formatDate(order.settlement_date, 'utc')} ${formatTime(
            order.settlement_date,
            'utc'
          )} UTC`,
        },
        {
          name: 'Time to settlement:',
          value: getTimeLeft(order.createdAt, order.settlement_date),
        }
      );
    }
    if (order.end_index_price && order.displayStatus !== 'active') {
      rows.push({
        name: 'ETH index price on settlement date:',
        value: Math.floor(order.end_index_price),
      });
    }
    if (APP_TYPE === 'sell') {
      rows.push({
        name: 'ETH sold:',
        value: order.eth_sold ? 'Yes' : 'No',
      });
    }
    if (order.displayStatus === 'paid') {
      rows.push(
        {
          name: 'Payout:',
          value: order.eth_sold
            ? `${smartRound(order.payout_usdc)} USDC`
            : `${smartRound(order.payout_eth)} ETH`,
        },
        {
          name: 'Payout tx:',
          value: `${BLOCK_EXPLORER}/tx/${order.payout_tx}`,
          type: 'link',
        }
      );
    }
    return rows;
  } catch (e) {
    throw e;
  }
};

export const amountValidate = (amount) => {
  if (String(amount) === '0' || String(amount) === '0.') {
    MessageDialogService.showError('Amount must be more than 0');
    return false;
  }
  return true;
};

export const getAddress = (userAddress) => {
  let address = '';
  if (userAddress) {
    address = spliceAddress(userAddress);
  }
  return address;
};