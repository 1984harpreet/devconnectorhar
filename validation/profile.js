const Validator = require('validator');

const isEmpty = require('./is-empty');



module.exports = function validateProfileInput(data) {

  let errors = {};



  data.handle = !isEmpty(data.handle) ? data.handle : '';

  data.status = !isEmpty(data.status) ? data.status : '';

  



  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {

    errors.handle = 'Handle needs to between 2 and 40 characters';

  }



  if (Validator.isEmpty(data.handle)) {

    errors.handle = 'Profile handle is required';

  }



  if (Validator.isEmpty(data.status)) {

    errors.status = 'Status field is required';

  }



  if (!isEmpty(data.website)) {

    if (!Validator.isURL(data.website)) {

      errors.website = 'Not a valid URL';

    }

  }



  if (!isEmpty(data.contact)) {

    if (!Validator.isURL(data.contact)) {

      errors.contact = 'Not a valid URL';

    }

  }
  
  if (!isEmpty(data.email)) {

    if (!Validator.isURL(data.email)) {

      errors.email = 'Not a valid URL';

    }
  }



return {

    errors,

    isValid: isEmpty(errors)

  };

};