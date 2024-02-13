import{s as n,e as m,m as c,i as l,t as i}from"./web-cbf01121.js";var d=i("<button>");const p=a=>{const[r,s]=n(a,["label"]);return(()=>{var o=d();return m(o,c(s,{type:"button",get class(){return r.className}}),!1,!0),l(o,()=>r.label),o})()},g={title:"Example/Button",component:p,tags:["autodocs"],argTypes:{className:{table:{disable:!0}}}},e={args:{className:"storybook-button storybook-button--primary",label:"Primary"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=1-6&mode=dev",allowFullscreen:!0}}},t={args:{className:"storybook-button storybook-button--secondary",label:"Secondary"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=121-10&mode=dev"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    className: "storybook-button storybook-button--primary",
    label: "Primary"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=1-6&mode=dev",
      allowFullscreen: true
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    className: "storybook-button storybook-button--secondary",
    label: "Secondary"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=121-10&mode=dev"
    }
  }
}`,...t.parameters?.docs?.source}}};const u=["Primary","Secondary"];export{e as Primary,t as Secondary,u as __namedExportsOrder,g as default};
