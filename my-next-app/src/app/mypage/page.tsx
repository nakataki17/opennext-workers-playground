"use client";

import { authClient, signIn } from "@/utils/auth-client";

export default function MyPage() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!session) {
    return (
      <div>
        <h1>Please log in</h1>
        <button
          onClick={signIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name || "User"}!</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
