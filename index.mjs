// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.2-esm/index.mjs";function a(a,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H;if(m=(C=s[2])[2],b=C[1],c=C[0],!(m<=0||b<=0||c<=0))for(F=(E=r(a[0],s[0],C)).data,d=(D=E.strides)[2],e=D[1],i=D[0],G=(E=r(a[1],s[1],C)).data,o=(D=E.strides)[2],f=D[1],n=D[0],H=a[2],u=0,g=0,p=0;p<c;p++){for(h=0,y=0,q=F[u],z=G[g],B=H[p],l=0;l<b;l++){for(v=0,x=0,k=q[h],w=z[y],A=B[l],j=0;j<m;j++)A[j]=t(k[v],w[x]),v+=d,x+=o;h+=e,y+=f}u+=i,g+=n}}export{a as default};
//# sourceMappingURL=index.mjs.map
