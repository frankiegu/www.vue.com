local cjson = require "cjson";
local query = ngx.req.get_uri_args();
local total = 50;
local page = tonumber(query["page"]) or 1;
local status = tonumber(query["status"]) or 0;
local pagesize = tonumber(query["pagesize"]) or 20;
local start = (page - 1) * pagesize;
local len = pagesize - (total % pagesize);
local map = {0= "默认全部",1= "未使用",3= "已过期",5= "已使用"};
local data = {};
for var=0,len do  
    data.insert({
        id= start + i,
        amount= 10580,
        title= "老用户专享优惠券" .. start .. i,
        start_time= "2017-06-15 15:12:26",
        end_time= "2017-07-27 15:12:26",
        description: "购买年以上会员立减专用",
        status= status,
        status_text= map[status]
    });
end

ngx.header.content_type = "text/html; charset=utf-8";

ngx.say(cjson.encode({
    status = "success",
    data = {
        total = total,
        pagesize = pagesize,
        page: page,
        lists: data
    },
    msg = "请求成功"
}));