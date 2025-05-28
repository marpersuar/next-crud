import i18next from 'i18next';
import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/es/zod.json';

import { UserGender } from '@/types/user';

i18next.init({
  lng: 'es',
  resources: {
    es: { zod: translation },
  },
});

z.setErrorMap(zodI18nMap);

export const userSchema = z
  .object({
    id: z.string(),
    givenName: z
      .string()
      .min(2)
      .max(64)
      .regex(/^[a-zA-ZÀ-ÿñÑ]+([\s][a-zA-ZÀ-ÿñÑ]+)*$/),
    familyName: z
      .string()
      .min(2)
      .max(64)
      .regex(/^[a-zA-ZÀ-ÿñÑ]+([\s][a-zA-ZÀ-ÿñÑ]+)*$/),
    gender: z.enum([UserGender.MALE, UserGender.FEMALE]),
    birthDate: z.string().date(),
    email: z
      .string()
      .min(10)
      .max(128)
      // eslint-disable-next-line no-useless-escape
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    emailVerified: z.boolean(),
    phoneNumber: z
      .string()
      .min(9)
      .max(24)
      .regex(/^\+[1-9][0-9]{0,24}$/),
    password: z
      .string()
      .min(8)
      .max(32)
      .regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\\w]).{8,}$/)
      .optional()
      .or(z.literal('').transform(() => undefined)),
    confirmPassword: z
      .string()
      .min(8)
      .max(32)
      .optional()
      .or(z.literal('').transform(() => undefined)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type UserSchemaFieldValues = z.infer<typeof userSchema>;
