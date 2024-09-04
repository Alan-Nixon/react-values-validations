export const validateName = (Name: string) => /^(?=.*[a-zA-Z]).{3,}$/.test(Name.trim())
export const validateFullName = (FullName: string) => /^(?=.*[ _]).{6,}$/.test(FullName.trim());
export const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim())
export const validatePassword = (password: string) => /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(password.trim())
export const validatePhone = (Phone: string) => /^[1-9]\d{9}$/.test(Phone.trim());
export const validateURL = (url: string) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url.trim());
export const validateCreditCard = (cardNumber: string) => /^\d{13,19}$/.test(cardNumber.trim());
export const validateIPV4 = (ip: string) => /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip.trim());
export const validateDate = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date.trim());
export const validateHexColor = (color: string) => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color.trim());
export const validateMACAddress = (mac: string) => /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac.trim());
export const validateIPv6 = (ipv6: string) => /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}(:[0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,5}((:[0-9a-fA-F]{1,4}){1,2}|:))|(([0-9a-fA-F]{1,4}:){1,4}((:[0-9a-fA-F]{1,4}){1,3}|:))|(([0-9a-fA-F]{1,4}:){1,3}((:[0-9a-fA-F]{1,4}){1,4}|:))|(([0-9a-fA-F]{1,4}:){1,2}((:[0-9a-fA-F]{1,4}){1,5}|:))|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6}|:)|(:((:[0-9a-fA-F]{1,4}){1,7}|:))$/.test(ipv6.trim());
export const validateUUID = (uuid: string) => /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(uuid.trim());
export const validateCreditCardCVV = (cvv: string | number) => /^\d{3,4}$/.test(cvv.toString().trim());
export const validateLatitude = (latitude: string) => /^(-?[1-8]?[0-9](\.\d+)?|90(\.0+)?)$/.test(latitude.trim());
export const validateLongitude = (longitude: string) => /^(-?(1[0-7][0-9]|[1-9]?[0-9])(\.\d+)?|180(\.0+)?)$/.test(longitude.trim());
export const validateHTMLTag = (tag: string) => /^<\/?[a-z][a-z0-9]*[^<>]*>$/i.test(tag.trim());
export const validateCountryCode = (code: string) => /^\+\d{1,3}$/.test(code.trim());
export const validatePassportNumber = (passport: string) => /^[a-zA-Z0-9]{6,9}$/.test(passport.trim());
export const validateBinary = (binary: string) => /^[01]+$/.test(binary.trim());
export const validateYouTubeURL = (url: string) => /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(url.trim());
export const validateMongoObjectId = (id: string) => /^[a-fA-F0-9]{24}$/.test(id.trim());