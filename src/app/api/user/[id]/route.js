import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request,response){
    // console.log(response.params.id)
    // const data = user;
    const datas = user.filter((item)=>item.id==response.params.id)
    console.log(datas)
    // return NextResponse.json({datas},{status:201})
    return NextResponse.json(
        datas.length==0 ? {result:"No Data Found", success:false} : {result:datas[0], success:true},
        {status:200})
}