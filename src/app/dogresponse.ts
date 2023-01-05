export interface GetDogResponse {
  message: Record<string, string[]>;
  status: number;
}
export interface GetDogImagesResponse {
  message:  string[];
  status: number;
}

export interface GetRandomImageResponse {
  message: string;
  status: number;
}