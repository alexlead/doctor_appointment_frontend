import axios, { AxiosError, AxiosResponse } from "axios";

export type userAuthResponse = {
  accessToken: string;
  refreshToken: string;
  message: string;
}

export type userRoles = {
    authority: string;
}

export type decodedUser = {
  exp: number;
  name: string;
roles: userRoles[]
sub: string;
surname: string;
}

export type userRegistrationForm = {
    name: string;
    surname: string;
    username: string;
    password: string;
  }

  export type userLoginForm = {
    username: string;
    password: string;
}

  export async function userRegistration ( credentials: userRegistrationForm ) {

    return await fetch(
      `/api/users/registration`,
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
    
        body: JSON.stringify(
          credentials
      )
      }
    );
    
}


export async function userLogin ( credentials: userLoginForm ) {
    
  console.log(JSON.stringify(
    credentials
))
  
  return await fetch(
    `/api/auth/login`,
    {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify(
        credentials
    )
    }
  );
  
}