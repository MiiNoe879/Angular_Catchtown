// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
