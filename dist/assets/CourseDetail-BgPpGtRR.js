import{j as e,T as l,r as p,aj as ce,ak as ae,S as u,f as D,a4 as de,t as he,B as w,aJ as _,aK as Z,aL as ee,aM as pe,aN as Ee,aB as xe,D as me,E as ge,aO as je,m as Ce}from"./vendor-mui-DDhzcgPb.js";import{q as V,f as ve,g as be,h as fe,i as De,j as ye}from"./type-CuXzWDtr.js";import{K as se,B as j,N as Se,v as te,d as re,u as ie,t as ue,F as Ae,M as ke,S,C as W,w as Fe,E as Le,j as Te,k as Me,O as Be,y as ne,n as g,P as oe,U as I,Q as Pe}from"./index-DqMWg6aj.js";import{c as K,u as Q}from"./vendor-utils-BRiujrGV.js";import{N as Ne}from"./index-Cn7HYshM.js";import{b as le,u as Ue}from"./vendor-router-B6q9Nvgf.js";class we{constructor(n){this.lessonCreate=(t,a={})=>this.http.request({path:"/lessons/",method:"POST",body:t,secure:!0,type:se.FormData,format:"json",...a}),this.lessonUpdate=(t,a,i={})=>this.http.request({path:`/lessons/${t}`,method:"PUT",body:a,secure:!0,type:se.FormData,format:"json",...i}),this.lessonDelete=(t,a={})=>this.http.request({path:`/lessons/${t}`,method:"DELETE",secure:!0,...a}),this.http=n}}const R=new we(Se),Ie=()=>{const r=K();return Q({mutationFn:n=>R.lessonCreate(n),onSuccess(){j.success("Create lesson successful"),r.invalidateQueries({queryKey:[V.getCourse]})},onError(n){j.error(n.error)}})},qe=()=>{const r=K();return Q({mutationFn:({id:n,data:t})=>R.lessonUpdate(n,t),onSuccess(){j.success("Update lesson successful"),r.invalidateQueries({queryKey:[V.getCourse]})},onError(n){j.error(n.error)}})},Oe=()=>{const r=K();return Q({mutationFn:n=>R.lessonDelete(n),onSuccess(n){j.success(n.message),r.invalidateQueries({queryKey:[V.getCourse]})},onError(n){j.error(n.error)}})},We=({open:r,onClose:n})=>e.jsxs(te,{title:"Chuyển khoản",open:r,onClose:n,children:[e.jsx("img",{src:"/payment_qr.jpg"}),"Nội dung chuyển khoản:",e.jsx(l,{fontWeight:"bold",children:"Tên khoá học - Email đăng nhập"}),e.jsx(l,{color:"textSecondary",children:"Ví dụ: Giải đề thi THPT Quốc gia bằng máy tính Casio - nguyenvana@gmail.com"}),e.jsx(l,{fontWeight:"bold",children:"Khoá học sẽ được kích hoạt trong vòng 24h kể từ khi chuyển khoản."})]}),Ve=({length:r,open:n,onClose:t})=>{var B,P,N;const{id:a}=le(),{selectedLesson:i}=re(),[A,C]=p.useState(),k=ie({resolver:ue(i.id?ve:be),values:{title:i.title,position:i.id?String(i.position):String(r+1),video:void 0}}),{register:E,handleSubmit:q,setValue:v,watch:O,reset:F,clearErrors:L,setError:b,formState:{errors:y}}=k,f=O("position"),s=Ie(),T=qe(),M=q(c=>{if(c.video){if(i.id){T.mutate({id:i.id,data:{title:c.title,video:c.video,position:Number(c.position)}},{onSuccess(){d()}});return}s.mutate({courseId:Number(a)||0,title:c.title,video:c.video,position:Number(c.position)},{onSuccess(){d()}})}}),d=()=>{F(),C(null),t==null||t()};return p.useEffect(()=>{if(L("position"),Number(f)<1){b("position",{message:"Vị trí bài học không hợp lệ"});return}if(i.id&&Number(f)>r){b("position",{message:"Vị trí bài học vượt quá số bài hiện tại"});return}if(Number(f)>r+1){b("position",{message:"Vị trí bài học vượt quá số bài hiện tại"});return}},[f,i,r,b,L]),e.jsx(Ae,{...k,children:e.jsx(ce,{open:n,onClose:d,children:e.jsx(ke,{children:e.jsxs("form",{onSubmit:M,children:[e.jsxs(S,{children:[e.jsx(l,{variant:"h6",children:"Đăng tải tài liệu"}),e.jsx(ae,{onClick:d,sx:{cursor:"pointer"}})]}),e.jsxs(u,{flexDirection:"column",gap:4,marginY:2,children:[e.jsx(W,{label:"Tên bài học",registerProps:E("title"),errorMsg:(B=y.title)==null?void 0:B.message}),e.jsx(W,{label:"Bài học số",registerProps:E("position"),errorMsg:(P=y.position)==null?void 0:P.message}),e.jsxs(u,{flexDirection:"column",children:[e.jsx(Fe,{children:"Video bài giảng"}),e.jsxs(D,{variant:"outlined",component:"label",sx:{textTransform:"none"},children:["Chọn file từ máy tính",e.jsx("input",{hidden:!0,accept:"video/mp4,video/avi,video/mov",type:"file",...E("video",{onChange:c=>{var U;const x=((U=c.target.files)==null?void 0:U[0])||null;v("video",x,{shouldValidate:!0}),v("title",x?x.name.split(".")[0]:""),C(x.name)}})})]}),A&&e.jsx(l,{variant:"body2",color:"text.secondary",sx:{marginTop:1},children:A}),e.jsx(Le,{message:(N=y.video)==null?void 0:N.message})]})]}),e.jsxs(Te,{marginTop:4,gap:2,children:[e.jsx(D,{onClick:d,children:"Huỷ bỏ"}),e.jsx(D,{variant:"contained",type:"submit",disabled:s.isPending||T.isPending,onClick:M,children:"Lưu"})]})]})})})})},$e=()=>{var H,G,$,z,J,X;const r=Ue(),{id:n}=le(),{user:t,getUser:a}=Me(),{setSelectedLesson:i}=re(),[A,C]=p.useState(!1),[k,E]=p.useState(!1),[q,v]=p.useState(!1),[O,F]=p.useState(0),{register:L,handleSubmit:b,reset:y,formState:{errors:f}}=ie({resolver:ue(ye),values:{email:""}}),{data:s}=fe(Number(n)||0),[T,M]=p.useState(Array((H=s==null?void 0:s.lessons)==null?void 0:H.length).fill(!1)),d=((G=s==null?void 0:s.lessons)==null?void 0:G.reduce((o,h)=>o+h.duration,0))||0,B=o=>{M(h=>{const m=[...h];return m[o]=!m[o],m})},{mutate:P}=Oe(),{mutate:N}=De(),c=o=>{P(o,{onSuccess(){E(!1)}})},x=b(o=>{console.log("formData",o),N({email:o.email,courseId:Number(n)},{onSuccess(){y()}})}),U=de(),Y=he(U.breakpoints.down("sm"));return p.useEffect(()=>{a().id||(j.warn("Bạn cần đăng nhập để xem chi tiết"),r("/login"))},[t,r,a]),e.jsxs(u,{marginTop:5,gap:10,children:[e.jsxs(u,{flexDirection:"column",gap:4,width:{xs:"100%",md:"70%"},children:[e.jsxs(u,{gap:{xs:2,md:5},children:[e.jsxs(w,{width:{xs:"60%",md:"100%"},children:[e.jsx(l,{variant:Y?"h6":"h5",fontWeight:"bold",children:s==null?void 0:s.title}),e.jsx(Be,{lines:10,children:s==null?void 0:s.description}),e.jsxs(u,{gap:2,children:["Được tạo bởi:",e.jsx(l,{fontWeight:"bold",children:s==null?void 0:s.instructor})]})]}),e.jsxs(u,{flexDirection:"column",width:"40%",display:{xs:"block",md:"none"},children:[e.jsx(ne,{src:s==null?void 0:s.thumbnailUrl,alt:"Ảnh bìa"}),e.jsxs(u,{flexDirection:"column",gap:1,sx:{marginY:2},children:[e.jsxs(g,{gap:2,children:[e.jsx(_,{})," ",oe(d)," giờ video theo yêu cầu"]}),e.jsxs(g,{gap:2,children:[e.jsx(Z,{})," Truy cập trên di động và TV"]}),e.jsxs(g,{gap:2,children:[e.jsx(ee,{})," Chứng chỉ hoàn thành"]})]}),t.role===I.RoleAdmin?e.jsxs(g,{gap:2,children:[e.jsx(W,{label:"User email",showLabel:!1,registerProps:L("email"),errorMsg:($=f.email)==null?void 0:$.message}),e.jsx(pe,{fontSize:"medium",sx:{cursor:"pointer"},onClick:x})]}):e.jsx(e.Fragment,{children:!(s!=null&&s.isActive)&&e.jsxs(S,{children:[e.jsx(l,{variant:"h6",fontWeight:"bold",children:s==null?void 0:s.price.toLocaleString()}),e.jsx(Ee,{onClick:()=>v(!0),sx:{cursor:"pointer"}})]})})]})]}),e.jsx(xe,{sx:{paddingY:3}}),e.jsxs(S,{children:[e.jsx(l,{variant:Y?"h6":"h5",fontWeight:"bold",children:"Nội dung khoá học"}),e.jsx(D,{variant:"contained",onClick:()=>C(!0),children:"Thêm bài học"})]}),e.jsxs(w,{children:[(z=s==null?void 0:s.lessons)==null?void 0:z.map((o,h)=>e.jsxs(w,{padding:2,sx:{border:"1px solid #ddd",marginBottom:1},children:[e.jsxs(S,{children:[e.jsxs(l,{fontWeight:"bold",sx:{cursor:"pointer"},onClick:()=>B(h),children:["Bài số ",h+1,": ",o==null?void 0:o.title]}),e.jsxs(u,{paddingX:2,gap:2,children:[t.role===I.RoleAdmin&&e.jsx(me,{sx:{cursor:"pointer"},onClick:m=>{m.stopPropagation(),F(o.id),E(!0)}}),t.role===I.RoleAdmin&&e.jsx(ge,{sx:{cursor:"pointer"},onClick:m=>{m.stopPropagation(),i(o),C(!0),F(o.id)}}),e.jsx(l,{fontWeight:"bold",children:Pe(o.duration)})]})]}),e.jsx(je,{in:T[h],children:e.jsx(w,{sx:{padding:2},children:s.isActive?e.jsxs("video",{controls:!0,width:"100%",children:[e.jsx("source",{src:o.videoUrl,type:"video/mp4"}),"Trình duyệt của bạn không hỗ trợ video."]}):e.jsx(e.Fragment,{children:"Bạn cần đăng ký khoá học"})})})]},h)),e.jsx(Ne,{length:((J=s==null?void 0:s.lessons)==null?void 0:J.length)||0})]})]}),e.jsxs(u,{flexDirection:"column",width:"30%",display:{xs:"none",md:"block"},children:[e.jsx(ne,{src:s==null?void 0:s.thumbnailUrl,alt:"Ảnh bìa"}),e.jsxs(u,{flexDirection:"column",gap:2,sx:{marginY:4},children:[e.jsxs(g,{gap:2,children:[e.jsx(_,{})," ",oe(d)," giờ video theo yêu cầu"]}),e.jsxs(g,{gap:2,children:[e.jsx(Z,{})," Truy cập trên di động và TV"]}),e.jsxs(g,{gap:2,children:[e.jsx(ee,{})," Chứng chỉ hoàn thành"]})]}),t.role===I.RoleAdmin?e.jsxs(u,{alignItems:"end",gap:2,children:[e.jsx(Ce,{placeholder:"User email"}),e.jsx(D,{variant:"contained",sx:{width:120,height:35},onClick:x,children:"Kích hoạt"})]}):e.jsx(e.Fragment,{children:!(s!=null&&s.isActive)&&e.jsxs(S,{children:[e.jsx(l,{variant:"h6",fontWeight:"bold",children:s==null?void 0:s.price.toLocaleString()}),e.jsx(D,{variant:"contained",onClick:()=>v(!0),children:"Mua ngay"})]})})]}),e.jsx(Ve,{length:((X=s==null?void 0:s.lessons)==null?void 0:X.length)||0,open:A,onClose:()=>{i({}),C(!1)}}),e.jsx(te,{open:k,onClose:()=>E(!1),content:"Bạn có chắc chắn muốn xoá nó không?",onSubmit:()=>c(O)}),e.jsx(We,{open:q,onClose:()=>v(!1)})]})};export{$e as default};
