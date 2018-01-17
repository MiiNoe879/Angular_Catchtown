export const environment = {
  production: true,
  config: {
    // Change this to your upload POST address:
    url: 'http://45.55.147.160/api/listing/cover/',
    headers: {
      'Authorization': 'Token 84603d69528d74f3d7407dbde14a7016376e19cc'
    },
    paramName: 'cover',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    multiple: false
  },
  baseEndpoint: 'http://45.55.147.160'
};
