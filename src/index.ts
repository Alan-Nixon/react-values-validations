import MyComponent from './Default';
import * as validations from './validations';

export const { validateName, validateFullName, validateEmail, validatePassword, validatePhone } = validations;
export const { validateURL, validateYouTubeURL, validateMongoObjectId, validateCreditCard, validateMACAddress } = validations
export const { validateIPV4, validateIPv6, validateDate, validateHexColor, validateUUID } = validations
export const { validateCreditCardCVV, validateHTMLTag, validateCountryCode, validatePassportNumber, validateBinary } = validations
export const { validateLatitude, validateLongitude, } = validations

export default MyComponent;