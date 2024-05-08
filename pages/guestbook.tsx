'use client';

import { useSession } from "next-auth/react"
import { SignIn, SignOut } from '@/components/guestbook/Buttons';
import { Suspense } from "react";
import Form from '@/components/guestbook/Form';
import Container from "@/components/Container";
import { Guestbook } from "@prisma/client";
import useSWR from 'swr';
import fetcher from 'lib/fetcher';

export const metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default function GuestbookPage() {
  return (
    <Container
      title="Guestbook – Matheus Gomes"
      description="Sign my guestbook and leave your mark."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Guestbook
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my guestbook. Leave your mark and say hi! I&apos;d love to hear from you.
          </p>
        </div>
        <section>
          <Suspense>
            <GuestbookForm />
            <GuestbookEntries />
          </Suspense>
        </section>
      </div>
    </Container>
  );
}

function GuestbookForm() {

  const { data: session, status } = useSession()

  return session?.user && status === 'authenticated' ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

function GuestbookEntries() {
  const { data } = useSWR<Guestbook[]>('/api/guestbook', fetcher);

  if (data?.length === 0) {
    return null;
  }

  return (
    <>
      {
        data?.map((entry: Guestbook) => (
          <div key={entry.id} className="flex flex-col space-y-1 mb-4">
            <div className="w-full text-sm break-words">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {entry.created_by}:
              </span>
              {entry.body}
            </div>
          </div>
        ))
      }
    </>
  )
}