// @flow

// import omit from 'lodash/omit';

const serviceArr = {
  custom: {
    name: 'Add your custom service',
    logo:
      'https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png',
  },
  1: {
    name: 'Dribbble',
    logo:
      'https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png',
  },
  2: {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  },
  3: {
    name: 'Invision',
    logo: 'https://icon-icons.com/icons2/836/PNG/512/Invision_icon-icons.com_66743.png',
  },
  4: {
    name: 'Netlfix',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png',
  },
  5: {
    name: 'Sketch',
    logo:
      'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png',
  },
  6: {
    name: 'PlayStation Plus',
    logo:
      'https://media.playstation.com/is/image/SCEA/ps4-june-refresh-playstation-plus-logo-01-us-09jun16?$TwoColumn_Image$',
  },
  7: {
    name: 'Spotify',
    logo: 'https://cdn.pixelprivacy.com/wp-content/uploads/2017/10/spotify-logo.png',
  },
  8: {
    name: 'Apple Music',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/2000px-Apple_Music_logo.svg.png',
  },
  9: {
    name: 'Basecamp',
    logo: 'https://37signals.com/images/basecamp-logo.png',
  },
  10: {
    name: 'Dropbox',
    logo: 'https://cfl.dropboxstatic.com/static/images/logo_catalog/glyph_2016@2x-vfl4JntaM.png',
  },
  11: {
    name: 'Avocode',
    logo: 'https://startpack.ru/repository/application/1441/logo.png',
  },
  12: {
    name: 'Creative cloud',
    logo: 'http://ofirlatam.com/wp-content/uploads/2016/06/Adobe-Creative-Cloud.png',
  },
  13: {
    name: 'Marvel app',
    logo: 'https://responsivewebdesign.com/dist/logos/podcast/png/marvel-app.png',
  },
  14: {
    name: 'Marvel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  },
  15: {
    name: 'Zeplin',
    logo: 'https://zeplin.io/img/favicon/228x228.png',
  },
  16: {
    name: 'Amazon Prime',
    logo:
      'https://images-na.ssl-images-amazon.com/images/G/15/marketing/prime/mom/family/landing/checkPrime._CB507233612_.png',
  },
  17: {
    name: 'Evernote',
    logo: 'http://logok.org/wp-content/uploads/2015/02/Evernote-logo-880x626.png',
  },
  18: {
    name: 'Todoist',
    logo: 'https://blog.todoist.com/wp-content/uploads/2015/09/todoist-logo.png',
  },
  19: {
    name: 'HBO',
    logo: 'https://www.dafont.com/forum/attach/orig/3/6/367660.png',
  },
  20: {
    name: 'PornHub',
    logo:
      'https://image.spreadshirtmedia.com/image-server/v1/designs/1001327268,width=800,removeWhite=true.png',
  },
  21: {
    name: 'Github',
    logo: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
  },
  22: {
    name: 'Trello',
    logo: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png',
  },
  23: {
    name: 'Flinto',
    logo:
      'http://www.sketchappsources.com/blog/data/uploads/app-prototyping-tools-compared/Logo_Flinto.png',
  },
  24: {
    name: 'LinkedIn',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2000px-LinkedIn_Logo.svg.png',
  },
  25: {
    name: 'Heroku',
    logo: 'https://logos-download.com/wp-content/uploads/2016/09/Heroku_logo.png',
  },
  27: {
    name: 'Firebase',
    logo: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png',
  },
  26: {
    name: 'SoundCloud',
    logo: 'https://seeklogo.com/images/S/soundcloud-logo-DBFE84F880-seeklogo.com.png',
  },
};

const serviceList = (state = serviceArr, { type, id, payload }) => {
  switch (type) {
    // case 'ADD_SERVICE':
    //   return { ...state, [id]: payload };
    // case 'EDIT_SERVICE':
    //   return { ...state, payload };
    // case 'REMOVE_SERVICE':
    //   return omit(state, id);
    default:
      return state;
  }
};

export default serviceList;
