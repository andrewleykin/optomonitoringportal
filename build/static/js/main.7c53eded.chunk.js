(this.webpackJsonpoptomonitoring=this.webpackJsonpoptomonitoring||[]).push([[0],{111:function(e,t,n){},227:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},232:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var c=n(3),l=n.n(c),a=n(23),s=n.n(a),i=(n(111),n(5)),r=n(7),o=n(6),u=n(103),j=n(100),b=n.n(j),d=(n(227),n(1)),O=function(e){var t=e.isOpen,n=e.onClose,c=e.onConfirm,l=e.children,a=e.title;return Object(d.jsxs)(b.a,{isOpen:t,ariaHideApp:!1,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:n,className:"app-modal",children:[Object(d.jsx)("button",{className:"app-modal__close",onClick:n,children:"X"}),Object(d.jsx)("h3",{className:"app-modal__title",children:a}),Object(d.jsx)("div",{className:"app-modal__body",children:l}),Object(d.jsxs)("div",{className:"app-modal__actions",children:[Object(d.jsx)("button",{className:"app-modal__btn success",onClick:c,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(d.jsx)("button",{className:"app-modal__btn cancel",onClick:n,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=c.createElement("image",{id:"logo_\\u043A\\u043E\\u043F\\u0438\\u044F_2","data-name":"logo \\u043A\\u043E\\u043F\\u0438\\u044F 2",width:20,height:20,xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABS0lEQVQ4jZ2VwU7CQBCGP1cOTbmZEIlNuHgx8cBDyBPITZ6vx75BX8OUswkGQuKNhhghZuysLLvbKv1PZPrPt+xMZ3r19PzCHxoCRi1HYOfayyI/yx50s0iBBy9WAXXgVJkgAhkw0cNugqdNbKCebDZfdALFNAZGwBS4DXBNbKoe8U5cqAvM1HSpRpobAK97wIJcF/ge2E6quxrh5lpgqvXwtQdetbOV/t4HLhjP5gthIO/hMPJqWMUACfAYOBstTaTTVnUEhsbarm/aYL1ldJxiSvV6vhJ9FtPR6GxKwTcRw70HTTTmS3Krssh3dpalJp+RybANsDVr+2frssi/8BpyF9hOSjtgZ7ku8BDY/q9DDLgCtj1gkiO5P/L34ZueJrMp4yTT49dVGrDWa4p35S7Z2IL9PQ34iAAlJg2Qwy/e2NLdpfcJaF8SwDewwUedYrM5DAAAAABJRU5ErkJggg=="});function m(e,t){var n=e.title,l=e.titleId,a=p(e,["title","titleId"]);return c.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":l},a),n?c.createElement("title",{id:l},n):null,f)}var g=c.forwardRef(m),x=(n.p,n(229),function(e){var t=e.title,n=e.actions,l=e.children,a=e.onOpenModal,s=e.onCloseModal,i=e.onConfirmModal,o=e.modalTitle,u=e.modalContent,j=Object(c.useState)(!1),b=Object(r.a)(j,2),h=b[0],p=b[1],f=function(){s&&s(),p(!1)};return Object(d.jsxs)("div",{className:"block",children:[Object(d.jsxs)("div",{className:"block__header",children:[Object(d.jsx)("h2",{className:"block__title",children:t}),Object(d.jsxs)("div",{className:"block__actions",children:[n,u&&Object(d.jsx)("button",{onClick:function(){a&&a(),p(!0)},children:Object(d.jsx)(g,{})})]})]}),Object(d.jsx)("div",{className:"block__body",children:l}),Object(d.jsx)(O,{isOpen:h,onClose:f,onConfirm:function(){i&&i(),f()},title:o,children:u})]})}),v=(n(230),function(e){var t=e.value,n=e.onChange,c=e.label;return Object(d.jsxs)("label",{className:"app-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){return n(e.target.checked)}}),Object(d.jsx)("span",{className:"app-checkbox__box"}),c]})}),w=n(73),A=n.n(w),k=n(104);n(231),n(232);Object(w.registerLocale)("ru",k.a);var C=Object(c.forwardRef)((function(e,t){var n=e.value,c=e.onClick;return Object(d.jsx)("button",{className:"app-date-picker-input",onClick:c,ref:t,children:n})})),y=function(e){var t=e.value,n=e.onChange;return Object(d.jsx)(A.a,{selected:t,onSelect:n,timeInputLabel:"\u0412\u0440\u0435\u043c\u044f:",dateFormat:"MM/dd/yyyy h:mm",showTimeInput:!0,customInput:Object(d.jsx)(C,{}),locale:"ru"})},_=(n(276),function(e){var t=e.children;return Object(d.jsx)("div",{className:"app-form-row",children:t})});function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var B=c.createElement("image",{id:"pie-chart",width:18,height:18,xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABS0lEQVQ4jZWU3U7CQBCFv5ZiYzBKwIA/N3qh0eeQJ5A7eT4ueQMeRC808UaCkvgTxUi0JUNmdVy2Fr+EUMrO6c6Zs43Ozi8IUAEawBawDiTANfDiLx0O+ovvZFmDFrCnYpaqXkdA7hdZoRg4BOpL0j+0gR3gARgDX7bYUSaC7lIevgucatu/hForiPikwHGn20udUEU9WYUsYM1Bp9tbCDUCxhZxD0y8/zZkurGOeFVkR7eBGDRja9g/GHlLa0lBlsp404A6cpfYakmh8GSupZOm+Z0lpt+2MT1TY/0pOepeXKaurUgTa9tM1VifNWDfu/fsAplr7C3bwJGON9LdSjsnnhVSO7E7GGumUnNvUz/io4iE0j8aDvoze9bkAErBZ4EvIR5dFKyQ8A5cAq8lAtLOHXDz1/voA7jSxEs7NS2UCU7FWD0ms+8KYA7ZHT7dBeJZrgAAAABJRU5ErkJggg=="});function U(e,t){var n=e.title,l=e.titleId,a=S(e,["title","titleId"]);return c.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:18,height:18,viewBox:"0 0 18 18",ref:t,"aria-labelledby":l},a),n?c.createElement("title",{id:l},n):null,B)}var E=c.forwardRef(U),T=(n.p,n(277),Object(c.memo)((function(e){var t=e.title,n=e.count,c=e.bold,l=void 0!==c&&c,a=e.tagColor;return Object(d.jsxs)("div",{className:"statistics__item-row ".concat(l?"bold":""),children:[a&&Object(d.jsx)("span",{className:"statistics__item-tag",style:{backgroundColor:a}}),Object(d.jsx)("span",{className:"statistics__item-text",children:t}),Object(d.jsx)("span",{className:"statistics__item-count",children:n})]})}))),D=Object(c.memo)((function(e){var t=e.values,n=e.isShowTagColor,c=void 0!==n&&n;return t.map((function(e,t){return Object(d.jsx)(T,Object(o.a)({title:e.label,count:e.count},{isShowTagColor:c}&&{tagColor:e.color}),t)}))})),F=Object(c.memo)((function(e){var t=e.title,n=e.data;return Object(d.jsxs)("div",{className:"statistics__item",children:[Object(d.jsx)(T,{bold:!0,title:t,count:n.all}),Object(d.jsx)(D,{values:n.values,isShowTagColor:!0})]})})),P=Object(c.memo)((function(e){var t=e.title,n=e.values;return Object(d.jsxs)("div",{className:"statistics__chart",children:[Object(d.jsx)("span",{className:"statistics__chart-title",children:t}),Object(d.jsx)("div",{className:"statistics__chart-chart",children:Object(d.jsx)(u.a,{data:{labels:n.map((function(e){return e.label})),datasets:[{data:n.map((function(e){return e.count})),backgroundColor:n.map((function(e){return e.color}))}]},options:{plugins:{legend:{display:!1}}}})}),Object(d.jsx)(D,{values:n})]})})),I=function(e){var t=e.data,n=e.settings,l=void 0===n?{}:n,a=e.onChangeSettings,s=Object(c.useState)(!1),u=Object(r.a)(s,2),j=u[0],b=u[1],O=Object(c.useState)({wells:{show:!0},reports:{show:!0,date:l.reports||new Date},events:{show:!0,date:l.events||new Date}}),h=Object(r.a)(O,2),p=h[0],f=h[1],m=Object(c.useState)(p),g=Object(r.a)(m,2),w=g[0],A=g[1],k=function(e,t){A(Object(o.a)(Object(o.a)({},w),{},Object(i.a)({},e,Object(o.a)(Object(o.a)({},w[e]),{},{show:t}))))},C=function(e,t){A(Object(o.a)(Object(o.a)({},w),{},Object(i.a)({},e,Object(o.a)(Object(o.a)({},w[e]),{},{date:t}))))},N=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:w.wells.show,onChange:function(e){return k("wells",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043a\u0432\u0430\u0436\u0438\u043d \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435"})}),Object(d.jsxs)(_,{children:[Object(d.jsx)(v,{value:w.events.show,onChange:function(e){return k("events",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),Object(d.jsx)(y,{value:w.events.date,onChange:function(e){return C("events",e)}})]}),Object(d.jsxs)(_,{children:[Object(d.jsx)(v,{value:w.reports.show,onChange:function(e){return k("reports",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0447\u0435\u0442\u043e\u0432"}),Object(d.jsx)(y,{value:w.reports.date,onChange:function(e){return C("reports",e)}})]})]});return Object(d.jsx)(x,{title:"\u0412\u0438\u0434\u0436\u0435\u0442 \u0441\u043e \u0441\u0432\u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439",modalTitle:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441\u043e \u0441\u0432\u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439",modalContent:N,onOpenModal:function(){A(p)},onConfirmModal:function(){f(w),w.events.date===p.events.date&&w.reports.date===p.reports.date||a({events:w.events.date,reports:w.reports.date})},actions:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{onClick:function(){return b(!j)},children:Object(d.jsx)(E,{})})}),children:j?Object(d.jsxs)("div",{className:"statistics__charts",children:[p.wells.show&&Object(d.jsx)(P,{title:"\u0421\u043a\u0432\u0430\u0436\u0438\u043d\u044b \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435",values:t.wells.values}),p.reports.show&&Object(d.jsx)(P,{title:"\u041e\u0442\u0447\u0435\u0442\u044b",values:t.reports.values}),p.events.show&&Object(d.jsx)(P,{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f",values:t.events.values})]}):Object(d.jsxs)("div",{className:"statistics__list",children:[p.wells.show&&Object(d.jsx)(F,{title:"\u0421\u043a\u0432\u0430\u0436\u0438\u043d\u044b \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435",data:t.wells}),p.reports.show&&Object(d.jsx)(F,{title:"\u041e\u0442\u0447\u0435\u0442\u043e\u0432 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e",data:t.reports}),p.events.show&&Object(d.jsx)(F,{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e",data:t.events})]})})},W=n(102);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var Z=c.createElement("image",{id:"loupe",width:24,height:24,xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgUlEQVRIie2WsUoDQRRFj1uEWEaJBAwiEgSDVUD/wAgBG1sFxUb8A6t0qYI/If6BpWKhaKNgZ6NlQDEx2ClBXBm4gYkzyU4WSw8sC/vufW93dt7bncBPAdgF1oAyMAl8Ag/AOXAMtLzOBDJAA/gA4hFHD2gC2dHpBskBN1aSa+AAqADzOu8Dl5bmFsg7mTxkrOTvwKYrGWAD6Ep/F/IkDSv5shP1swi8yXfkVYiCteZJd/6bmvVO5pyoOLTWPA0X8td93khb0XDiRMPo+9aHyZ91BxUnEkZZ/rZPHqmJ0K5IQ0eenM8bqUMNU040jGnJOj55pPY3rDjRMFYle/TJI80Ww5YTDWNbsrNh8qL2cawOHYeq1Qezo3xNCbvq0BAWgFf5mkn6rAZXrPavOYpBqlbyb6DkKDzkNbj6k9J06J72+QywBOxorWMruTk/aakTyWpw9TzfAN/3oKTkYxVBg6uu+WQ69At4Aa503X6hxbRFxuG/SOoi98N+W/6iyCnQ+gE1E3gA3GOSSQAAAABJRU5ErkJggg=="});function J(e,t){var n=e.title,l=e.titleId,a=R(e,["title","titleId"]);return c.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":l},a),n?c.createElement("title",{id:l},n):null,Z)}var Y=c.forwardRef(J),L=(n.p,n(278),function e(t,n){return t.reduce((function(t,c){if(c.title.toLowerCase().indexOf(n.toLowerCase())>=0)t.push(c);else if(c.childrens&&c.childrens.length>0){var l=e(c.childrens,n);l&&l.length>0&&t.push(Object(o.a)(Object(o.a)({},c),{},{childrens:l}))}return t}),[])}),Q=function(e){var t=e.data,n=e.settings,l=void 0===n?{}:n,a=e.onChangeSettings,s=Object(W.a)("pickwell.isOpenTree","false"),u=Object(r.a)(s,2),j=u[0],b=u[1],O=Object(c.useState)(""),h=Object(r.a)(O,2),p=h[0],f=h[1],m=Object(c.useState)(t.wells||[]),g=Object(r.a)(m,2),w=g[0],A=g[1],k=Object(c.useState)({count:!0,status:!0,isOpenTree:"true"===j,showUnwatchWell:l.showUnwatchWell||!1}),C=Object(r.a)(k,2),y=C[0],N=C[1],S=Object(c.useState)(y),B=Object(r.a)(S,2),U=B[0],E=B[1],T=function(e,t){"isOpenTree"===e&&b(t),E(Object(o.a)(Object(o.a)({},U),{},Object(i.a)({},e,t)))},D=function(e){var t=e.title,n=e.count,l=e.colors,a=e.isParent,s=void 0===a||a,i=e.children,o=Object(c.useState)(p.length>0||y.isOpenTree),u=Object(r.a)(o,2),j=u[0],b=u[1],O=s?"button":"span";return Object(d.jsxs)("div",{className:"pickwell__item ".concat(j?"active":""),children:[Object(d.jsxs)(O,{className:"pickwell__item-header",onClick:function(){return s&&b(!j)},children:[s&&Object(d.jsx)("div",{className:"pickwell__item-icon",children:j?"-":"+"}),Object(d.jsx)("span",{className:"pickwell__item-name",children:t}),void 0!==n&&y.count&&Object(d.jsxs)("span",{className:"pickwell__item-count",children:["(",n,")"]}),y.status&&Object(d.jsx)("div",{className:"pickwell__item-status",children:l.map((function(e,t){return Object(d.jsx)("div",{className:"pickwell__item-status-item",style:{backgroundColor:e}},t)}))})]}),Object(d.jsx)("div",{className:"pickwell__item-body",children:i})]})},F=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:U.count,onChange:function(e){return T("count",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043a\u0432\u0430\u0436\u0438\u043d \u0432 \u0434\u0435\u0440\u0435\u0432\u0435"})}),Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:U.status,onChange:function(e){return T("status",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043a\u0432\u0430\u0436\u0438\u043d \u0432 \u0434\u0435\u0440\u0435\u0432\u0435"})}),Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:U.isOpenTree,onChange:function(e){return T("isOpenTree",e)},label:"\u0412\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u0445\u043e\u0434\u0435"})}),Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:U.showUnwatchWell,onChange:function(e){return T("showUnwatchWell",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b \u043d\u0435 \u043f\u043e\u0434 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435\u043c"})})]});return Object(c.useEffect)((function(){if(0!==p.length){var e=L(t.wells,p);A(e)}else A(t.wells)}),[p]),Object(d.jsx)(x,{title:"\u0412\u0438\u0434\u0436\u0435\u0442 \u0432 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b",modalTitle:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b",modalContent:F,onOpenModal:function(){E(y)},onConfirmModal:function(){N(U),U.showUnwatchWell!==y.showUnwatchWell&&a({showUnwatchWell:U.showUnwatchWell})},children:Object(d.jsxs)("div",{className:"pickwell",children:[Object(d.jsxs)("div",{className:"pickwell__input",children:[Object(d.jsx)(Y,{}),Object(d.jsx)("input",{value:p,onInput:function(e){return f(e.currentTarget.value)},placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b"})]}),Object(d.jsx)("div",{className:"pickwell__list",children:w.map((function(e){return Object(d.jsx)(D,{title:e.title,count:e.count,colors:e.statuses,children:e.childrens.map((function(e){return Object(d.jsx)(D,{title:e.title,count:e.count,colors:e.statuses,children:e.childrens.map((function(e){return Object(d.jsx)(D,{title:e.title,count:e.count,colors:e.statuses,children:e.childrens.map((function(e){return Object(d.jsx)(D,{title:e.title,count:e.count,colors:e.statuses,children:e.childrens.map((function(e){return Object(d.jsx)(D,{title:e.title,colors:e.statuses,isParent:!1},e.id)}))},e.id)}))},e.id)}))},e.id)}))},e.id)}))})]})})},z=(n(279),function(e){var t=e.onClick;return Object(d.jsxs)("div",{className:"status-select",children:[Object(d.jsxs)("button",{className:"status-select__item",onClick:function(){return t("all")},children:[Object(d.jsx)("span",{className:"status-select__badge",style:{backgroundColor:"#004065"}}),"\u0412\u0441\u0435"]}),Object(d.jsxs)("button",{className:"status-select__item",onClick:function(){return t("critical")},children:[Object(d.jsx)("span",{className:"status-select__badge",style:{backgroundColor:"#e02a27"}}),"\u0422\u043e\u043b\u044c\u043a\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435"]}),Object(d.jsxs)("button",{className:"status-select__item",onClick:function(){return t("important")},children:[Object(d.jsx)("span",{className:"status-select__badge",style:{backgroundColor:"#fddb2a"}}),"\u0422\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0435"]})]})}),G=(n(280),[{key:"color",label:""},{key:"date",label:"\u0414\u0430\u0442\u0430"},{key:"time",label:"\u0412\u0440\u0435\u043c\u044f"},{key:"well",label:"\u0421\u043a\u0432\u0430\u0436\u0438\u043d\u0430"},{key:"bush",label:"\u041a\u0443\u0441\u0442"},{key:"field",label:"\u041c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435"},{key:"organization",label:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"},{key:"organization_two",label:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"},{key:"event",label:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435"}]),V=function(e){var t=e.data,n=e.settings,l=void 0===n?{}:n,a=e.onChangeSettings,s=Object(c.useState)({important:l.important||!1,critical:l.critical||!1,date:l.date}),u=Object(r.a)(s,2),j=u[0],b=u[1],O=Object(c.useState)(j),h=Object(r.a)(O,2),p=h[0],f=h[1],m=function(e,t){f(Object(o.a)(Object(o.a)({},p),{},Object(i.a)({},e,t)))},g=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:p.important,onChange:function(e){return m("important",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}),Object(d.jsx)(_,{children:Object(d.jsx)(v,{value:p.critical,onChange:function(e){return m("critical",e)},label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0438\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}),Object(d.jsxs)(_,{children:[Object(d.jsx)(v,{value:!!p.date,label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0434\u0430\u0442\u044b"}),Object(d.jsx)(y,{value:p.date,onChange:function(e){return m("date",e)}})]})]});return Object(d.jsx)(x,{title:"\u0412\u0438\u0434\u0436\u0435\u0442 \u0441\u043e \u0441\u0432\u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439",modalTitle:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438",modalContent:g,onOpenModal:function(){f(j)},onConfirmModal:function(){b(p),a(p)},actions:Object(d.jsx)(z,{onClick:function(e){a({critical:["critical","all"].includes(e),important:["important","all"].includes(e),date:null})}}),children:0===t.length?Object(d.jsx)("p",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}):Object(d.jsxs)("table",{className:"app-events__table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:G.map((function(e){return Object(d.jsx)("th",{children:e.label},e.key)}))})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsx)("tr",{children:G.map((function(t){return Object(d.jsx)("td",{children:"color"===t.key?Object(d.jsx)("span",{className:"app-events__table-badge",style:{backgroundColor:e[t.key]}}):e[t.key]},t.key)}))},t)}))})]})})},X=(n(281),{wells:{all:3,values:[{label:"\u0412\u0435\u0434\u0435\u0442\u0441\u044f \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435",count:2,color:"#006c42"},{label:"\u041d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e",count:1,color:"#43525a"}]},reports:{all:6,values:[{label:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445",count:2,color:"#ff6384"},{label:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438",count:1,color:"#ff9f40"},{label:"\u0420\u0435\u0436\u0438\u043c\u044b \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b",count:3,color:"#ffcd56"}]},events:{all:10,values:[{label:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445",count:6,color:"#006c42"},{label:"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435",count:1,color:"#e02a27"},{label:"\u0412\u0430\u0436\u043d\u044b\u0435",count:3,color:"#fddb2a"}]}}),K={wells:[{id:"1",title:"\u041f\u0410\u041e \u201c\u0413\u0430\u0437\u043f\u0440\u043e\u043c \u043d\u0435\u0444\u0442\u044c\u201d",count:"4",statuses:["#006c42","#43525a","#fddb2a","#e02a27"],childrens:[{id:"1.1",title:"\u041f\u0410\u041e \u201c\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u043d\u0435\u0444\u0442\u044c-\u0425\u0430\u043d\u0442\u043e\u0441\u201d",count:"0",statuses:["#006c42","#fddb2a"],childrens:[{id:"1.1.1",title:"\u041d\u043e\u0432\u043e\u043f\u043e\u0440\u0442\u043e\u0432\u0441\u043a\u043e\u0435 \u041d\u0413\u041a\u041c",count:"2",statuses:["#006c42","#43525a"],childrens:[{id:"1.1.1.1",title:"\u041a\u0443\u0441\u0442 \u2116 7",count:"2",statuses:["#006c42"],childrens:[{id:"1.1.1.1.1",title:"\u0421\u043a\u0432\u0430\u0436\u0438\u043d\u0430 2066",statuses:["#006c42"]}]},{id:"1.1.1.2",title:"\u041a\u0443\u0441\u0442 \u2116 9",count:"2",statuses:["#006c42"],childrens:[{id:"1.1.1.2.1",title:"\u041c\u043e\u0441\u043a\u0432\u0430",statuses:["#006c42"]}]}]}]}]}]},H=[{color:"#006c42",date:"03.05.2021",time:"15:00",well:"2096",bush:"\u043a\u0443\u0441\u0442",field:"\u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435",organization:"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f 1",organization_two:"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f 2",event:"\u0441\u043c\u0435\u043d\u0430 \u0447\u0435\u0433\u043e-\u0442\u043e"},{color:"#fddb2a",date:"03.05.2021",time:"15:00",well:"2096",bush:"\u043a\u0443\u0441\u0442",field:"\u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435",organization:"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f 1",organization_two:"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f 2",event:"\u0441\u043c\u0435\u043d\u0430 \u0447\u0435\u0433\u043e-\u0442\u043e"}];var q=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{style:{marginBottom:"2em"},children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u0438\u0434\u0436\u0435\u0442\u043e\u0432"}),Object(d.jsx)("div",{className:"AppStatistics",children:Object(d.jsx)(I,{data:X,onChangeSettings:function(){}})}),Object(d.jsx)("div",{className:"AppPickWell",children:Object(d.jsx)(Q,{data:K,onChangeSettings:function(){}})}),Object(d.jsx)("div",{className:"AppEvents",children:Object(d.jsx)(V,{data:H,onChangeSettings:function(){}})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),l(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),$()}},[[283,1,2]]]);
//# sourceMappingURL=main.7c53eded.chunk.js.map