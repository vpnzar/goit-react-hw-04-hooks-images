(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1t81h",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3XIOw"}},16:function(e,t,r){e.exports={Overlay:"Modal_Overlay__1FMAg",Modal:"Modal_Modal__1eLyv"}},27:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__3-gJ-"}},35:function(e,t,r){},36:function(e,t,r){},5:function(e,t,r){e.exports={SearchBar:"Searchbar_SearchBar__1M3Bj",SearchForm:"Searchbar_SearchForm__23bxU",SearchFormButton:"Searchbar_SearchFormButton__1ClE4",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3ghnl",SearchFormInput:"Searchbar_SearchFormInput__2_CM8"}},58:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(10),s=r.n(n),i=(r(35),r(2)),o=(r(36),r(4)),u=r(5),h=r.n(u),l=(r(13),r(1));var j=function(e){var t=Object(c.useState)(""),r=Object(i.a)(t,2),a=r[0],n=r[1];return Object(l.jsx)("header",{className:h.a.SearchBar,children:Object(l.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(t){t.preventDefault(),e.onSubmit(a),n("")},children:[Object(l.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(l.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(l.jsx)("input",{className:h.a.SearchFormInput,onChange:function(e){n(e.target.value.toLowerCase())},value:a,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=r(27),m=r.n(b),g=function(e){var t=e.children;return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:m.a.ImageGallery,children:t})})},f=r(17),O=r(18),d=r(28),x=function(e){return Object(l.jsxs)(d.a,Object(O.a)(Object(O.a)({viewBox:"0 0 800 400",height:375,width:500},e),{},{children:[Object(l.jsx)("path",{d:"M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"}),Object(l.jsx)("ellipse",{cx:"27.53",cy:"26.15",rx:"27.53",ry:"26.15"}),Object(l.jsx)("rect",{x:"69.36",y:"0.5",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"0.53",y:"328.35",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"95.84",y:"328.35",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"195.38",y:"328.35",width:"304.45",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"412.47",y:"358.52",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"291.22",y:"358.52",width:"113.31",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"0.53",y:"358.52",width:"282.21",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"69.36",y:"25.22",width:"164.67",height:"27.07",rx:"3.83"})]}))},y=r(14),_=r.n(y),p=r(29),v=r(30),S=r(15),I=r.n(S),w=r(7),k=r.n(w),C=function(){function e(t,r){Object(p.a)(this,e),this.base_url=t,this.api_key=r,this._searchPage=1,this._searchQuery=""}return Object(v.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"resetPage",value:function(){return this._searchPage=1}},{key:"searchPage",get:function(){return this._searchPage},set:function(e){return this._searchPage=e}},{key:"searchPhotos",value:function(){var e=this;I.a.defaults.baseURL=this.base_url;var t="?key=".concat(this.api_key,"&q=").concat(this._searchQuery,"&page=").concat(this._searchPage,"&per_page=12");return I.a.get(t).then((function(e){return e.data})).then((function(t){return""===e._searchQuery?[]:t.hits})).catch((function(e){o.b.error("error!!!")}))}}]),e}();C.propTypes={base_url:k.a.string.isRequired,api_key:k.a.string.isRequired,_searchQuery:k.a.string.isRequired,_searchPage:k.a.number.isRequired};var L=new C("https://pixabay.com/api/","23038221-87f79236823d8e345a162521c");var N=function(e){var t=e.pageNum,r=e.queryImg,a=e.imgItemsList,n=Object(c.useState)("init"),s=Object(i.a)(n,2),u=s[0],h=s[1],j=function(e,t){var r=Object(c.useState)((function(){var r;return null!==(r=JSON.parse(localStorage.getItem(e)))&&void 0!==r?r:t})),a=Object(i.a)(r,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]}("keyImages",[]),b=Object(i.a)(j,2),m=b[0],g=b[1];return Object(c.useEffect)((function(){h("pending"),r.trim()?(h("pending"),L.resetPage(),L.searchQuery=r,L.searchPage=t,L.searchPhotos().then((function(e){g(e),a(e.length),h("success")})).catch((function(){h("error")}))):g([])}),[r]),Object(c.useEffect)((function(){var t=e.pageNum;L.searchPage=t,L.searchPhotos().then((function(e){g((function(t){return[].concat(Object(f.a)(t),Object(f.a)(e))})),h("success")})).catch((function(){h("error")}))}),[t]),r.trim()?"pending"===u?Object(l.jsx)(x,{}):r.trim()&&0===m.length?Object(l.jsx)("h1",{children:"No results were found..."}):"success"===u?Object(l.jsx)(l.Fragment,{children:m.length>0&&m.map((function(t,r){return Object(l.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(l.jsx)("img",{src:t.webformatURL,alt:t.tags,className:_.a.ImageGalleryItemImage,onClick:function(){return function(t){var r=m[t];e.onClick(r)}(r)}})},t.id)}))}):"error"===u?"error"===u&&o.b.error("ALARM!!!"):void 0:Object(l.jsx)("h1",{children:"Hello! Search something..."})};r(58);var F=function(e){var t=Object(c.useState)(1),r=Object(i.a)(t,2),a=r[0],n=r[1];return Object(c.useEffect)((function(){e.onClick(a),setTimeout((function(){window.scrollTo({top:document.lastChild.scrollHeight,behavior:"smooth"})}),500)}),[a]),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",onClick:function(){n((function(e){return e+1}))},children:"Load More"})})},P=r(16),B=r.n(P);var G=function(e){Object(c.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(t){"Escape"===t.code&&e.onClose()};return Object(l.jsx)("div",{className:B.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e.onClose()},children:Object(l.jsx)("div",{className:B.a.Modal,children:Object(l.jsx)("img",{src:e.imgItem.largeImageURL,alt:""})})})};var M=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(!1),s=Object(i.a)(n,2),u=s[0],h=s[1],b=Object(c.useState)(1),m=Object(i.a)(b,2),f=m[0],O=m[1],d=Object(c.useState)([]),x=Object(i.a)(d,2),y=x[0],_=x[1],p=Object(c.useState)(0),v=Object(i.a)(p,2),S=v[0],I=v[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{onSubmit:function(e){a(e)}}),Object(l.jsx)(o.a,{autoClose:3e3}),Object(l.jsx)(g,{children:Object(l.jsx)(N,{queryImg:r,pageNum:f,imgItemsList:function(e){I(e)},onClick:function(e){h(!u),_(e)}})}),S>0&&Object(l.jsx)(F,{onClick:function(e){O(e)}}),u&&Object(l.jsx)(G,{imgItem:y,onClose:function(){h((function(e){return!e}))}})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.b14292ad.chunk.js.map