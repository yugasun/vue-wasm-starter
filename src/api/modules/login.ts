import request from '@/utils/axios';

interface IResponseType<P = Record<string, any>> {
  code?: number
  status: number
  msg: string
  data: P
}
interface ILogin {
  token: string
  expires: number
}

interface IUser {
  username: string
}

/**
 * login
 *
 * @param {string} username
 * @param {string} password
 * @return {*}
 */
function login(username: string, password: string) {
  return request<IResponseType<ILogin>>({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
}

function getUser() {
  return request<IResponseType<IUser>>({
    url: '/api/user',
    method: 'get',
  });
}

export { login, getUser };
