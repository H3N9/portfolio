const email = 'h3n9.rm@gmail.com';

export const emailUtil = {
  email,
  send: `https://mail.google.com/mail/?view=cm&source=mailto&to=${email}`,
};

const pathDevices = '/static/images/homepage/devices/';

export const devicesImage = {
  desktop: {
    src: `${pathDevices}${'desktop'}.png`,
    alt: 'Desktop',
    width: 200 * 2,
    height: 160 * 2,
  },
  phone: {
    src: `${pathDevices}${'phone'}.png`,
    alt: 'Phone',
    width: 50 * 2,
    height: 100 * 2,
  },
  mac: {
    src: `${pathDevices}${'mac'}.png`,
    alt: 'Mac',
    width: 170 * 2,
    height: 100 * 2,
  },
  tablet: {
    src: `${pathDevices}${'tablet'}.png`,
    alt: 'Tablet',
    width: 80 * 2,
    height: 120 * 2,
  },
};
