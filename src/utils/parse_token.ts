
export interface jwtPayload{
  "userID": number,
  "username": string,
  "role": number,
  "exp": number,
  "iss": string
}

export function parseToken(token: string):jwtPayload{
  const payLoadString = token.split(".")[1]
  return JSON.parse(window.atob(payLoadString))
}
