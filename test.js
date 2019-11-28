const getUri = (rating) => {
const image = {};
switch (rating) {
  case 'L':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_free.png';
    break;
  case '10':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_10.png';
    break;
  case '12':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_12.png';
    break;
  case '14':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_14.png';
    break;
  case '16':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_16.png';
    break;
  case '18':
    image.uri = 'https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/age_18.png';
    break;
  default:
    image.uri = undefined;
  }

  return image;
}