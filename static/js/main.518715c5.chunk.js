(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,c){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1t81h",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3XIOw"}},16:function(e,t,c){e.exports={Overlay:"Modal_Overlay__1FMAg",Modal:"Modal_Modal__1eLyv"}},27:function(e,t,c){e.exports={ImageGallery:"ImageGallery_ImageGallery__3-gJ-"}},35:function(e,t,c){},36:function(e,t,c){},5:function(e,t,c){e.exports={SearchBar:"Searchbar_SearchBar__1M3Bj",SearchForm:"Searchbar_SearchForm__23bxU",SearchFormButton:"Searchbar_SearchFormButton__1ClE4",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3ghnl",SearchFormInput:"Searchbar_SearchFormInput__2_CM8"}},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(10),s=c.n(n),i=(c(35),c(3)),o=(c(36),c(4)),u=c(5),h=c.n(u),l=(c(13),c(1));var j=function(e){var t=Object(r.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1];return Object(l.jsx)("header",{className:h.a.SearchBar,children:Object(l.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(t){t.preventDefault(),e.onSubmit(a),n("")},children:[Object(l.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(l.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(l.jsx)("input",{className:h.a.SearchFormInput,onChange:function(e){n(e.target.value.toLowerCase())},value:a,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=c(27),m=c.n(b),g=function(e){var t=e.children;return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:m.a.ImageGallery,children:t})})},O=c(17),d=c(18),f=c(28),x=function(e){return Object(l.jsxs)(f.a,Object(d.a)(Object(d.a)({viewBox:"0 0 800 400",height:375,width:500},e),{},{children:[Object(l.jsx)("path",{d:"M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"}),Object(l.jsx)("ellipse",{cx:"27.53",cy:"26.15",rx:"27.53",ry:"26.15"}),Object(l.jsx)("rect",{x:"69.36",y:"0.5",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"0.53",y:"328.35",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"95.84",y:"328.35",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"195.38",y:"328.35",width:"304.45",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"412.47",y:"358.52",width:"87.36",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"291.22",y:"358.52",width:"113.31",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"0.53",y:"358.52",width:"282.21",height:"16.48",rx:"4.5"}),Object(l.jsx)("rect",{x:"69.36",y:"25.22",width:"164.67",height:"27.07",rx:"3.83"})]}))},y=c(14),_=c.n(y),p=c(29),I=c(30),S=c(15),v=c.n(S),w=c(7),C=c.n(w),k=function(){function e(t,c){Object(p.a)(this,e),this.base_url=t,this.api_key=c,this._searchPage=1,this._searchQuery="",console.log(this._searchQuery)}return Object(I.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"searchPage",get:function(){return this._searchPage},set:function(e){return this._searchPage=e}},{key:"searchPhotos",value:function(){var e=this;v.a.defaults.baseURL=this.base_url;var t="?key=".concat(this.api_key,"&q=").concat(this._searchQuery,"&page=").concat(this._searchPage,"&per_page=12");return v.a.get(t).then((function(e){return e.data})).then((function(t){return""===e._searchQuery?[]:t.hits})).catch((function(e){o.b.error("error!!!")}))}}]),e}();k.propTypes={base_url:C.a.string.isRequired,api_key:C.a.string.isRequired,_searchQuery:C.a.string.isRequired,_searchPage:C.a.number.isRequired};var L=new k("https://pixabay.com/api/","23038221-87f79236823d8e345a162521c");var N=function(e){var t=Object(r.useState)("init"),c=Object(i.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),h=u[0],j=u[1];return Object(r.useEffect)((function(){var t=e.queryImg,c=e.imgItemsList;n("pending"),L.searchQuery=t,L.searchPage=1,L.searchPhotos().then((function(t){""===e.queryImg?n("init"):t.length>0?(j(t),c(t.length),n("success")):0===t.length&&(n("incorrect"),o.b.error("PLEASE, INPUT CORRECT REQUEST!!!"),c(t.length))})).catch((function(){n("error")}))}),[e.queryImg]),Object(r.useEffect)((function(){var t=e.pageNum;n("pending"),L.searchPage=t,L.searchPhotos().then((function(e){j((function(t){return[].concat(Object(O.a)(t),Object(O.a)(e))})),n("success")})).catch((function(){n("error")}))}),[e.pageNum]),Object(l.jsxs)(l.Fragment,{children:[""===e.queryImg&&Object(l.jsx)("h1",{children:"Hello! Search something..."}),"pending"===a&&Object(l.jsx)(x,{}),"incorrect"===a&&Object(l.jsx)("h1",{children:"No results were found..."}),"success"===a&&h.length>0&&h.map((function(t,c){return Object(l.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(l.jsx)("img",{src:t.webformatURL,alt:t.tags,className:_.a.ImageGalleryItemImage,onClick:function(){return function(t){var c=h[t];e.onClick(c)}(c)}})},t.id)})),"error"===a&&o.b.error("ALARM!!!")]})};c(58);var E=function(e){var t=Object(r.useState)(1),c=Object(i.a)(t,2),a=c[0],n=c[1];return Object(r.useEffect)((function(){e.onClick(a)}),[a]),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",onClick:function(){n((function(e){return e+1})),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)},children:"Load More"})})},F=c(16),P=c.n(F);var B=function(e){Object(r.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(t){"Escape"===t.code&&e.onClose()};return Object(l.jsx)("div",{className:P.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e.onClose()},children:Object(l.jsx)("div",{className:P.a.Modal,children:Object(l.jsx)("img",{src:e.imgItem.largeImageURL,alt:""})})})};var G=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!1),s=Object(i.a)(n,2),u=s[0],h=s[1],b=Object(r.useState)(1),m=Object(i.a)(b,2),O=m[0],d=m[1],f=Object(r.useState)([]),x=Object(i.a)(f,2),y=x[0],_=x[1],p=Object(r.useState)(0),I=Object(i.a)(p,2),S=I[0],v=I[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{onSubmit:function(e){a(e)}}),Object(l.jsx)(o.a,{autoClose:3e3}),Object(l.jsx)(g,{children:Object(l.jsx)(N,{queryImg:c,pageNum:O,imgItemsList:function(e){v(e)},onClick:function(e){h(!u),_(e)}})}),S>0&&Object(l.jsx)(E,{onClick:function(e){d(e)}}),u&&Object(l.jsx)(B,{imgItem:y,onClose:function(){h((function(e){return!e}))}})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.518715c5.chunk.js.map