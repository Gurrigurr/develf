import{c as k,a as d,n as y,t as x}from"../chunks/disclose-version.DZw-J1J6.js";import"../chunks/legacy.uwkN-Vt6.js";import{h as M,al as I,a2 as m,am as j,f as G,w as g,x as v,y as l,z as u}from"../chunks/runtime.Cu4o6Rap.js";import{p as _,i as N}from"../chunks/props.Bc6URuYQ.js";function i(t,s,a,e){var r=t.__attributes??(t.__attributes={});M&&(r[s]=t.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&t.nodeName==="LINK")||r[s]!==(r[s]=a)&&(s==="style"&&"__styles"in t&&(t.__styles={}),s==="loading"&&(t[I]=a),a==null?t.removeAttribute(s):typeof a!="string"&&L(t).includes(s)?t[s]=a:t.setAttribute(s,a))}var w=new Map;function L(t){var s=w.get(t.nodeName);if(s)return s;w.set(t.nodeName,s=[]);for(var a,e=m(t),r=Element.prototype;r!==e;){a=j(e);for(var n in a)a[n].set&&s.push(n);e=m(e)}return s}var H=y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" class="svelte-1q9m90c"><defs><linearGradient x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: #0067C0; stop-opacity: 0.8"></stop><stop offset="100%" style="stop-color: #259cfe; stop-opacity: 0.5"></stop></linearGradient></defs><path d="M20.45 3H3.55A1.52 1.52 0 002 4.55v14.9A1.52 1.52 0 003.55 21h16.9a1.52 1.52 0 001.55-1.55V4.55A1.52 1.52 0 0020.45 3zM8.11 17.34H5.89v-7.7h2.22v7.7zM7 8.92a1.27 1.27 0 110-2.54 1.27 1.27 0 010 2.54zm10.34 8.42h-2.22v-3.64c0-.87-.02-1.98-1.21-1.98-1.22 0-1.4.95-1.4 1.92v3.7h-2.22v-7.7h2.13v1.05h.03a2.34 2.34 0 012.1-1.16c2.24 0 2.66 1.47 2.66 3.37v4.44z"></path></svg>'),B=y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" class="svelte-1q9m90c"><path d="M20.45 3H3.55A1.52 1.52 0 002 4.55v14.9A1.52 1.52 0 003.55 21h16.9a1.52 1.52 0 001.55-1.55V4.55A1.52 1.52 0 0020.45 3zM8.11 17.34H5.89v-7.7h2.22v7.7zM7 8.92a1.27 1.27 0 110-2.54 1.27 1.27 0 010 2.54zm10.34 8.42h-2.22v-3.64c0-.87-.02-1.98-1.21-1.98-1.22 0-1.4.95-1.4 1.92v3.7h-2.22v-7.7h2.13v1.05h.03a2.34 2.34 0 012.1-1.16c2.24 0 2.66 1.47 2.66 3.37v4.44z"></path></svg>');function C(t,s){let a=_(s,"size",3,36),e=_(s,"color",3,"#efefef"),r="linkedin-gradient",n=!0;var c=k(),p=G(c);N(p,()=>n,f=>{var o=H(),h=v(o),z=v(h);i(z,"id",r),l(h);var A=u(h);i(A,"fill",`url(#${r})`),l(o),g(()=>{i(o,"width",a()),i(o,"height",a()),i(o,"fill",e())}),d(f,o)},f=>{var o=B();g(()=>{i(o,"width",a()),i(o,"height",a()),i(o,"fill",e())}),d(f,o)}),d(t,c)}var q=x('<main class="content svelte-mcujm"><h1 class="svelte-mcujm"></h1> <p class="roboto-light-italic svelte-mcujm">Supplying developer elves to companies in need since 2022!</p> <div class="link-container svelte-mcujm"><div class="link-item svelte-mcujm"><a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Company Profile" class="svelte-mcujm"><!></a></div></div></main>');function T(t){const s="DevElf",a="https://www.linkedin.com/in/gustav-nilsson-21800828";var e=q(),r=v(e);r.textContent=s;var n=u(r,4),c=v(n),p=v(c);i(p,"href",a);var f=v(p);C(f,{}),l(p),l(c),l(n),l(e),d(t,e)}export{T as component};