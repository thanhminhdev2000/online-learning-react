import{i as A,u as j,k as f,h as u,j as s,I as o,A as k,T as w,S as P,B as c,c as b,d}from"./index-ZjgjDmZy.js";import{u as D,C as m,t as S}from"./index-IKM86iON.js";import{r as T}from"./constant-DlLz-PDG.js";import{r as v}from"./type-DrWV_Ekq.js";const M=()=>{var n,i;const{token:l=""}=A(),r=j(),{register:t,handleSubmit:h,formState:{errors:a}}=D({resolver:S(v),values:T}),{mutate:p,isPending:g}=f({token:l}),x=h(E=>{p(E,{onSuccess(e){u.success(e.message),r("/login")},onError(e){u.error(e.error)}})});return s.jsx(s.Fragment,{children:s.jsx(o,{height:"80vh",children:s.jsxs(k,{onSubmit:x,children:[s.jsx(w,{variant:"h6",fontWeight:"bold",textAlign:"center",children:"ĐẶT LẠI MẬT KHẨU"}),s.jsxs(P,{flexDirection:"column",gap:3,marginTop:4,children:[s.jsx(m,{label:"Mật khẩu",type:"password",errorMsg:(n=a.password)==null?void 0:n.message,registerProps:t("password")}),s.jsx(m,{label:"Nhập lại mật khẩu",type:"password",errorMsg:(i=a.confirmPassword)==null?void 0:i.message,registerProps:t("confirmPassword")})]}),s.jsx(c,{marginTop:4,children:s.jsx(b,{fullWidth:!0,variant:"contained",type:"submit",disabled:g,children:"Xác nhận"})}),s.jsxs(c,{marginTop:4,children:[s.jsx(o,{children:s.jsx(d,{onClick:()=>r("/signup"),children:"Đăng ký tài khoản mới!"})}),s.jsx(o,{children:s.jsx(d,{onClick:()=>r("/forgot-password"),children:"Quên mật khẩu?"})})]})]})})})};export{M as default};
