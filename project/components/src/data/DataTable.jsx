import React from "react";
export function DataTable({columns=[],rows=[],striped=false,grid=false,style}){
  const cell={padding:"12px 10px",fontSize:12,lineHeight:1.35,color:"var(--text-body)",textAlign:"left",verticalAlign:"middle"};
  return <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"var(--font-text)",...style}}>
    <thead><tr>{columns.map((c,i)=><th key={i} style={{...cell,background:"var(--iq-purple-600)",color:"#fff",fontWeight:700,fontSize:14,padding:"10px",border:grid?"1px solid var(--gray-200)":"none"}}>{c}</th>)}</tr></thead>
    <tbody>{rows.map((r,ri)=><tr key={ri} style={{background:striped&&ri%2?"var(--gray-50)":"transparent"}}>{r.map((v,ci)=><td key={ci} style={{...cell,borderBottom:"1px solid var(--gray-200)",border:grid?"1px solid var(--gray-200)":undefined}}>{v}</td>)}</tr>)}</tbody>
  </table>;
}
