import{j as e,T as c,r as E,aj as ae,ak as de,S as l,f as S,a4 as he,t as pe,B as w,aJ as _,aK as Z,aL as ee,aM as Ee,aN as xe,aB as ge,D as me,E as je,aO as Ce,m as ve}from"./vendor-mui-DDhzcgPb.js";import{q as W,f as be,g as fe,h as ye,i as Se,j as Ae}from"./type-C0sLYKY_.js";import{N as se,B as j,P as De,v as te,d as ie,u as re,t as ue,F as Fe,M as ke,S as F,C as V,w as Le,E as Te,j as Me,k as Be,O as Pe,y as ne,n as m,Q as oe,U as I,R as Ne,L as Ue}from"./index-Bm6skYEt.js";import{c as K,u as Q}from"./vendor-utils-BRiujrGV.js";import{N as we}from"./index-BVLnVObh.js";import{b as le,u as Ie}from"./vendor-router-B6q9Nvgf.js";class qe{constructor(n){this.lessonCreate=(t,a={})=>this.http.request({path:"/lessons/",method:"POST",body:t,secure:!0,type:se.FormData,format:"json",...a}),this.lessonUpdate=(t,a,u={})=>this.http.request({path:`/lessons/${t}`,method:"PUT",body:a,secure:!0,type:se.FormData,format:"json",...u}),this.lessonDelete=(t,a={})=>this.http.request({path:`/lessons/${t}`,method:"DELETE",secure:!0,...a}),this.http=n}}const R=new qe(De),Oe=()=>{const i=K();return Q({mutationFn:n=>R.lessonCreate(n),onSuccess(){j.success("Create lesson successful"),i.invalidateQueries({queryKey:[W.getCourse]})},onError(n){j.error(n.error)}})},Ve=()=>{const i=K();return Q({mutationFn:({id:n,data:t})=>R.lessonUpdate(n,t),onSuccess(){j.success("Update lesson successful"),i.invalidateQueries({queryKey:[W.getCourse]})},onError(n){j.error(n.error)}})},We=()=>{const i=K();return Q({mutationFn:n=>R.lessonDelete(n),onSuccess(n){j.success(n.message),i.invalidateQueries({queryKey:[W.getCourse]})},onError(n){j.error(n.error)}})},Ke=({open:i,onClose:n})=>e.jsxs(te,{title:"Chuyển khoản",open:i,onClose:n,children:[e.jsx("img",{src:"/payment_qr.jpg"}),"Nội dung chuyển khoản:",e.jsx(c,{fontWeight:"bold",children:"Tên khoá học - Email đăng nhập"}),e.jsx(c,{color:"textSecondary",children:"Ví dụ: Giải đề thi THPT Quốc gia bằng máy tính Casio - nguyenvana@gmail.com"}),e.jsx(c,{fontWeight:"bold",children:"Khoá học sẽ được kích hoạt trong vòng 24h kể từ khi chuyển khoản."})]}),Qe=({length:i,open:n,onClose:t})=>{var D,N,U;const{id:a}=le(),{selectedLesson:u}=ie(),[k,C]=E.useState(),L=re({resolver:ue(u.id?be:fe),values:{title:u.title,position:u.id?String(u.position):String(i+1),video:void 0}}),{register:v,handleSubmit:q,setValue:b,watch:O,reset:T,clearErrors:M,setError:f,formState:{errors:A}}=L,y=O("position"),s=Oe(),B=Ve(),P=q(r=>{if(u.id){B.mutate({id:u.id,data:{title:r.title,video:r!=null&&r.video?r.video:void 0,position:Number(r.position)}},{onSuccess(){x()}});return}r.video&&s.mutate({courseId:Number(a)||0,title:r.title,video:r.video,position:Number(r.position)},{onSuccess(){x()}})}),x=()=>{T(),C(null),t==null||t()};return E.useEffect(()=>{if(M("position"),Number(y)<1){f("position",{message:"Vị trí bài học không hợp lệ"});return}if(u.id&&Number(y)>i){f("position",{message:"Vị trí bài học vượt quá số bài hiện tại"});return}if(Number(y)>i+1){f("position",{message:"Vị trí bài học vượt quá số bài hiện tại"});return}},[y,u,i,f,M]),e.jsx(Fe,{...L,children:e.jsx(ae,{open:n,onClose:x,children:e.jsx(ke,{children:e.jsxs("form",{onSubmit:P,children:[e.jsxs(F,{children:[e.jsx(c,{variant:"h6",children:"Đăng tải tài liệu"}),e.jsx(de,{onClick:x,sx:{cursor:"pointer"}})]}),e.jsxs(l,{flexDirection:"column",gap:4,marginY:2,children:[e.jsx(V,{label:"Tên bài học",registerProps:v("title"),errorMsg:(D=A.title)==null?void 0:D.message}),e.jsx(V,{label:"Bài học số",registerProps:v("position"),errorMsg:(N=A.position)==null?void 0:N.message}),e.jsxs(l,{flexDirection:"column",children:[e.jsx(Le,{children:"Video bài giảng"}),e.jsxs(S,{variant:"outlined",component:"label",sx:{textTransform:"none"},children:["Chọn file từ máy tính",e.jsx("input",{hidden:!0,accept:"video/mp4,video/avi,video/mov",type:"file",onChange:r=>{const h=r.target.files,d=((h==null?void 0:h.length)||0)>0?h==null?void 0:h[0]:void 0;b("video",d,{shouldValidate:!0}),b("title",d?d.name.split(".")[0]:"",{shouldValidate:!0}),C((d==null?void 0:d.name)||null)}})]}),k&&e.jsx(c,{variant:"body2",color:"text.secondary",sx:{marginTop:1},children:k}),e.jsx(Te,{message:(U=A.video)==null?void 0:U.message})]})]}),e.jsxs(Me,{marginTop:4,gap:2,children:[e.jsx(S,{onClick:x,children:"Huỷ bỏ"}),e.jsx(S,{variant:"contained",type:"submit",disabled:s.isPending||B.isPending,onClick:P,children:"Lưu"})]})]})})})})},Je=()=>{var H,G,$,z,J,X;const i=Ie(),{id:n}=le(),{user:t,getUser:a}=Be(),{setSelectedLesson:u}=ie(),[k,C]=E.useState(!1),[L,v]=E.useState(!1),[q,b]=E.useState(!1),[O,T]=E.useState(0),{register:M,handleSubmit:f,reset:A,formState:{errors:y}}=re({resolver:ue(Ae),values:{email:""}}),{data:s,isFetching:B}=ye(Number(n)||0),[P,x]=E.useState(Array((H=s==null?void 0:s.lessons)==null?void 0:H.length).fill(!1)),D=((G=s==null?void 0:s.lessons)==null?void 0:G.reduce((o,p)=>o+p.duration,0))||0,N=o=>{x(p=>{const g=[...p];return g[o]=!g[o],g})},{mutate:U}=We(),{mutate:r}=Se(),h=o=>{U(o,{onSuccess(){v(!1)}})},d=f(o=>{console.log("formData",o),r({email:o.email,courseId:Number(n)},{onSuccess(){A()}})}),ce=he(),Y=pe(ce.breakpoints.down("sm"));return E.useEffect(()=>{a().id||(j.warn("Bạn cần đăng nhập để xem chi tiết"),i("/login"))},[t,i,a]),e.jsxs(l,{marginTop:5,gap:10,children:[e.jsxs(l,{flexDirection:"column",gap:4,width:{xs:"100%",md:"70%"},children:[e.jsxs(l,{gap:{xs:2,md:5},children:[e.jsxs(w,{width:{xs:"60%",md:"100%"},children:[e.jsx(c,{variant:Y?"h6":"h5",fontWeight:"bold",children:s==null?void 0:s.title}),e.jsx(Pe,{lines:10,children:s==null?void 0:s.description}),e.jsxs(l,{gap:2,children:["Được tạo bởi:",e.jsx(c,{fontWeight:"bold",children:s==null?void 0:s.instructor})]})]}),e.jsxs(l,{flexDirection:"column",width:"40%",display:{xs:"block",md:"none"},children:[e.jsx(ne,{src:s==null?void 0:s.thumbnailUrl,alt:"Ảnh bìa"}),e.jsxs(l,{flexDirection:"column",gap:1,sx:{marginY:2},children:[e.jsxs(m,{gap:2,children:[e.jsx(_,{})," ",oe(D)," giờ video theo yêu cầu"]}),e.jsxs(m,{gap:2,children:[e.jsx(Z,{})," Truy cập trên di động và TV"]}),e.jsxs(m,{gap:2,children:[e.jsx(ee,{})," Chứng chỉ hoàn thành"]})]}),t.role===I.RoleAdmin?e.jsxs(m,{gap:2,children:[e.jsx(V,{label:"User email",showLabel:!1,registerProps:M("email"),errorMsg:($=y.email)==null?void 0:$.message}),e.jsx(Ee,{fontSize:"medium",sx:{cursor:"pointer"},onClick:d})]}):e.jsx(e.Fragment,{children:!(s!=null&&s.isActive)&&e.jsxs(F,{children:[e.jsx(c,{variant:"h6",fontWeight:"bold",children:s==null?void 0:s.price.toLocaleString()}),e.jsx(xe,{onClick:()=>b(!0),sx:{cursor:"pointer"}})]})})]})]}),e.jsx(ge,{sx:{paddingY:3}}),e.jsxs(F,{children:[e.jsx(c,{variant:Y?"h6":"h5",fontWeight:"bold",children:"Nội dung khoá học"}),e.jsx(S,{variant:"contained",onClick:()=>C(!0),children:"Thêm bài học"})]}),e.jsxs(w,{children:[(z=s==null?void 0:s.lessons)==null?void 0:z.map((o,p)=>e.jsxs(w,{padding:2,sx:{border:"1px solid #ddd",marginBottom:1},children:[e.jsxs(F,{children:[e.jsxs(c,{fontWeight:"bold",sx:{cursor:"pointer"},onClick:()=>N(p),children:["Bài số ",p+1,": ",o==null?void 0:o.title]}),e.jsxs(l,{paddingX:2,gap:2,children:[t.role===I.RoleAdmin&&e.jsx(me,{sx:{cursor:"pointer"},onClick:g=>{g.stopPropagation(),T(o.id),v(!0)}}),t.role===I.RoleAdmin&&e.jsx(je,{sx:{cursor:"pointer"},onClick:g=>{g.stopPropagation(),u(o),C(!0),T(o.id)}}),e.jsx(c,{fontWeight:"bold",children:Ne(o.duration)})]})]}),e.jsx(Ce,{in:P[p],children:e.jsx(w,{sx:{padding:2},children:s.isActive?e.jsxs("video",{controls:!0,width:"100%",children:[e.jsx("source",{src:o.videoUrl,type:"video/mp4"}),"Trình duyệt của bạn không hỗ trợ video."]}):e.jsx(e.Fragment,{children:"Bạn cần đăng ký khoá học"})})})]},p)),B?e.jsx(Ue,{isFullScreen:!1}):e.jsx(we,{length:((J=s==null?void 0:s.lessons)==null?void 0:J.length)||0})]})]}),e.jsxs(l,{flexDirection:"column",width:"30%",display:{xs:"none",md:"block"},children:[e.jsx(ne,{src:s==null?void 0:s.thumbnailUrl,alt:"Ảnh bìa"}),e.jsxs(l,{flexDirection:"column",gap:2,sx:{marginY:4},children:[e.jsxs(m,{gap:2,children:[e.jsx(_,{})," ",oe(D)," giờ video theo yêu cầu"]}),e.jsxs(m,{gap:2,children:[e.jsx(Z,{})," Truy cập trên di động và TV"]}),e.jsxs(m,{gap:2,children:[e.jsx(ee,{})," Chứng chỉ hoàn thành"]})]}),t.role===I.RoleAdmin?e.jsxs(l,{alignItems:"end",gap:2,children:[e.jsx(ve,{placeholder:"User email"}),e.jsx(S,{variant:"contained",sx:{width:120,height:35},onClick:d,children:"Kích hoạt"})]}):e.jsx(e.Fragment,{children:!(s!=null&&s.isActive)&&e.jsxs(F,{children:[e.jsx(c,{variant:"h6",fontWeight:"bold",children:s==null?void 0:s.price.toLocaleString()}),e.jsx(S,{variant:"contained",onClick:()=>b(!0),children:"Mua ngay"})]})})]}),e.jsx(Qe,{length:((X=s==null?void 0:s.lessons)==null?void 0:X.length)||0,open:k,onClose:()=>{u({}),C(!1)}}),e.jsx(te,{open:L,onClose:()=>v(!1),content:"Bạn có chắc chắn muốn xoá nó không?",onSubmit:()=>h(O)}),e.jsx(Ke,{open:q,onClose:()=>b(!1)})]})};export{Je as default};