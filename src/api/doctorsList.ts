import { getRequestHeader } from "./accessToken";

export type doctor = {
  id: number;
  name: string;
  surname: string;
}
const requestHeader = getRequestHeader();

export async function getDoctors() {


  return await fetch(
    `/api/users/doctors/`,
    {
      method: "GET",
      headers: requestHeader

    }
  );

}
export async function getDoctorsWithPhoto() {


  return await fetch(
    `/api/users/doctorslist/`,
    {
      method: "GET",
      headers: requestHeader

    }
  );

}