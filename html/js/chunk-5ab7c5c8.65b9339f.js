(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab7c5c8","chunk-5ab7c5c8","chunk-5ab7c5c8"],{"58a4":function(r,t,n){(function(r){"use strict";var t=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},e=function(){throw new Error("no PRNG")},i=new Uint8Array(16),o=new Uint8Array(32);o[0]=9;var h=t(),a=t([1]),s=t([56129,1]),f=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),c=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),y=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function p(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function w(r,t,n,e,i){var o,h=0;for(o=0;o<i;o++)h|=r[t+o]^n[e+o];return(1&h-1>>>8)-1}function v(r,t,n,e){return w(r,t,n,e,16)}function g(r,t,n,e){return w(r,t,n,e,32)}function d(r,t,n,e){for(var i,o=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,s=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,l=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,y=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,w=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,d=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,A=o,U=h,E=a,M=s,x=f,m=u,B=c,k=l,S=y,O=p,L=w,T=v,K=g,Y=d,C=b,z=_,P=0;P<20;P+=2)i=A+K|0,x^=i<<7|i>>>25,i=x+A|0,S^=i<<9|i>>>23,i=S+x|0,K^=i<<13|i>>>19,i=K+S|0,A^=i<<18|i>>>14,i=m+U|0,O^=i<<7|i>>>25,i=O+m|0,Y^=i<<9|i>>>23,i=Y+O|0,U^=i<<13|i>>>19,i=U+Y|0,m^=i<<18|i>>>14,i=L+B|0,C^=i<<7|i>>>25,i=C+L|0,E^=i<<9|i>>>23,i=E+C|0,B^=i<<13|i>>>19,i=B+E|0,L^=i<<18|i>>>14,i=z+T|0,M^=i<<7|i>>>25,i=M+z|0,k^=i<<9|i>>>23,i=k+M|0,T^=i<<13|i>>>19,i=T+k|0,z^=i<<18|i>>>14,i=A+M|0,U^=i<<7|i>>>25,i=U+A|0,E^=i<<9|i>>>23,i=E+U|0,M^=i<<13|i>>>19,i=M+E|0,A^=i<<18|i>>>14,i=m+x|0,B^=i<<7|i>>>25,i=B+m|0,k^=i<<9|i>>>23,i=k+B|0,x^=i<<13|i>>>19,i=x+k|0,m^=i<<18|i>>>14,i=L+O|0,T^=i<<7|i>>>25,i=T+L|0,S^=i<<9|i>>>23,i=S+T|0,O^=i<<13|i>>>19,i=O+S|0,L^=i<<18|i>>>14,i=z+C|0,K^=i<<7|i>>>25,i=K+z|0,Y^=i<<9|i>>>23,i=Y+K|0,C^=i<<13|i>>>19,i=C+Y|0,z^=i<<18|i>>>14;A=A+o|0,U=U+h|0,E=E+a|0,M=M+s|0,x=x+f|0,m=m+u|0,B=B+c|0,k=k+l|0,S=S+y|0,O=O+p|0,L=L+w|0,T=T+v|0,K=K+g|0,Y=Y+d|0,C=C+b|0,z=z+_|0,r[0]=A>>>0&255,r[1]=A>>>8&255,r[2]=A>>>16&255,r[3]=A>>>24&255,r[4]=U>>>0&255,r[5]=U>>>8&255,r[6]=U>>>16&255,r[7]=U>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=M>>>0&255,r[13]=M>>>8&255,r[14]=M>>>16&255,r[15]=M>>>24&255,r[16]=x>>>0&255,r[17]=x>>>8&255,r[18]=x>>>16&255,r[19]=x>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=k>>>0&255,r[29]=k>>>8&255,r[30]=k>>>16&255,r[31]=k>>>24&255,r[32]=S>>>0&255,r[33]=S>>>8&255,r[34]=S>>>16&255,r[35]=S>>>24&255,r[36]=O>>>0&255,r[37]=O>>>8&255,r[38]=O>>>16&255,r[39]=O>>>24&255,r[40]=L>>>0&255,r[41]=L>>>8&255,r[42]=L>>>16&255,r[43]=L>>>24&255,r[44]=T>>>0&255,r[45]=T>>>8&255,r[46]=T>>>16&255,r[47]=T>>>24&255,r[48]=K>>>0&255,r[49]=K>>>8&255,r[50]=K>>>16&255,r[51]=K>>>24&255,r[52]=Y>>>0&255,r[53]=Y>>>8&255,r[54]=Y>>>16&255,r[55]=Y>>>24&255,r[56]=C>>>0&255,r[57]=C>>>8&255,r[58]=C>>>16&255,r[59]=C>>>24&255,r[60]=z>>>0&255,r[61]=z>>>8&255,r[62]=z>>>16&255,r[63]=z>>>24&255}function b(r,t,n,e){for(var i,o=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,s=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,l=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,y=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,w=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,d=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,A=o,U=h,E=a,M=s,x=f,m=u,B=c,k=l,S=y,O=p,L=w,T=v,K=g,Y=d,C=b,z=_,P=0;P<20;P+=2)i=A+K|0,x^=i<<7|i>>>25,i=x+A|0,S^=i<<9|i>>>23,i=S+x|0,K^=i<<13|i>>>19,i=K+S|0,A^=i<<18|i>>>14,i=m+U|0,O^=i<<7|i>>>25,i=O+m|0,Y^=i<<9|i>>>23,i=Y+O|0,U^=i<<13|i>>>19,i=U+Y|0,m^=i<<18|i>>>14,i=L+B|0,C^=i<<7|i>>>25,i=C+L|0,E^=i<<9|i>>>23,i=E+C|0,B^=i<<13|i>>>19,i=B+E|0,L^=i<<18|i>>>14,i=z+T|0,M^=i<<7|i>>>25,i=M+z|0,k^=i<<9|i>>>23,i=k+M|0,T^=i<<13|i>>>19,i=T+k|0,z^=i<<18|i>>>14,i=A+M|0,U^=i<<7|i>>>25,i=U+A|0,E^=i<<9|i>>>23,i=E+U|0,M^=i<<13|i>>>19,i=M+E|0,A^=i<<18|i>>>14,i=m+x|0,B^=i<<7|i>>>25,i=B+m|0,k^=i<<9|i>>>23,i=k+B|0,x^=i<<13|i>>>19,i=x+k|0,m^=i<<18|i>>>14,i=L+O|0,T^=i<<7|i>>>25,i=T+L|0,S^=i<<9|i>>>23,i=S+T|0,O^=i<<13|i>>>19,i=O+S|0,L^=i<<18|i>>>14,i=z+C|0,K^=i<<7|i>>>25,i=K+z|0,Y^=i<<9|i>>>23,i=Y+K|0,C^=i<<13|i>>>19,i=C+Y|0,z^=i<<18|i>>>14;r[0]=A>>>0&255,r[1]=A>>>8&255,r[2]=A>>>16&255,r[3]=A>>>24&255,r[4]=m>>>0&255,r[5]=m>>>8&255,r[6]=m>>>16&255,r[7]=m>>>24&255,r[8]=L>>>0&255,r[9]=L>>>8&255,r[10]=L>>>16&255,r[11]=L>>>24&255,r[12]=z>>>0&255,r[13]=z>>>8&255,r[14]=z>>>16&255,r[15]=z>>>24&255,r[16]=B>>>0&255,r[17]=B>>>8&255,r[18]=B>>>16&255,r[19]=B>>>24&255,r[20]=k>>>0&255,r[21]=k>>>8&255,r[22]=k>>>16&255,r[23]=k>>>24&255,r[24]=S>>>0&255,r[25]=S>>>8&255,r[26]=S>>>16&255,r[27]=S>>>24&255,r[28]=O>>>0&255,r[29]=O>>>8&255,r[30]=O>>>16&255,r[31]=O>>>24&255}function _(r,t,n,e){d(r,t,n,e)}function A(r,t,n,e){b(r,t,n,e)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function E(r,t,n,e,i,o,h){var a,s,f=new Uint8Array(16),u=new Uint8Array(64);for(s=0;s<16;s++)f[s]=0;for(s=0;s<8;s++)f[s]=o[s];while(i>=64){for(_(u,f,h,U),s=0;s<64;s++)r[t+s]=n[e+s]^u[s];for(a=1,s=8;s<16;s++)a=a+(255&f[s])|0,f[s]=255&a,a>>>=8;i-=64,t+=64,e+=64}if(i>0)for(_(u,f,h,U),s=0;s<i;s++)r[t+s]=n[e+s]^u[s];return 0}function M(r,t,n,e,i){var o,h,a=new Uint8Array(16),s=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=e[h];while(n>=64){for(_(s,a,i,U),h=0;h<64;h++)r[t+h]=s[h];for(o=1,h=8;h<16;h++)o=o+(255&a[h])|0,a[h]=255&o,o>>>=8;n-=64,t+=64}if(n>0)for(_(s,a,i,U),h=0;h<n;h++)r[t+h]=s[h];return 0}function x(r,t,n,e,i){var o=new Uint8Array(32);A(o,e,i,U);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return M(r,t,n,h,o)}function m(r,t,n,e,i,o,h){var a=new Uint8Array(32);A(a,o,h,U);for(var s=new Uint8Array(8),f=0;f<8;f++)s[f]=o[f+16];return E(r,t,n,e,i,s,a)}var B=function(r){var t,n,e,i,o,h,a,s;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),i=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|i<<9),o=255&r[8]|(255&r[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(o>>>14|h<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(h>>>11|a<<5),s=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|s<<8),this.r[9]=s>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function k(r,t,n,e,i,o){var h=new B(o);return h.update(n,e,i),h.finish(r,t),0}function S(r,t,n,e,i,o){var h=new Uint8Array(16);return k(h,0,n,e,i,o),v(r,t,h,0)}function O(r,t,n,e,i){var o;if(n<32)return-1;for(m(r,0,t,0,n,e,i),k(r,16,r,32,n-32,r),o=0;o<16;o++)r[o]=0;return 0}function L(r,t,n,e,i){var o,h=new Uint8Array(32);if(n<32)return-1;if(x(h,0,32,e,i),0!==S(t,16,t,32,n-32,h))return-1;for(m(r,0,t,0,n,e,i),o=0;o<32;o++)r[o]=0;return 0}function T(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function K(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function Y(r,t,n){for(var e,i=~(n-1),o=0;o<16;o++)e=i&(r[o]^t[o]),r[o]^=e,t[o]^=e}function C(r,n){var e,i,o,h=t(),a=t();for(e=0;e<16;e++)a[e]=n[e];for(K(a),K(a),K(a),i=0;i<2;i++){for(h[0]=a[0]-65517,e=1;e<15;e++)h[e]=a[e]-65535-(h[e-1]>>16&1),h[e-1]&=65535;h[15]=a[15]-32767-(h[14]>>16&1),o=h[15]>>16&1,h[14]&=65535,Y(a,h,1-o)}for(e=0;e<16;e++)r[2*e]=255&a[e],r[2*e+1]=a[e]>>8}function z(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return C(n,r),C(e,t),g(n,0,e,0)}function P(r){var t=new Uint8Array(32);return C(t,r),1&t[0]}function R(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function N(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function j(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function F(r,t,n){var e,i,o=0,h=0,a=0,s=0,f=0,u=0,c=0,l=0,y=0,p=0,w=0,v=0,g=0,d=0,b=0,_=0,A=0,U=0,E=0,M=0,x=0,m=0,B=0,k=0,S=0,O=0,L=0,T=0,K=0,Y=0,C=0,z=n[0],P=n[1],R=n[2],N=n[3],j=n[4],F=n[5],I=n[6],Z=n[7],D=n[8],G=n[9],J=n[10],V=n[11],X=n[12],q=n[13],H=n[14],Q=n[15];e=t[0],o+=e*z,h+=e*P,a+=e*R,s+=e*N,f+=e*j,u+=e*F,c+=e*I,l+=e*Z,y+=e*D,p+=e*G,w+=e*J,v+=e*V,g+=e*X,d+=e*q,b+=e*H,_+=e*Q,e=t[1],h+=e*z,a+=e*P,s+=e*R,f+=e*N,u+=e*j,c+=e*F,l+=e*I,y+=e*Z,p+=e*D,w+=e*G,v+=e*J,g+=e*V,d+=e*X,b+=e*q,_+=e*H,A+=e*Q,e=t[2],a+=e*z,s+=e*P,f+=e*R,u+=e*N,c+=e*j,l+=e*F,y+=e*I,p+=e*Z,w+=e*D,v+=e*G,g+=e*J,d+=e*V,b+=e*X,_+=e*q,A+=e*H,U+=e*Q,e=t[3],s+=e*z,f+=e*P,u+=e*R,c+=e*N,l+=e*j,y+=e*F,p+=e*I,w+=e*Z,v+=e*D,g+=e*G,d+=e*J,b+=e*V,_+=e*X,A+=e*q,U+=e*H,E+=e*Q,e=t[4],f+=e*z,u+=e*P,c+=e*R,l+=e*N,y+=e*j,p+=e*F,w+=e*I,v+=e*Z,g+=e*D,d+=e*G,b+=e*J,_+=e*V,A+=e*X,U+=e*q,E+=e*H,M+=e*Q,e=t[5],u+=e*z,c+=e*P,l+=e*R,y+=e*N,p+=e*j,w+=e*F,v+=e*I,g+=e*Z,d+=e*D,b+=e*G,_+=e*J,A+=e*V,U+=e*X,E+=e*q,M+=e*H,x+=e*Q,e=t[6],c+=e*z,l+=e*P,y+=e*R,p+=e*N,w+=e*j,v+=e*F,g+=e*I,d+=e*Z,b+=e*D,_+=e*G,A+=e*J,U+=e*V,E+=e*X,M+=e*q,x+=e*H,m+=e*Q,e=t[7],l+=e*z,y+=e*P,p+=e*R,w+=e*N,v+=e*j,g+=e*F,d+=e*I,b+=e*Z,_+=e*D,A+=e*G,U+=e*J,E+=e*V,M+=e*X,x+=e*q,m+=e*H,B+=e*Q,e=t[8],y+=e*z,p+=e*P,w+=e*R,v+=e*N,g+=e*j,d+=e*F,b+=e*I,_+=e*Z,A+=e*D,U+=e*G,E+=e*J,M+=e*V,x+=e*X,m+=e*q,B+=e*H,k+=e*Q,e=t[9],p+=e*z,w+=e*P,v+=e*R,g+=e*N,d+=e*j,b+=e*F,_+=e*I,A+=e*Z,U+=e*D,E+=e*G,M+=e*J,x+=e*V,m+=e*X,B+=e*q,k+=e*H,S+=e*Q,e=t[10],w+=e*z,v+=e*P,g+=e*R,d+=e*N,b+=e*j,_+=e*F,A+=e*I,U+=e*Z,E+=e*D,M+=e*G,x+=e*J,m+=e*V,B+=e*X,k+=e*q,S+=e*H,O+=e*Q,e=t[11],v+=e*z,g+=e*P,d+=e*R,b+=e*N,_+=e*j,A+=e*F,U+=e*I,E+=e*Z,M+=e*D,x+=e*G,m+=e*J,B+=e*V,k+=e*X,S+=e*q,O+=e*H,L+=e*Q,e=t[12],g+=e*z,d+=e*P,b+=e*R,_+=e*N,A+=e*j,U+=e*F,E+=e*I,M+=e*Z,x+=e*D,m+=e*G,B+=e*J,k+=e*V,S+=e*X,O+=e*q,L+=e*H,T+=e*Q,e=t[13],d+=e*z,b+=e*P,_+=e*R,A+=e*N,U+=e*j,E+=e*F,M+=e*I,x+=e*Z,m+=e*D,B+=e*G,k+=e*J,S+=e*V,O+=e*X,L+=e*q,T+=e*H,K+=e*Q,e=t[14],b+=e*z,_+=e*P,A+=e*R,U+=e*N,E+=e*j,M+=e*F,x+=e*I,m+=e*Z,B+=e*D,k+=e*G,S+=e*J,O+=e*V,L+=e*X,T+=e*q,K+=e*H,Y+=e*Q,e=t[15],_+=e*z,A+=e*P,U+=e*R,E+=e*N,M+=e*j,x+=e*F,m+=e*I,B+=e*Z,k+=e*D,S+=e*G,O+=e*J,L+=e*V,T+=e*X,K+=e*q,Y+=e*H,C+=e*Q,o+=38*A,h+=38*U,a+=38*E,s+=38*M,f+=38*x,u+=38*m,c+=38*B,l+=38*k,y+=38*S,p+=38*O,w+=38*L,v+=38*T,g+=38*K,d+=38*Y,b+=38*C,i=1,e=o+i+65535,i=Math.floor(e/65536),o=e-65536*i,e=h+i+65535,i=Math.floor(e/65536),h=e-65536*i,e=a+i+65535,i=Math.floor(e/65536),a=e-65536*i,e=s+i+65535,i=Math.floor(e/65536),s=e-65536*i,e=f+i+65535,i=Math.floor(e/65536),f=e-65536*i,e=u+i+65535,i=Math.floor(e/65536),u=e-65536*i,e=c+i+65535,i=Math.floor(e/65536),c=e-65536*i,e=l+i+65535,i=Math.floor(e/65536),l=e-65536*i,e=y+i+65535,i=Math.floor(e/65536),y=e-65536*i,e=p+i+65535,i=Math.floor(e/65536),p=e-65536*i,e=w+i+65535,i=Math.floor(e/65536),w=e-65536*i,e=v+i+65535,i=Math.floor(e/65536),v=e-65536*i,e=g+i+65535,i=Math.floor(e/65536),g=e-65536*i,e=d+i+65535,i=Math.floor(e/65536),d=e-65536*i,e=b+i+65535,i=Math.floor(e/65536),b=e-65536*i,e=_+i+65535,i=Math.floor(e/65536),_=e-65536*i,o+=i-1+37*(i-1),i=1,e=o+i+65535,i=Math.floor(e/65536),o=e-65536*i,e=h+i+65535,i=Math.floor(e/65536),h=e-65536*i,e=a+i+65535,i=Math.floor(e/65536),a=e-65536*i,e=s+i+65535,i=Math.floor(e/65536),s=e-65536*i,e=f+i+65535,i=Math.floor(e/65536),f=e-65536*i,e=u+i+65535,i=Math.floor(e/65536),u=e-65536*i,e=c+i+65535,i=Math.floor(e/65536),c=e-65536*i,e=l+i+65535,i=Math.floor(e/65536),l=e-65536*i,e=y+i+65535,i=Math.floor(e/65536),y=e-65536*i,e=p+i+65535,i=Math.floor(e/65536),p=e-65536*i,e=w+i+65535,i=Math.floor(e/65536),w=e-65536*i,e=v+i+65535,i=Math.floor(e/65536),v=e-65536*i,e=g+i+65535,i=Math.floor(e/65536),g=e-65536*i,e=d+i+65535,i=Math.floor(e/65536),d=e-65536*i,e=b+i+65535,i=Math.floor(e/65536),b=e-65536*i,e=_+i+65535,i=Math.floor(e/65536),_=e-65536*i,o+=i-1+37*(i-1),r[0]=o,r[1]=h,r[2]=a,r[3]=s,r[4]=f,r[5]=u,r[6]=c,r[7]=l,r[8]=y,r[9]=p,r[10]=w,r[11]=v,r[12]=g,r[13]=d,r[14]=b,r[15]=_}function I(r,t){F(r,t,t)}function Z(r,n){var e,i=t();for(e=0;e<16;e++)i[e]=n[e];for(e=253;e>=0;e--)I(i,i),2!==e&&4!==e&&F(i,i,n);for(e=0;e<16;e++)r[e]=i[e]}function D(r,n){var e,i=t();for(e=0;e<16;e++)i[e]=n[e];for(e=250;e>=0;e--)I(i,i),1!==e&&F(i,i,n);for(e=0;e<16;e++)r[e]=i[e]}function G(r,n,e){var i,o,h=new Uint8Array(32),a=new Float64Array(80),f=t(),u=t(),c=t(),l=t(),y=t(),p=t();for(o=0;o<31;o++)h[o]=n[o];for(h[31]=127&n[31]|64,h[0]&=248,R(a,e),o=0;o<16;o++)u[o]=a[o],l[o]=f[o]=c[o]=0;for(f[0]=l[0]=1,o=254;o>=0;--o)i=h[o>>>3]>>>(7&o)&1,Y(f,u,i),Y(c,l,i),N(y,f,c),j(f,f,c),N(c,u,l),j(u,u,l),I(l,y),I(p,f),F(f,c,f),F(c,u,y),N(y,f,c),j(f,f,c),I(u,f),j(c,l,p),F(f,c,s),N(f,f,l),F(c,c,f),F(f,l,p),F(l,u,a),I(u,y),Y(f,u,i),Y(c,l,i);for(o=0;o<16;o++)a[o+16]=f[o],a[o+32]=c[o],a[o+48]=u[o],a[o+64]=l[o];var w=a.subarray(32),v=a.subarray(16);return Z(w,w),F(v,v,w),C(r,v),0}function J(r,t){return G(r,t,o)}function V(r,t){return e(t,32),J(r,t)}function X(r,t,n){var e=new Uint8Array(32);return G(e,n,t),A(r,i,e,U)}B.prototype.blocks=function(r,t,n){var e,i,o,h,a,s,f,u,c,l,y,p,w,v,g,d,b,_,A,U=this.fin?0:2048,E=this.h[0],M=this.h[1],x=this.h[2],m=this.h[3],B=this.h[4],k=this.h[5],S=this.h[6],O=this.h[7],L=this.h[8],T=this.h[9],K=this.r[0],Y=this.r[1],C=this.r[2],z=this.r[3],P=this.r[4],R=this.r[5],N=this.r[6],j=this.r[7],F=this.r[8],I=this.r[9];while(n>=16)e=255&r[t+0]|(255&r[t+1])<<8,E+=8191&e,i=255&r[t+2]|(255&r[t+3])<<8,M+=8191&(e>>>13|i<<3),o=255&r[t+4]|(255&r[t+5])<<8,x+=8191&(i>>>10|o<<6),h=255&r[t+6]|(255&r[t+7])<<8,m+=8191&(o>>>7|h<<9),a=255&r[t+8]|(255&r[t+9])<<8,B+=8191&(h>>>4|a<<12),k+=a>>>1&8191,s=255&r[t+10]|(255&r[t+11])<<8,S+=8191&(a>>>14|s<<2),f=255&r[t+12]|(255&r[t+13])<<8,O+=8191&(s>>>11|f<<5),u=255&r[t+14]|(255&r[t+15])<<8,L+=8191&(f>>>8|u<<8),T+=u>>>5|U,c=0,l=c,l+=E*K,l+=M*(5*I),l+=x*(5*F),l+=m*(5*j),l+=B*(5*N),c=l>>>13,l&=8191,l+=k*(5*R),l+=S*(5*P),l+=O*(5*z),l+=L*(5*C),l+=T*(5*Y),c+=l>>>13,l&=8191,y=c,y+=E*Y,y+=M*K,y+=x*(5*I),y+=m*(5*F),y+=B*(5*j),c=y>>>13,y&=8191,y+=k*(5*N),y+=S*(5*R),y+=O*(5*P),y+=L*(5*z),y+=T*(5*C),c+=y>>>13,y&=8191,p=c,p+=E*C,p+=M*Y,p+=x*K,p+=m*(5*I),p+=B*(5*F),c=p>>>13,p&=8191,p+=k*(5*j),p+=S*(5*N),p+=O*(5*R),p+=L*(5*P),p+=T*(5*z),c+=p>>>13,p&=8191,w=c,w+=E*z,w+=M*C,w+=x*Y,w+=m*K,w+=B*(5*I),c=w>>>13,w&=8191,w+=k*(5*F),w+=S*(5*j),w+=O*(5*N),w+=L*(5*R),w+=T*(5*P),c+=w>>>13,w&=8191,v=c,v+=E*P,v+=M*z,v+=x*C,v+=m*Y,v+=B*K,c=v>>>13,v&=8191,v+=k*(5*I),v+=S*(5*F),v+=O*(5*j),v+=L*(5*N),v+=T*(5*R),c+=v>>>13,v&=8191,g=c,g+=E*R,g+=M*P,g+=x*z,g+=m*C,g+=B*Y,c=g>>>13,g&=8191,g+=k*K,g+=S*(5*I),g+=O*(5*F),g+=L*(5*j),g+=T*(5*N),c+=g>>>13,g&=8191,d=c,d+=E*N,d+=M*R,d+=x*P,d+=m*z,d+=B*C,c=d>>>13,d&=8191,d+=k*Y,d+=S*K,d+=O*(5*I),d+=L*(5*F),d+=T*(5*j),c+=d>>>13,d&=8191,b=c,b+=E*j,b+=M*N,b+=x*R,b+=m*P,b+=B*z,c=b>>>13,b&=8191,b+=k*C,b+=S*Y,b+=O*K,b+=L*(5*I),b+=T*(5*F),c+=b>>>13,b&=8191,_=c,_+=E*F,_+=M*j,_+=x*N,_+=m*R,_+=B*P,c=_>>>13,_&=8191,_+=k*z,_+=S*C,_+=O*Y,_+=L*K,_+=T*(5*I),c+=_>>>13,_&=8191,A=c,A+=E*I,A+=M*F,A+=x*j,A+=m*N,A+=B*R,c=A>>>13,A&=8191,A+=k*P,A+=S*z,A+=O*C,A+=L*Y,A+=T*K,c+=A>>>13,A&=8191,c=(c<<2)+c|0,c=c+l|0,l=8191&c,c>>>=13,y+=c,E=l,M=y,x=p,m=w,B=v,k=g,S=d,O=b,L=_,T=A,t+=16,n-=16;this.h[0]=E,this.h[1]=M,this.h[2]=x,this.h[3]=m,this.h[4]=B,this.h[5]=k,this.h[6]=S,this.h[7]=O,this.h[8]=L,this.h[9]=T},B.prototype.finish=function(r,t){var n,e,i,o,h=new Uint16Array(10);if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,o=1;o<10;o++)h[o]=this.h[o]+n,n=h[o]>>>13,h[o]&=8191;for(h[9]-=8192,e=(1^n)-1,o=0;o<10;o++)h[o]&=e;for(e=~e,o=0;o<10;o++)this.h[o]=this.h[o]&e|h[o];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},B.prototype.update=function(r,t,n){var e,i;if(this.leftover){for(i=16-this.leftover,i>n&&(i=n),e=0;e<i;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=i,t+=i,this.leftover+=i,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(r,t,i),t+=i,n-=i),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var q=O,H=L;function Q(r,t,n,e,i,o){var h=new Uint8Array(32);return X(h,i,o),q(r,t,n,e,h)}function W(r,t,n,e,i,o){var h=new Uint8Array(32);return X(h,i,o),H(r,t,n,e,h)}var $=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function rr(r,t,n,e){var i,o,h,a,s,f,u,c,l,y,p,w,v,g,d,b,_,A,U,E,M,x,m,B,k,S,O=new Int32Array(16),L=new Int32Array(16),T=r[0],K=r[1],Y=r[2],C=r[3],z=r[4],P=r[5],R=r[6],N=r[7],j=t[0],F=t[1],I=t[2],Z=t[3],D=t[4],G=t[5],J=t[6],V=t[7],X=0;while(e>=128){for(U=0;U<16;U++)E=8*U+X,O[U]=n[E+0]<<24|n[E+1]<<16|n[E+2]<<8|n[E+3],L[U]=n[E+4]<<24|n[E+5]<<16|n[E+6]<<8|n[E+7];for(U=0;U<80;U++)if(i=T,o=K,h=Y,a=C,s=z,f=P,u=R,c=N,l=j,y=F,p=I,w=Z,v=D,g=G,d=J,b=V,M=N,x=V,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=(z>>>14|D<<18)^(z>>>18|D<<14)^(D>>>9|z<<23),x=(D>>>14|z<<18)^(D>>>18|z<<14)^(z>>>9|D<<23),m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,M=z&P^~z&R,x=D&G^~D&J,m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,M=$[2*U],x=$[2*U+1],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,M=O[U%16],x=L[U%16],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,_=65535&k|S<<16,A=65535&m|B<<16,M=_,x=A,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=(T>>>28|j<<4)^(j>>>2|T<<30)^(j>>>7|T<<25),x=(j>>>28|T<<4)^(T>>>2|j<<30)^(T>>>7|j<<25),m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,M=T&K^T&Y^K&Y,x=j&F^j&I^F&I,m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,c=65535&k|S<<16,b=65535&m|B<<16,M=a,x=w,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=_,x=A,m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,a=65535&k|S<<16,w=65535&m|B<<16,K=i,Y=o,C=h,z=a,P=s,R=f,N=u,T=c,F=l,I=y,Z=p,D=w,G=v,J=g,V=d,j=b,U%16===15)for(E=0;E<16;E++)M=O[E],x=L[E],m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=O[(E+9)%16],x=L[(E+9)%16],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,_=O[(E+1)%16],A=L[(E+1)%16],M=(_>>>1|A<<31)^(_>>>8|A<<24)^_>>>7,x=(A>>>1|_<<31)^(A>>>8|_<<24)^(A>>>7|_<<25),m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,_=O[(E+14)%16],A=L[(E+14)%16],M=(_>>>19|A<<13)^(A>>>29|_<<3)^_>>>6,x=(A>>>19|_<<13)^(_>>>29|A<<3)^(A>>>6|_<<26),m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,O[E]=65535&k|S<<16,L[E]=65535&m|B<<16;M=T,x=j,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[0],x=t[0],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[0]=T=65535&k|S<<16,t[0]=j=65535&m|B<<16,M=K,x=F,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[1],x=t[1],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[1]=K=65535&k|S<<16,t[1]=F=65535&m|B<<16,M=Y,x=I,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[2],x=t[2],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[2]=Y=65535&k|S<<16,t[2]=I=65535&m|B<<16,M=C,x=Z,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[3],x=t[3],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[3]=C=65535&k|S<<16,t[3]=Z=65535&m|B<<16,M=z,x=D,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[4],x=t[4],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[4]=z=65535&k|S<<16,t[4]=D=65535&m|B<<16,M=P,x=G,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[5],x=t[5],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[5]=P=65535&k|S<<16,t[5]=G=65535&m|B<<16,M=R,x=J,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[6],x=t[6],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[6]=R=65535&k|S<<16,t[6]=J=65535&m|B<<16,M=N,x=V,m=65535&x,B=x>>>16,k=65535&M,S=M>>>16,M=r[7],x=t[7],m+=65535&x,B+=x>>>16,k+=65535&M,S+=M>>>16,B+=m>>>16,k+=B>>>16,S+=k>>>16,r[7]=N=65535&k|S<<16,t[7]=V=65535&m|B<<16,X+=128,e-=128}return e}function tr(r,t,n){var e,i=new Int32Array(8),o=new Int32Array(8),h=new Uint8Array(256),a=n;for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,o[0]=4089235720,o[1]=2227873595,o[2]=4271175723,o[3]=1595750129,o[4]=2917565137,o[5]=725511199,o[6]=4215389547,o[7]=327033209,rr(i,o,t,n),n%=128,e=0;e<n;e++)h[e]=t[a-n+e];for(h[n]=128,n=256-128*(n<112?1:0),h[n-9]=0,p(h,n-8,a/536870912|0,a<<3),rr(i,o,h,n),e=0;e<8;e++)p(r,8*e,i[e],o[e]);return 0}function nr(r,n){var e=t(),i=t(),o=t(),h=t(),a=t(),s=t(),f=t(),c=t(),l=t();j(e,r[1],r[0]),j(l,n[1],n[0]),F(e,e,l),N(i,r[0],r[1]),N(l,n[0],n[1]),F(i,i,l),F(o,r[3],n[3]),F(o,o,u),F(h,r[2],n[2]),N(h,h,h),j(a,i,e),j(s,h,o),N(f,h,o),N(c,i,e),F(r[0],a,s),F(r[1],c,f),F(r[2],f,s),F(r[3],a,c)}function er(r,t,n){var e;for(e=0;e<4;e++)Y(r[e],t[e],n)}function ir(r,n){var e=t(),i=t(),o=t();Z(o,n[2]),F(e,n[0],o),F(i,n[1],o),C(r,i),r[31]^=P(e)<<7}function or(r,t,n){var e,i;for(T(r[0],h),T(r[1],a),T(r[2],a),T(r[3],h),i=255;i>=0;--i)e=n[i/8|0]>>(7&i)&1,er(r,t,e),nr(t,r),nr(r,r),er(r,t,e)}function hr(r,n){var e=[t(),t(),t(),t()];T(e[0],c),T(e[1],l),T(e[2],a),F(e[3],c,l),or(r,e,n)}function ar(r,n,i){var o,h=new Uint8Array(64),a=[t(),t(),t(),t()];for(i||e(n,32),tr(h,n,32),h[0]&=248,h[31]&=127,h[31]|=64,hr(a,h),ir(r,a),o=0;o<32;o++)n[o+32]=r[o];return 0}var sr=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function fr(r,t){var n,e,i,o;for(e=63;e>=32;--e){for(n=0,i=e-32,o=e-12;i<o;++i)t[i]+=n-16*t[e]*sr[i-(e-32)],n=Math.floor((t[i]+128)/256),t[i]-=256*n;t[i]+=n,t[e]=0}for(n=0,i=0;i<32;i++)t[i]+=n-(t[31]>>4)*sr[i],n=t[i]>>8,t[i]&=255;for(i=0;i<32;i++)t[i]-=n*sr[i];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function ur(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;fr(r,n)}function cr(r,n,e,i){var o,h,a=new Uint8Array(64),s=new Uint8Array(64),f=new Uint8Array(64),u=new Float64Array(64),c=[t(),t(),t(),t()];tr(a,i,32),a[0]&=248,a[31]&=127,a[31]|=64;var l=e+64;for(o=0;o<e;o++)r[64+o]=n[o];for(o=0;o<32;o++)r[32+o]=a[32+o];for(tr(f,r.subarray(32),e+32),ur(f),hr(c,f),ir(r,c),o=32;o<64;o++)r[o]=i[o];for(tr(s,r,e+64),ur(s),o=0;o<64;o++)u[o]=0;for(o=0;o<32;o++)u[o]=f[o];for(o=0;o<32;o++)for(h=0;h<32;h++)u[o+h]+=s[o]*a[h];return fr(r.subarray(32),u),l}function lr(r,n){var e=t(),i=t(),o=t(),s=t(),u=t(),c=t(),l=t();return T(r[2],a),R(r[1],n),I(o,r[1]),F(s,o,f),j(o,o,r[2]),N(s,r[2],s),I(u,s),I(c,u),F(l,c,u),F(e,l,o),F(e,e,s),D(e,e),F(e,e,o),F(e,e,s),F(e,e,s),F(r[0],e,s),I(i,r[0]),F(i,i,s),z(i,o)&&F(r[0],r[0],y),I(i,r[0]),F(i,i,s),z(i,o)?-1:(P(r[0])===n[31]>>7&&j(r[0],h,r[0]),F(r[3],r[0],r[1]),0)}function yr(r,n,e,i){var o,h=new Uint8Array(32),a=new Uint8Array(64),s=[t(),t(),t(),t()],f=[t(),t(),t(),t()];if(e<64)return-1;if(lr(f,i))return-1;for(o=0;o<e;o++)r[o]=n[o];for(o=0;o<32;o++)r[o+32]=i[o];if(tr(a,r,e),ur(a),or(s,f,a),hr(f,n.subarray(32)),nr(s,f),ir(h,s),e-=64,g(n,0,h,0)){for(o=0;o<e;o++)r[o]=0;return-1}for(o=0;o<e;o++)r[o]=n[o+64];return e}var pr=32,wr=24,vr=32,gr=16,dr=32,br=32,_r=32,Ar=32,Ur=32,Er=wr,Mr=vr,xr=gr,mr=64,Br=32,kr=64,Sr=32,Or=64;function Lr(r,t){if(r.length!==pr)throw new Error("bad key size");if(t.length!==wr)throw new Error("bad nonce size")}function Tr(r,t){if(r.length!==_r)throw new Error("bad public key size");if(t.length!==Ar)throw new Error("bad secret key size")}function Kr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function Yr(r){for(var t=0;t<r.length;t++)r[t]=0}r.lowlevel={crypto_core_hsalsa20:A,crypto_stream_xor:m,crypto_stream:x,crypto_stream_salsa20_xor:E,crypto_stream_salsa20:M,crypto_onetimeauth:k,crypto_onetimeauth_verify:S,crypto_verify_16:v,crypto_verify_32:g,crypto_secretbox:O,crypto_secretbox_open:L,crypto_scalarmult:G,crypto_scalarmult_base:J,crypto_box_beforenm:X,crypto_box_afternm:q,crypto_box:Q,crypto_box_open:W,crypto_box_keypair:V,crypto_hash:tr,crypto_sign:cr,crypto_sign_keypair:ar,crypto_sign_open:yr,crypto_secretbox_KEYBYTES:pr,crypto_secretbox_NONCEBYTES:wr,crypto_secretbox_ZEROBYTES:vr,crypto_secretbox_BOXZEROBYTES:gr,crypto_scalarmult_BYTES:dr,crypto_scalarmult_SCALARBYTES:br,crypto_box_PUBLICKEYBYTES:_r,crypto_box_SECRETKEYBYTES:Ar,crypto_box_BEFORENMBYTES:Ur,crypto_box_NONCEBYTES:Er,crypto_box_ZEROBYTES:Mr,crypto_box_BOXZEROBYTES:xr,crypto_sign_BYTES:mr,crypto_sign_PUBLICKEYBYTES:Br,crypto_sign_SECRETKEYBYTES:kr,crypto_sign_SEEDBYTES:Sr,crypto_hash_BYTES:Or,gf:t,D:f,L:sr,pack25519:C,unpack25519:R,M:F,A:N,S:I,Z:j,pow2523:D,add:nr,set25519:T,modL:fr,scalarmult:or,scalarbase:hr},r.randomBytes=function(r){var t=new Uint8Array(r);return e(t,r),t},r.secretbox=function(r,t,n){Kr(r,t,n),Lr(n,t);for(var e=new Uint8Array(vr+r.length),i=new Uint8Array(e.length),o=0;o<r.length;o++)e[o+vr]=r[o];return O(i,e,e.length,t,n),i.subarray(gr)},r.secretbox.open=function(r,t,n){Kr(r,t,n),Lr(n,t);for(var e=new Uint8Array(gr+r.length),i=new Uint8Array(e.length),o=0;o<r.length;o++)e[o+gr]=r[o];return e.length<32||0!==L(i,e,e.length,t,n)?null:i.subarray(vr)},r.secretbox.keyLength=pr,r.secretbox.nonceLength=wr,r.secretbox.overheadLength=gr,r.scalarMult=function(r,t){if(Kr(r,t),r.length!==br)throw new Error("bad n size");if(t.length!==dr)throw new Error("bad p size");var n=new Uint8Array(dr);return G(n,r,t),n},r.scalarMult.base=function(r){if(Kr(r),r.length!==br)throw new Error("bad n size");var t=new Uint8Array(dr);return J(t,r),t},r.scalarMult.scalarLength=br,r.scalarMult.groupElementLength=dr,r.box=function(t,n,e,i){var o=r.box.before(e,i);return r.secretbox(t,n,o)},r.box.before=function(r,t){Kr(r,t),Tr(r,t);var n=new Uint8Array(Ur);return X(n,r,t),n},r.box.after=r.secretbox,r.box.open=function(t,n,e,i){var o=r.box.before(e,i);return r.secretbox.open(t,n,o)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(_r),t=new Uint8Array(Ar);return V(r,t),{publicKey:r,secretKey:t}},r.box.keyPair.fromSecretKey=function(r){if(Kr(r),r.length!==Ar)throw new Error("bad secret key size");var t=new Uint8Array(_r);return J(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=_r,r.box.secretKeyLength=Ar,r.box.sharedKeyLength=Ur,r.box.nonceLength=Er,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,t){if(Kr(r,t),t.length!==kr)throw new Error("bad secret key size");var n=new Uint8Array(mr+r.length);return cr(n,r,r.length,t),n},r.sign.open=function(r,t){if(Kr(r,t),t.length!==Br)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=yr(n,r,r.length,t);if(e<0)return null;for(var i=new Uint8Array(e),o=0;o<i.length;o++)i[o]=n[o];return i},r.sign.detached=function(t,n){for(var e=r.sign(t,n),i=new Uint8Array(mr),o=0;o<i.length;o++)i[o]=e[o];return i},r.sign.detached.verify=function(r,t,n){if(Kr(r,t,n),t.length!==mr)throw new Error("bad signature size");if(n.length!==Br)throw new Error("bad public key size");var e,i=new Uint8Array(mr+r.length),o=new Uint8Array(mr+r.length);for(e=0;e<mr;e++)i[e]=t[e];for(e=0;e<r.length;e++)i[e+mr]=r[e];return yr(o,i,i.length,n)>=0},r.sign.keyPair=function(){var r=new Uint8Array(Br),t=new Uint8Array(kr);return ar(r,t),{publicKey:r,secretKey:t}},r.sign.keyPair.fromSecretKey=function(r){if(Kr(r),r.length!==kr)throw new Error("bad secret key size");for(var t=new Uint8Array(Br),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(Kr(r),r.length!==Sr)throw new Error("bad seed size");for(var t=new Uint8Array(Br),n=new Uint8Array(kr),e=0;e<32;e++)n[e]=r[e];return ar(t,n,!0),{publicKey:t,secretKey:n}},r.sign.publicKeyLength=Br,r.sign.secretKeyLength=kr,r.sign.seedLength=Sr,r.sign.signatureLength=mr,r.hash=function(r){Kr(r);var t=new Uint8Array(Or);return tr(t,r,r.length),t},r.hash.hashLength=Or,r.verify=function(r,t){return Kr(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===w(r,0,t,0,r.length))},r.setPRNG=function(r){e=r},function(){var t="undefined"!==typeof self?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){var e=65536;r.setPRNG((function(r,n){var i,o=new Uint8Array(n);for(i=0;i<n;i+=e)t.getRandomValues(o.subarray(i,i+Math.min(n-i,e)));for(i=0;i<n;i++)r[i]=o[i];Yr(o)}))}else t=n(1),t&&t.randomBytes&&r.setPRNG((function(r,n){var e,i=t.randomBytes(n);for(e=0;e<n;e++)r[e]=i[e];Yr(i)}))}()})(r.exports?r.exports:self.nacl=self.nacl||{})},b183:function(r,t,n){"use strict";
/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */function e(r){return r.split(" ").map((function(r){return r.slice(0,1).toUpperCase()+r.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}r.exports=e},b4b6:function(r,t,n){"use strict";function e(r,t,n){return t<=r&&r<=n}function i(r){if(void 0===r)return{};if(r===Object(r))return r;throw TypeError("Could not convert argument to dictionary")}function o(r){var t=String(r),n=t.length,e=0,i=[];while(e<n){var o=t.charCodeAt(e);if(o<55296||o>57343)i.push(o);else if(56320<=o&&o<=57343)i.push(65533);else if(55296<=o&&o<=56319)if(e===n-1)i.push(65533);else{var h=r.charCodeAt(e+1);if(56320<=h&&h<=57343){var a=1023&o,s=1023&h;i.push(65536+(a<<10)+s),e+=1}else i.push(65533)}e+=1}return i}function h(r){for(var t="",n=0;n<r.length;++n){var e=r[n];e<=65535?t+=String.fromCharCode(e):(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(1023&e)))}return t}n.r(t),n.d(t,"TextEncoder",(function(){return w})),n.d(t,"TextDecoder",(function(){return p}));var a=-1;function s(r){this.tokens=[].slice.call(r)}s.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():a},prepend:function(r){if(Array.isArray(r)){var t=r;while(t.length)this.tokens.unshift(t.pop())}else this.tokens.unshift(r)},push:function(r){if(Array.isArray(r)){var t=r;while(t.length)this.tokens.push(t.shift())}else this.tokens.push(r)}};var f=-1;function u(r,t){if(r)throw TypeError("Decoder error");return t||65533}function c(){}function l(){}c.prototype={handler:function(r,t){}},l.prototype={handler:function(r,t){}};var y="utf-8";function p(r,t){if(!(this instanceof p))return new p(r,t);if(r=void 0!==r?String(r).toLowerCase():y,r!==y)throw new Error("Encoding not supported. Only utf-8 is supported");t=i(t),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(t["fatal"]),this._ignoreBOM=Boolean(t["ignoreBOM"]),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function w(r,t){if(!(this instanceof w))return new w(r,t);if(r=void 0!==r?String(r).toLowerCase():y,r!==y)throw new Error("Encoding not supported. Only utf-8 is supported");t=i(t),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(t["fatal"])},Object.defineProperty(this,"encoding",{value:"utf-8"})}function v(r){var t=r.fatal,n=0,i=0,o=0,h=128,s=191;this.handler=function(r,c){if(c===a&&0!==o)return o=0,u(t);if(c===a)return f;if(0===o){if(e(c,0,127))return c;if(e(c,194,223))o=1,n=c-192;else if(e(c,224,239))224===c&&(h=160),237===c&&(s=159),o=2,n=c-224;else{if(!e(c,240,244))return u(t);240===c&&(h=144),244===c&&(s=143),o=3,n=c-240}return n<<=6*o,null}if(!e(c,h,s))return n=o=i=0,h=128,s=191,r.prepend(c),u(t);if(h=128,s=191,i+=1,n+=c-128<<6*(o-i),i!==o)return null;var l=n;return n=o=i=0,l}}function g(r){r.fatal;this.handler=function(r,t){if(t===a)return f;if(e(t,0,127))return t;var n,i;e(t,128,2047)?(n=1,i=192):e(t,2048,65535)?(n=2,i=224):e(t,65536,1114111)&&(n=3,i=240);var o=[(t>>6*n)+i];while(n>0){var h=t>>6*(n-1);o.push(128|63&h),n-=1}return o}}p.prototype={decode:function(r,t){var n;n="object"===typeof r&&r instanceof ArrayBuffer?new Uint8Array(r):"object"===typeof r&&"buffer"in r&&r.buffer instanceof ArrayBuffer?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(0),t=i(t),this._streaming||(this._decoder=new v({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(t["stream"]);var e,o=new s(n),a=[];while(!o.endOfStream()){if(e=this._decoder.handler(o,o.read()),e===f)break;null!==e&&(Array.isArray(e)?a.push.apply(a,e):a.push(e))}if(!this._streaming){do{if(e=this._decoder.handler(o,o.read()),e===f)break;null!==e&&(Array.isArray(e)?a.push.apply(a,e):a.push(e))}while(!o.endOfStream());this._decoder=null}return a.length&&(-1===["utf-8"].indexOf(this.encoding)||this._ignoreBOM||this._BOMseen||(65279===a[0]?(this._BOMseen=!0,a.shift()):this._BOMseen=!0)),h(a)}},w.prototype={encode:function(r,t){r=r?String(r):"",t=i(t),this._streaming||(this._encoder=new g(this._options)),this._streaming=Boolean(t["stream"]);var n,e=[],h=new s(o(r));while(!h.endOfStream()){if(n=this._encoder.handler(h,h.read()),n===f)break;Array.isArray(n)?e.push.apply(e,n):e.push(n)}if(!this._streaming){while(1){if(n=this._encoder.handler(h,h.read()),n===f)break;Array.isArray(n)?e.push.apply(e,n):e.push(n)}this._encoder=null}return new Uint8Array(e)}}}}]);
//# sourceMappingURL=chunk-5ab7c5c8.65b9339f.js.map