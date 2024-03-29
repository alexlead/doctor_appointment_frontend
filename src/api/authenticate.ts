export type User = {
    id: string;
    name: string;
    role: string;
  };
  export function authenticate(): Promise<User | undefined> {

        
    return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bob', role:'patient' }), 1000));
    // return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bob' }), 1000));
  }

  