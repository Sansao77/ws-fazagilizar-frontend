import axios from 'axios';

export class AuthService {
    protected baseURL = import.meta.env.URL_AUTH_API;


  async login(email: string, password: string): Promise<any> {
    const x = import.meta.env.URL_AUTH_API;

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email,
        password,
        company_id: 2
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(`Login failed: ${error.response?.data?.message || error.message}`);
    }
  }

  async logout(): Promise<void> {
    try {
      await axios.post(`${this.baseURL}/auth/logout`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error: any) {
      throw new Error(`Logout failed: ${error.response?.data?.message || error.message}`);
    }
  }

  async refreshToken(): Promise<string> {
    try {
      const response = await axios.post(`${this.baseURL}/auth/refresh-token`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.token;
    } catch (error: any) {
      throw new Error(`Token refresh failed: ${error.response?.data?.message || error.message}`);
    }
  }
}