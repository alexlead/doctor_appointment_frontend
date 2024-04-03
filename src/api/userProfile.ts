import { requestHeader } from "./patientAppointmentsApi";

export type userMeta = {
    metaKey: string;
    metaValue: string;
}

export async function getUserProfile () {
  
    return await fetch(
      `/api/profile`,
      {
        method: "GET",
        headers: requestHeader,
  
      }
    );
  }
export async function updateUserProfile (metaData:userMeta[]) {
  
    return await fetch(
      `/api/profile`,
      {
        method: "PUT",
        headers: requestHeader,
        body: JSON.stringify(
            metaData
        )
      }
    );
  }
  
export async function deleteUserProfile (metaData:userMeta[]) {
  
    return await fetch(
      `/api/profile`,
      {
        method: "DELETE",
        headers: requestHeader,
        body: JSON.stringify(
            metaData
        )
      }
    );
  }
  
