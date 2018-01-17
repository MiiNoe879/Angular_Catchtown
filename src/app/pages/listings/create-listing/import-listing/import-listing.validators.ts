import { AbstractControl } from '@angular/forms';

export class ImportListingValidators {
  static validLink(control: AbstractControl) {

    const regexp = new RegExp('^(http|https):\\/\\/.*\\.craigslist\\.org\\/.*\\/.*\\/.*\\.html$');

    return new Promise((resolve) => {
      if (regexp.test(control.value)) {
        resolve({invalidCraigslistLink: true});
      } else {
        resolve(null);
      }
    });
  }
}
