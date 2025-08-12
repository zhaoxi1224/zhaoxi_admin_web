 import {useAxios} from "@/api";

export function userListApi(){
  return useAxios.get("/api/no_cors")
}
