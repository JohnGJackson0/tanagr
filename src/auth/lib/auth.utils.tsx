import { Auth } from "aws-amplify";

export async function signOut() : Promise<void> {
  await Auth.signOut();
}