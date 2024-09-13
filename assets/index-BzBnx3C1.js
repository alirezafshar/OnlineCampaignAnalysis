import{r as c,j as s}from"./index-DpB608fL.js";import{U as o,g as l}from"./UseApi-D_w-xehE.js";import{M as r}from"./index-twDQ5ZPb.js";import{u as m}from"./iconBase-BUTE27aG.js";const d=()=>{const t=m(),i=o(l());c.useEffect(()=>{i.request()},[]);const e=(a,n)=>{t("/campaign-details",{state:{campId:a,campName:n}})};return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"dashboard__block",children:s.jsx("h1",{className:"dashboard__title",children:"Dashboard | Campaign List"})}),s.jsx("h2",{className:"dashboard__subtitle",children:"Welcome to OAC Inc."}),s.jsx("blockquote",{className:"dashboard__desc",children:"Explore our diverse online advertising campaigns and select your favorite. We’ll guide you to more detailed information about each campaign."}),s.jsx("section",{className:"campList",children:i.status&&i.data.map(a=>s.jsxs("ul",{className:"campList__block",children:[s.jsx("li",{className:`dashboard__ribbon dashboard__ribbon--${a.name.toLowerCase()}`,children:"Campaign"}),s.jsx("li",{className:"campList__info",children:s.jsxs("figure",{className:"campList__summary",children:[s.jsx(r,{className:"campList__icon"}),s.jsxs("figcaption",{className:"campList__caption",children:[s.jsx("p",{className:"campList__title",children:"Code:"}),s.jsx("button",{className:"campList__link",type:"button",onClick:()=>e(a.id,a.name),children:a.id}),s.jsx("p",{className:"campList__title",children:"Name:"}),s.jsx("button",{className:"campList__link",type:"button",onClick:()=>e(a.id,a.name),children:a.name})]})]})})]},a.id))})]})},u=d;export{u as CampaignsList};
