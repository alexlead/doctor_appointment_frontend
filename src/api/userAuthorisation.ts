import axios, { AxiosError } from "axios";

export type userAuthResponse = {
    status: string;
    message : string;

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

  export async function userRegistration ( credentials: userRegistrationForm ): Promise<userAuthResponse | null>{

    const response = await axios.post("/api/user/registration", credentials).then(data=>console.log(data)).catch(error=>console.log(error));
    
    return null;
}


export async function userLogin ( credentials: userLoginForm ): Promise<userAuthResponse | null > {
    
  try{

    const response: userAuthResponse  = await axios.post("/api/user/authorisation", credentials).then((data: any)=>JSON.parse(data));
    
    console.log( response )
    return null;
  } catch (e: AxiosError | any){
    console.log("Error: ", e?.message);

    const status =  e?.response?.status;
    const message = e?.message
    // console.log

    return null;
  }

    // const response = await axios.post("/api/user/authorisation", credentials).then(data=>console.log(data)).catch(error=>console.log(error));
}