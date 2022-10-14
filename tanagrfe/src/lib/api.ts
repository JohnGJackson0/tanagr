import axios, { CancelToken } from "axios";

export interface GetRequest<T> {
  data: T;
  cancelSource: NormalizedCancelSource;
}

export interface NormalizedCancelSource {
  cancel: Function;
  token: NormalizedCancelToken;
}

type Cancel = string | undefined;
export interface NormalizedCancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested: Function;
}

export async function getRequest<T>(url: string): Promise<GetRequest<T>> {
  const cancelSource = getRequestCancelToken();
  const cancelToken: CancelToken = cancelSource.token as any;
  const { data } = await axios.get(url, { cancelToken });
  return { data, cancelSource };
}

export const getRequestCancelToken = (): NormalizedCancelSource => {
  const cancelSource: NormalizedCancelSource =
    axios.CancelToken.source() as any;

  return cancelSource;
};

export const cancelRequest = (source: NormalizedCancelSource): void => {
  source.cancel();
};
