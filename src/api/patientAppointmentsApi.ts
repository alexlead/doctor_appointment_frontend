import { getRequestHeader } from "./accessToken";

export type TFreeSlotRequest = {
  date: string;
  doctorId: number;
}

export type slot = {
  id: number;
  startTime: string;
  endTime: string;
}


export type TPatientAppointment = {
  id: number;
  date: string;
  doctorId: number;
  slotId: number;
}

export type TDetailedAppointment = {
  id: number;
  doctorId: {
    id: number;
    name: string;
    surname: string;
  },
  slotId: {
    id: number;
    startTime: string;
    endTime: string;
  },
  date: string;
  visitComplete: boolean;
}
export type TDetailedDoctorAppointment = {
  id: number;
  patientId: {
    id: number;
    name: string;
    surname: string;
  },
  slotId: {
    id: number;
    startTime: string;
    endTime: string;
  },
  date: string;
  visitComplete: boolean;
}

export type TFreeSlotsByDate = {
  all: slot[];
  free: slot[];
}


export type TSaveAppointment = {
  appointmentId: number;
  date: string;
  userId1: number;
  slotId: number;
}


export const requestHeader = getRequestHeader();
export async function getFreeSlots(freeSlotRequest: TFreeSlotRequest) {


  return await fetch(
    `/api/slots/${freeSlotRequest.date}/${freeSlotRequest.doctorId}`,
    {
      method: "GET",
      headers: requestHeader,

    }
  );

}




export async function getPatientFutureAppointment() {

  return await fetch(
    `/api/appointments/upcoming/`,
    {
      method: "GET",
      headers: requestHeader,

    }
  );
}

export async function getPatientPastAppointment() {

  return await fetch(
    `/api/appointments/previous/`,
    {
      method: "GET",
      headers: requestHeader,

    }
  );
}


export async function getPatientAppointmentByPeriod(startPeriod: string = "", endPeriod: string = "") {


  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  let startDate = today.toISOString().slice(0, 10);
  today.setMonth(today.getMonth() + 2);
  let endDate = today.toISOString().slice(0, 10);

  if (startPeriod.length === 10) {
    startDate = startPeriod;
  }
  if (endPeriod.length === 10) {
    endDate = endPeriod;
  }

  return await fetch(
    `/api/appointments/${startDate}/${endDate}`,
    {
      method: "GET",
      headers: requestHeader,

    }
  );
}


export async function saveAppointment(formData: TSaveAppointment) {

  return await fetch(
    `/api/appointments/`,
    {
      method: "POST",
      headers: requestHeader,
      body: JSON.stringify(
        formData
      )
    }
  );

}
export async function getAppointmentById(id: number) {

  return await fetch(
    `/api/appointments/${id}`,
    {
      method: "GET",
      headers: requestHeader
    }
  );

}

export async function deleteAppointmentById(id: number) {

  return await fetch(
    `/api/appointments/${id}`,
    {
      method: "DELETE",
      headers: requestHeader
    }
  );

}
