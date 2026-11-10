"use strict";var K=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(x){throw (r=0, x)}};};var J=K(function(O,I){
var H=require('@stdlib/array-base-broadcast-array/dist');function L(i,r,x){var z,S,q,m,A,g,s,u,y,d,e,o,f,n,c,b,j,k,l,p,w,B,C,D,v,a,t,E,F,G;if(v=r[2],s=v[2],u=v[1],y=v[0],!(s<=0||u<=0||y<=0))for(t=H(i[0],r[0],v),E=t.data,a=t.strides,z=a[2],S=a[1],q=a[0],t=H(i[1],r[1],v),F=t.data,a=t.strides,m=a[2],A=a[1],g=a[0],G=i[2],c=0,k=0,o=0;o<y;o++){for(n=0,j=0,p=E[c],B=F[k],D=G[o],e=0;e<u;e++){for(f=0,b=0,l=p[n],w=B[j],C=D[e],d=0;d<s;d++)C[d]=x(l[f],w[b]),f+=z,b+=m;n+=S,j+=A}c+=q,k+=g}}I.exports=L
});var M=J();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
