'use server';

import { redirect } from 'next/navigation';
import PocketBase from 'pocketbase';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: server-side validation

  const pb = new PocketBase(process.env.POCKETBASE_URL);

  const { token, record: model } = await pb
    .collection('users')
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  (await cookies()).set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/dashboard');
}

export async function register(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordConfirm = formData.get('confirm-password') as string;
    const name = formData.get('name') as string;
    const bio = formData.get('bio') as string;
    let birthday = formData.get('birthday') as string;

    birthday += " 00:00:00+00:00"; // Append time to date string to ensure correct parsing
    // Format the date and time

    console.log(name, email, password, passwordConfirm, bio, birthday);

    if (bio.length > 1250) {
        throw new Error('Bio must be 1250 characters or less.');
    }

    const pb = new PocketBase(process.env.POCKETBASE_URL);

    pb.collection('users').create({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
        birthday: birthday,
        bio: bio
    }).then(() => {
        redirect(`/login`);
    }).catch((error) => {
        console.error('Error creating user:', error);
        throw new Error('Registration failed');
    });
}

export async function logout() {
  (await cookies()).delete('pb_auth');
  redirect('/');
}