export type doctor = {
        id: number;
        name: string;
        surname: string;
}

export async function getDoctors () {

  return await fetch(
    `/api/users/doctors`,
    {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },

    }
  );

}