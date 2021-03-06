import _ from 'lodash';
import { FieldFormat } from '../../../../../ui/field_formats/field_format';

const omission = '...';

export class TruncateFormat extends FieldFormat {
  _convert(val) {
    const length = this.param('fieldLength');
    if (length > 0) {
      return _.trunc(val, {
        'length': length + omission.length,
        'omission': omission
      });
    }

    return val;
  }

  static id = 'truncate';
  static title = 'Truncated String';
  static fieldType = ['string'];
}
