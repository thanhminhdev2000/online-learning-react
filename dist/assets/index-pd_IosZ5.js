import{r as j,j as e,T as n,S as A,B as i,f}from"./vendor-mui-DDhzcgPb.js";import{u as S,a as C,B as k,I as r,A as a,C as v,T as o,t as T,f as b}from"./index-DqMWg6aj.js";import{u as B}from"./vendor-router-B6q9Nvgf.js";import"./vendor-utils-BRiujrGV.js";const w=()=>{var t;const s=B(),[u,l]=j.useState(!1),{register:c,handleSubmit:h,formState:{errors:m}}=S({resolver:T(b),values:{email:""}}),{mutate:g,isPending:d}=C(),x=h(p=>{g(p,{onSuccess(){l(!0)},onError(E){k.error(E.error)}})});return e.jsx(e.Fragment,{children:u?e.jsx(r,{height:"80vh",children:e.jsx(a,{children:"Vui lòng kiểm tra email để đặt lại mật khẩu."})}):e.jsx(r,{height:"80vh",children:e.jsxs(a,{onSubmit:x,children:[e.jsx(n,{variant:"h6",fontWeight:"bold",textAlign:"center",children:"QUÊN MẬT KHẨU"}),e.jsx(A,{flexDirection:"column",marginTop:4,children:e.jsx(v,{label:"Email",errorMsg:(t=m.email)==null?void 0:t.message,registerProps:c("email")})}),e.jsx(i,{marginTop:4,children:e.jsx(f,{fullWidth:!0,variant:"contained",disabled:d,type:"submit",children:"Xác nhận"})}),e.jsxs(i,{marginTop:4,children:[e.jsxs(r,{gap:1,children:[e.jsx(n,{children:"Bạn đã có tài khoản?"}),e.jsx(o,{onClick:()=>s("/login"),children:"Đăng nhập!"})]}),e.jsx(r,{children:e.jsx(o,{onClick:()=>s("/signup"),children:"Đăng ký tài khoản mới!"})})]})]})})})};export{w as default};