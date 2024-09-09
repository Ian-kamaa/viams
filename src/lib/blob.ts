import { put, del } from '@vercel/blob';

export async function uploadVideo(file) {
  const blob = await put(file.name, file, { access: 'public' });
  return blob.url;
}

export async function deleteVideo(url) {
  await del(url);
}