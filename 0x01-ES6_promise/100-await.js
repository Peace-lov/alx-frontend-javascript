import { uploadPhoto, createUser } from './utils';

export default async function

asyncUploadUser() {
  let response = {};

  try {
    const phot = await uploadPhoto();
    const usr = await createUser();
    response = { phot, usr };
  } catch (err) {
    response = { phot: null, usr: null };
  }

  return response;
}
