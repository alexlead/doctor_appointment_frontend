export type authResponce = {
    status: string;
    message: string;
}

export async function userAuthenticate (): Promise<authResponce | undefined> {


    // const {status, message} = await fetch ('/user/authorisation').then(data=> JSON.parse(data))

    // return {status, message}; 

    return undefined;

}