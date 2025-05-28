'use client';

import { Authenticator, translations } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Hub, I18n } from 'aws-amplify';
import { useRouter } from 'next/navigation';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_POOL_CLIENT_ID,
  },
  ssr: true,
});

I18n.putVocabularies(translations);
I18n.setLanguage('es');

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { replace } = useRouter();

  Hub.listen('auth', ({ payload: { event } }) => {
    if (event === 'signOut') {
      replace('/');
    }
  });

  return <Authenticator hideSignUp>{children}</Authenticator>;
}
