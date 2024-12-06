export interface User {
    email: string;
    password: string;
  }
  
  export const signUp = (email: string, password: string): void => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const signIn = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some((user: User) => user.email === email && user.password === password);
  };
  
  export const setCurrentUser = (email: string): void => {
    localStorage.setItem('currentUser', email);
  };
  
  export const getCurrentUser = (): string | null => {
    return localStorage.getItem('currentUser');
  };
  
  export const signOut = (): void => {
    localStorage.removeItem('currentUser');
  };
  
  