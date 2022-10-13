import { Auth } from "aws-amplify";

export async function signOut(): Promise<any> {
  await Auth.signOut();
}
