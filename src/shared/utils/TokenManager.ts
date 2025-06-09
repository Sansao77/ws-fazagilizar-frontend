export class TokenManager {
  private static TOKEN_KEY = 'auth_token';

  static saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  static hasToken(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }
}