import Axios from 'http-common';

export const sendEmail = async (subject, body) => {

  return new Promise((resolve, reject) => {
    Axios.post(
      '/send-mail',
      { subject, body },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => {
        if (response.status == 200) {
          resolve('success');
        } else {
          reject('error');
        }
      })
      .catch(() => {
        reject('error');
      });
  });

};
