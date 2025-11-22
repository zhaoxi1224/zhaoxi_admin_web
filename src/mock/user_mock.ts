import {mock, type MockjsRequestOptions} from "mockjs";

export function userMock() {
  mock(/.*?\/api\/user\/login/,function (options:MockjsRequestOptions){
    return{
      code:0,
      msg:"登录成功",
      data:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInVzZXJuYW1lIjoiemhhb3hpIiwicm9sZSI6MSwiZXhwIjoxNzU5NzQ1NzY2LCJpc3MiOiJ6aGFveGkifQ.hTiHSE9pE46HTBbmkFoLkpTZIYxveZ4-7sIxjQ2SoyU"
    }
  })

  mock(/.*?\/api\/user\/detail/,function (options:MockjsRequestOptions){
    return{
      "code": 0,
      "msg": "成功",
      "data": {
      "id": 1,
        "createdAt": "2025-09-22T01:34:51.784+08:00",
        "username": "zhaoxi",
        "nickname": "朝夕",
        "avatar": "",
        "abstract": "",
        "registerSource": 3,
        "codeAge": 1,
        "userID": 1,
        "likeTags": null,
        "updateUsernameDate": "2025-10-03T16:18:01.138+08:00",
        "openCollect": true,
        "openFans": false,
        "openFollow": false,
        "homeStyleID": 0
    }

    }
  })
}
