async function cookieValidator (cookies) {
    try {
      await externallyValidateCookie(cookies.testCookie)
    } catch {
      throw new Error('Invalid cookies')
    }
  }
 module.exports= async function validateCookies (req, res, next) {
    await cookieValidator(req.cookies)
    next()
  }
  