export interface AppointmentsWithUserDto {
  id: string;
  user_id: string;
  appointment_date: string;
  appointment_time: string;
  appointment_status: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;
  phoneNumber1: string;
}
