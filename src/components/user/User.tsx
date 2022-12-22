import { FormEvent, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSetRecoilState } from 'recoil';

import { userIdState } from '../../store/user/selector/userQuery';
import { ErrorFallback } from '../ErrorFallback';
import { UserInfo } from './UserInfo';

export const User = () => {
  const [userId, setId] = useState<number>();
  const setUserId = useSetRecoilState(userIdState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userId) return;
    setUserId(userId);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User Id:
          <input onChange={(e) => setId(Number(e.target.value))} />
        </label>
      </form>
      <div style={{ marginTop: 8 }}>
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <UserInfo />
          </ErrorBoundary>
        </Suspense>
      </div>
    </>
  );
};
