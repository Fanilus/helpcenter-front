import LanguageServiceInstance from '../services/language.service';

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
        'Accept-Language': LanguageServiceInstance.getLanguage(),
        System: 'true',
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
