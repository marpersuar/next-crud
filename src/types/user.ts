export enum UserGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  NOT_VERIFIED = 'NOT_VERIFIED',
}

export interface User {
  id: string;
  givenName: string;
  familyName: string;
  gender: UserGender;
  birthDate: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  status: UserStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
