 import {type baseResponse, type listResponse, type paramsType, useAxios} from "@/api";

export interface  emailLoginRequest{
  val:string;
  password:string;
}


export function emailLoginApi(data:emailLoginRequest):Promise<baseResponse<string>> {
  return useAxios.post("/api/user/login",data)
}

export interface userInfoType{
  "id": number,
  "createdAt": string,
  "username": string,
  "nickname": string,
  "avatar": string,
  "abstract": string,
  "registerSource": number,
  "codeAge": number,
  "userID": number,
  "likeTags": null,
  "updateUsernameDate": string,
  "openCollect": boolean,
  "openFans": boolean,
  "openFollow": boolean,
  "homeStyleID": number
}



export function userInfoApi():Promise<baseResponse<userInfoType>> {
  return useAxios.get("/api/user/detail")
}

export function userLogoutApi():Promise<baseResponse<string>> {
  return useAxios.post("/api/user/logout")
}

export interface  userListType{
  "id": number,
  "createdAt": string,
  "updatedAt": string,
  "userID": number,
  "ip": string,
  "addr": string,
  "ua": string,
  "userNickname": string,
  "userAvatar": string
}

//用户列表
export function userListApi(params?: paramsType):Promise<baseResponse<listResponse<userListType>>> {
  return useAxios.get("/api/user/login",{params})
}
