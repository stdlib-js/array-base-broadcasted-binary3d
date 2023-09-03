// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@esm/index.mjs";function a(a,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,h,u,v,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H;if(m=(C=s[2])[2],b=C[1],c=C[0],!(m<=0||b<=0||c<=0))for(F=(E=r(a[0],s[0],C)).data,d=(D=E.strides)[2],e=D[1],i=D[0],G=(E=r(a[1],s[1],C)).data,o=(D=E.strides)[2],f=D[1],n=D[0],H=a[2],v=0,g=0,p=0;p<c;p++){for(u=0,y=0,q=F[v],z=G[g],B=H[p],l=0;l<b;l++){for(h=0,x=0,k=q[u],w=z[y],A=B[l],j=0;j<m;j++)A[j]=t(k[h],w[x]),h+=d,x+=o;u+=e,y+=f}v+=i,g+=n}}export{a as default};
//# sourceMappingURL=index.mjs.map
