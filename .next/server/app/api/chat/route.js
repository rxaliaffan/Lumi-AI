"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8514:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>l,patchFetch:()=>g,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>u});var a={};r.r(a),r.d(a,{POST:()=>i});var s=r(9303),n=r(8716),o=r(670);async function i(e){try{let{message:t,medicines:r,riskScore:a=0,warnings:s=[]}=await e.json();if(!t)return Response.json({error:"Message is required."},{status:400});let n=process.env.GEMINI_API_KEY,o=r?.length?r.map(e=>`${e.name} ${e.dosage}`).join(", "):"No medicines provided",i=s?.length?s.join(", "):"No major warnings detected",p=`
You are Lumi, an AI pharmacist.

Be precise, safe, and clinically cautious.

Medicines:
${o}

Risk Score:
${a}/10

Warnings:
${i}

User Question:
${t}
`,c=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:p}]}]})}),u=await c.json(),d=u?.candidates?.[0]?.content?.parts?.[0]?.text||"Unable to generate response safely.";return Response.json({success:!0,reply:d})}catch(e){return console.error(e),Response.json({success:!1,error:"Server error."},{status:500})}}let p=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/workspaces/Lumi-AI/app/api/chat/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:u,serverHooks:d}=p,l="/api/chat/route";function g(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:u})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948],()=>r(8514));module.exports=a})();