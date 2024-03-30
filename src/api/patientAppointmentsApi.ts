
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
export async function getFreeSlots (freeSlotRequest: TFreeSlotRequest) {

    return await fetch(
        `/api/slot/free`,
        {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
    
          body: JSON.stringify(
            freeSlotRequest
        )
        }
      );

}

// todo : need backend appointment
export async function savePatientAppointment ( appointment: TPatientAppointment) {

}