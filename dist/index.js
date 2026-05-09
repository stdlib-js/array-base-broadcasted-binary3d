"use strict";var K=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var I=K(function(O,H){
var G=require('@stdlib/array-base-broadcast-array/dist');function L(i,r,J){var k,z,S,q,m,A,x,s,u,d,e,o,y,f,n,c,b,j,g,l,p,w,B,C,v,a,t,D,E,F;if(v=r[2],x=v[2],s=v[1],u=v[0],!(x<=0||s<=0||u<=0))for(t=G(i[0],r[0],v),D=t.data,a=t.strides,k=a[2],z=a[1],S=a[0],t=G(i[1],r[1],v),E=t.data,a=t.strides,q=a[2],m=a[1],A=a[0],F=i[2],n=0,j=0,o=0;o<u;o++){for(f=0,b=0,l=D[n],w=E[j],C=F[o],e=0;e<s;e++){for(y=0,c=0,g=l[f],p=w[b],B=C[e],d=0;d<x;d++)B[d]=J(g[y],p[c]),y+=k,c+=q;f+=z,b+=m}n+=S,j+=A}}H.exports=L
});var M=I();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
