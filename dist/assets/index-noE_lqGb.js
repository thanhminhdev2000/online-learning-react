import{u as P,e as k,D as v,U as i,j as e,I as u,A as B,T as o,S as x,g as F,B as D,c as M,d as j}from"./index-ZjgjDmZy.js";import{u as S,C as y}from"./user.hook-w4gggENV.js";import{u as T,F as w,C as n,t as O}from"./index-IKM86iON.js";import{C as U}from"./index-CTJiQCMs.js";import{s as G}from"./constant-DlLz-PDG.js";import{s as N}from"./type-DrWV_Ekq.js";import"./useMediaQuery-2e4CxuwT.js";const _=()=>{var g,m,d,h,c,p,E;const a=P(),l=T({resolver:O(N),values:G}),{register:s,handleSubmit:A,formState:{errors:r}}=l,{mutate:f,isPending:C}=S(),b=A(t=>{f({...t,dateOfBirth:k(t.dateOfBirth).format(v),gender:t.gender===i.GenderMale?i.GenderMale:i.GenderFemale},{onSuccess(){a("/login")}})});return e.jsx(u,{height:"90vh",children:e.jsxs(B,{onSubmit:b,children:[e.jsx(o,{variant:"h6",fontWeight:"bold",textAlign:"center",children:"ĐĂNG KÝ"}),e.jsx(w,{...l,children:e.jsxs(x,{flexDirection:"column",gap:2,marginTop:4,children:[e.jsx(n,{label:"Email",errorMsg:(g=r.email)==null?void 0:g.message,registerProps:s("email")}),e.jsx(n,{label:"Username",errorMsg:(m=r.username)==null?void 0:m.message,registerProps:s("username")}),e.jsx(n,{label:"Họ và tên",errorMsg:(d=r.fullName)==null?void 0:d.message,registerProps:s("fullName")}),e.jsx(n,{label:"Mật khẩu",type:"password",errorMsg:(h=r.password)==null?void 0:h.message,registerProps:s("password")}),e.jsx(n,{label:"Nhập lại mật khẩu",type:"password",errorMsg:(c=r.confirmPassword)==null?void 0:c.message,registerProps:s("confirmPassword")}),e.jsxs(x,{gap:2,children:[e.jsx(U,{label:"Giới tính",errorMsg:(p=r.gender)==null?void 0:p.message,registerProps:s("gender"),selectOptions:F,placeholder:"Chọn giới tính"}),e.jsx(y,{label:"Ngày sinh",errorMsg:(E=r.dateOfBirth)==null?void 0:E.message,registerProps:s("dateOfBirth")})]})]})}),e.jsx(D,{marginTop:4,children:e.jsx(M,{fullWidth:!0,variant:"contained",type:"submit",disabled:C,children:"Đăng ký"})}),e.jsx(o,{marginTop:4,color:"textSecondary",children:"Khi đăng ký, bạn đã đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi."}),e.jsxs(D,{marginTop:4,children:[e.jsxs(u,{gap:1,children:[e.jsx(o,{children:"Bạn đã có tài khoản?"}),e.jsx(j,{onClick:()=>a("/login"),children:"Đăng nhập!"})]}),e.jsx(u,{children:e.jsx(j,{onClick:()=>a("/forgot-password"),children:"Quên mật khẩu?"})})]})]})})};export{_ as default};
