const path = require('path');

const SUBSCRIPTIONS_TYPE = {
  free: 'free',
  pro: 'pro',
  premium: 'premium',
};

const SALT_FACTOR = 8;

const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_CONTENT: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const DIRS = {
  upload: path.join(process.cwd(), 'tmp'),
  public: path.join(process.cwd(), 'public'),
  avatar: path.join(process.cwd(), 'public', 'images'),
};

const MAX_UPLOAD_FILE_SIZE = 2 * 1024 * 1024;

const ROLE = {
  STUDENT: 'student',
  ADMIN: 'admin',
};

const TOKEN = {
  ACCESS: {
    TYPE: 'access',
    EXPIRES_IN: '2m',
  },
  REFRESH: {
    TYPE: 'refresh',
    EXPIRES_IN: '30d',
  },
};

module.exports = {
  SUBSCRIPTIONS_TYPE,
  SALT_FACTOR,
  HTTP_CODE,
  DIRS,
  MAX_UPLOAD_FILE_SIZE,
  ROLE,
  TOKEN,
};
