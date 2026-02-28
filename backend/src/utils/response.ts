export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export const jsonSuccess = <T>(data: T): ApiSuccess<T> => ({
  success: true,
  data,
});

export const jsonError = (
  code: string,
  message: string,
  details?: unknown
): ApiError => ({
  success: false,
  error: {
    code,
    message,
    details,
  },
});

