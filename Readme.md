# React Validator

**React Validator** is a reusable React component library for validating and displaying messages.

## Installation

You can install the package via npm:

```bash
npm install react-values-validator
```

**Functions**
1. **validateName**  
   Description: Validates that the Name contains at least one alphabetical character and is at least 3 characters long.  
   Arguments:  
   - `Name (string)`: The name to be validated.  
   Returns:  
   - `boolean`: true if the name is valid, false otherwise.

2. **validateFullName**  
   Description: Validates that the FullName contains at least one space or underscore and is at least 6 characters long.  
   Arguments:  
   - `FullName (string)`: The full name to be validated.  
   Returns:  
   - `boolean`: true if the full name is valid, false otherwise.

3. **validateEmail**  
   Description: Validates that the email is in a proper email format.  
   Arguments:  
   - `email (string)`: The email address to be validated.  
   Returns:  
   - `boolean`: true if the email is valid, false otherwise.

4. **validatePassword**  
   Description: Validates that the password is at least 8 characters long and includes at least one uppercase letter, one special character, one number, and one alphabetical character.  
   Arguments:  
   - `password (string)`: The password to be validated.  
   Returns:  
   - `boolean`: true if the password is valid, false otherwise.

5. **validatePhone**  
   Description: Validates that the Phone number is a 10-digit number starting with a digit from 1 to 9.  
   Arguments:  
   - `Phone (string)`: The phone number to be validated.  
   Returns:  
   - `boolean`: true if the phone number is valid, false otherwise.

6. **validateURL**  
   Description: Validates that the URL starts with http, https, or ftp and is in a proper URL format.  
   Arguments:  
   - `url (string)`: The URL to be validated.  
   Returns:  
   - `boolean`: true if the URL is valid, false otherwise.

7. **validateCreditCard**  
   Description: Validates that the cardNumber is between 13 and 19 digits long.  
   Arguments:  
   - `cardNumber (string)`: The credit card number to be validated.  
   Returns:  
   - `boolean`: true if the credit card number is valid, false otherwise.

8. **validateIPV4**  
   Description: Validates that the ip is a valid IPv4 address.  
   Arguments:  
   - `ip (string)`: The IPv4 address to be validated.  
   Returns:  
   - `boolean`: true if the IPv4 address is valid, false otherwise.

9. **validateDate**  
   Description: Validates that the date is in the format YYYY-MM-DD.  
   Arguments:  
   - `date (string)`: The date to be validated.  
   Returns:  
   - `boolean`: true if the date is valid, false otherwise.

10. **validateHexColor**  
    Description: Validates that the color is a valid hex color code.  
    Arguments:  
    - `color (string)`: The hex color code to be validated.  
    Returns:  
    - `boolean`: true if the hex color code is valid, false otherwise.

11. **validateMACAddress**  
    Description: Validates that the MAC address is in a valid MAC address format.  
    Arguments:  
    - `mac (string)`: The MAC address to be validated.  
    Returns:  
    - `boolean`: true if the MAC address is valid, false otherwise.

12. **validateIPv6**  
    Description: Validates that the ipv6 is a valid IPv6 address.  
    Arguments:  
    - `ipv6 (string)`: The IPv6 address to be validated.  
    Returns:  
    - `boolean`: true if the IPv6 address is valid, false otherwise.

13. **validateUUID**  
    Description: Validates that the uuid is in the format of a UUID (Version 4).  
    Arguments:  
    - `uuid (string)`: The UUID to be validated.  
    Returns:  
    - `boolean`: true if the UUID is valid, false otherwise.

14. **validateCreditCardCVV**  
    Description: Validates that the cvv is a 3 or 4 digit number.  
    Arguments:  
    - `cvv (string | number)`: The CVV to be validated.  
    Returns:  
    - `boolean`: true if the CVV is valid, false otherwise.

15. **validateLatitude**  
    Description: Validates that the latitude is a valid latitude value.  
    Arguments:  
    - `latitude (string)`: The latitude to be validated.  
    Returns:  
    - `boolean`: true if the latitude is valid, false otherwise.

16. **validateLongitude**  
    Description: Validates that the longitude is a valid longitude value.  
    Arguments:  
    - `longitude (string)`: The longitude to be validated.  
    Returns:  
    - `boolean`: true if the longitude is valid, false otherwise.

17. **validateHTMLTag**  
    Description: Validates that the tag is a valid HTML tag.  
    Arguments:  
    - `tag (string)`: The HTML tag to be validated.  
    Returns:  
    - `boolean`: true if the HTML tag is valid, false otherwise.

18. **validateCountryCode**  
    Description: Validates that the code is a valid country code format starting with a + sign followed by 1 to 3 digits.  
    Arguments:  
    - `code (string)`: The country code to be validated.  
    Returns:  
    - `boolean`: true if the country code is valid, false otherwise.

19. **validatePassportNumber**  
    Description: Validates that the passport number is between 6 and 9 alphanumeric characters long.  
    Arguments:  
    - `passport (string)`: The passport number to be validated.  
    Returns:  
    - `boolean`: true if the passport number is valid, false otherwise.

20. **validateBinary**  
    Description: Validates that the binary string contains only 0 and 1 characters.  
    Arguments:  
    - `binary (string)`: The binary string to be validated.  
    Returns:  
    - `boolean`: true if the binary string is valid, false otherwise.

21. **validateYouTubeURL**  
    Description: Validates that the URL is a valid YouTube URL.  
    Arguments:  
    - `url (string)`: The YouTube URL to be validated.  
    Returns:  
    - `boolean`: true if the YouTube URL is valid, false otherwise.

22. **validateMongoObjectId**  
    Description: Validates that the id is a valid MongoDB ObjectId.  
    Arguments:  
    - `id (string)`: The MongoDB ObjectId to be validated.  
    Returns:  
    - `boolean`: true if the ObjectId is valid, false otherwise.
