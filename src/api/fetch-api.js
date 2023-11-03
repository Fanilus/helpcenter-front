import Cookies from 'js-cookie';

const convertToQueryParams = (params = {}) => {
  let queryString = '';
  Object.keys(params).forEach((key, index) => {
    if (index === 0) queryString += `?${key}=${params[key]}`;
    else queryString += `&${key}=${params[key]}`;
  });
  return queryString;
};

export const GET = (url = '', params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url + convertToQueryParams(params), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        System: true,
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const POST = (url = '', data = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Session-Token': data.sessionToken || Cookies.get('sessionToken'),
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          reject(
            new Error(
              `${
                response.statusText || 'Can`t post data'
              }\n${url}\n${JSON.stringify(data)}`
            )
          );
        }

        resolve(response.json());
      })
      .catch((e) => reject(new Error(`${e.message}\n${url}`)));
  });
};
