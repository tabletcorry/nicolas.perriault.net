var q=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function a(a){function b(a){var b=a.charCodeAt(0);if(b!==92)return b;var c=a.charAt(1);return(b=l[c])?b:"0"<=c&&c<="7"?parseInt(a.substring(1),8):c==="u"||c==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function c(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function d(a){for(var d=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=[],e=[],f=d[0]==="^",g=f?1:0,h=d.length;g<h;++g){var i=d[g];if(/\\[bdsw]/i.test(i))a.push(i);else{var i=b(i),j;g+2<h&&"-"===d[g+1]?(j=b(d[g+2]),g+=2):j=i,e.push([i,j]),j<65||i>122||(j<65||i>90||e.push([Math.max(65,i)|32,Math.min(j,90)|32]),j<97||i>122||e.push([Math.max(97,i)&-33,Math.min(j,122)&-33]))}}e.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]}),d=[],i=[NaN,NaN];for(g=0;g<e.length;++g)h=e[g],h[0]<=i[1]+1?i[1]=Math.max(i[1],h[1]):d.push(i=h);e=["["],f&&e.push("^"),e.push.apply(e,a);for(g=0;g<d.length;++g)h=d[g],e.push(c(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&e.push("-"),e.push(c(h[1])));return e.push("]"),e.join("")}function e(a){for(var b=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=b.length,e=[],h=0,i=0;h<c;++h){var j=b[h];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(e[j]=-1)}for(h=1;h<e.length;++h)-1===e[h]&&(e[h]=++f);for(i=h=0;h<c;++h)j=b[h],j==="("?(++i,e[i]===void 0&&(b[h]="(?:")):"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(b[h]="\\"+e[i]);for(i=h=0;h<c;++h)"^"===b[h]&&"^"!==b[h+1]&&(b[h]="");if(a.ignoreCase&&g)for(h=0;h<c;++h)j=b[h],a=j.charAt(0),j.length>=2&&a==="["?b[h]=d(j):a!=="\\"&&(b[h]=j.replace(/[A-Za-z]/g,function(a){return a=a.charCodeAt(0),"["+String.fromCharCode(a&-33,a|32)+"]"}));return b.join("")}for(var f=0,g=!1,h=!1,i=0,j=a.length;i<j;++i){var k=a[i];if(k.ignoreCase)h=!0;else if(/[a-z]/i.test(k.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){g=!0,h=!1;break}}for(var l={b:8,t:9,n:10,v:11,f:12,r:13},m=[],i=0,j=a.length;i<j;++i){k=a[i];if(k.global||k.multiline)throw Error(""+k);m.push("(?:"+e(k)+")")}return RegExp(m.join("|"),h?"gi":"g")}function b(a){function b(a){switch(a.nodeType){case 1:if(c.test(a.className))break;for(var h=a.firstChild;h;h=h.nextSibling)b(h);h=a.nodeName;if("BR"===h||"LI"===h)d[g]="\n",f[g<<1]=e++,f[g++<<1|1]=a;break;case 3:case 4:h=a.nodeValue,h.length&&(h=i?h.replace(/\r\n?/g,"\n"):h.replace(/[\t\n\r ]+/g," "),d[g]=h,f[g<<1]=e,e+=h.length,f[g++<<1|1]=a)}}var c=/(?:^|\s)nocode(?:\s|$)/,d=[],e=0,f=[],g=0,h;a.currentStyle?h=a.currentStyle.whiteSpace:window.getComputedStyle&&(h=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var i=h&&"pre"===h.substring(0,3);return b(a),{a:d.join("").replace(/\n$/,""),c:f}}function c(a,b,c,d){b&&(a={a:b,d:a},c(a),d.push.apply(d,a.e))}function d(b,d){function e(a){for(var b=a.d,j=[b,"pln"],k=0,l=a.a.match(g)||[],m={},n=0,o=l.length;n<o;++n){var p=l[n],q=m[p],r=void 0,s;if(typeof q=="string")s=!1;else{var t=f[p.charAt(0)];if(t)r=p.match(t[1]),q=t[0];else{for(s=0;s<i;++s)if(t=d[s],r=p.match(t[1])){q=t[0];break}r||(q="pln")}(s=q.length>=5&&"lang-"===q.substring(0,5))&&(!r||typeof r[1]!="string")&&(s=!1,q="src"),s||(m[p]=q)}t=k,k+=p.length;if(s){s=r[1];var u=p.indexOf(s),v=u+s.length;r[2]&&(v=p.length-r[2].length,u=v-s.length),q=q.substring(5),c(b+t,p.substring(0,u),e,j),c(b+t+u,s,h(q,s),j),c(b+t+v,p.substring(v),e,j)}else j.push(b+t,q)}a.e=j}var f={},g;(function(){for(var c=b.concat(d),e=[],h={},i=0,j=c.length;i<j;++i){var k=c[i],l=k[3];if(l)for(var m=l.length;--m>=0;)f[l.charAt(m)]=k;k=k[1],l=""+k,h.hasOwnProperty(l)||(e.push(k),h[l]=q)}e.push(/[\S\s]/),g=a(e)})();var i=d.length;return e}function e(a){var b=[],c=[];a.tripleQuotedStrings?b.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?b.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,q,"'\"`"]):b.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]),a.verbatimStrings&&c.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var e=a.hashComments;return e&&(a.cStyleComments?(e>1?b.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):b.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),c.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):b.push(["com",/^#[^\n\r]*/,q,"#"])),a.cStyleComments&&(c.push(["com",/^\/\/[^\n\r]*/,q]),c.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q])),a.regexLiterals&&c.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]),(e=a.types)&&c.push(["typ",e]),a=(""+a.keywords).replace(/^ | $/g,""),a.length&&c.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]),b.push(["pln",/^\s+/,q," \r\n\t "]),c.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]),d(b,c)}function f(a,b){function c(a){switch(a.nodeType){case 1:if(e.test(a.className))break;if("BR"===a.nodeName)d(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)c(a);break;case 3:case 4:if(i){var b=a.nodeValue,h=b.match(f);if(h){var j=b.substring(0,h.index);a.nodeValue=j,(b=b.substring(h.index+h[0].length))&&a.parentNode.insertBefore(g.createTextNode(b),a.nextSibling),d(a),j||a.parentNode.removeChild(a)}}}}function d(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),f=a.nextSibling;e.appendChild(d);for(var g=f;g;g=f)f=g.nextSibling,e.appendChild(g)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),c;(c=a.parentNode)&&c.nodeType===1;)a=c;j.push(a)}var e=/(?:^|\s)nocode(?:\s|$)/,f=/\r\n?|\n/,g=a.ownerDocument,h;a.currentStyle?h=a.currentStyle.whiteSpace:window.getComputedStyle&&(h=g.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var i=h&&"pre"===h.substring(0,3);for(h=g.createElement("LI");a.firstChild;)h.appendChild(a.firstChild);for(var j=[h],k=0;k<j.length;++k)c(j[k]);b===(b|0)&&j[0].setAttribute("value",b);var l=g.createElement("OL");l.className="linenums";for(var m=Math.max(0,b-1|0)||0,k=0,n=j.length;k<n;++k)h=j[k],h.className="L"+(k+m)%10,h.firstChild||h.appendChild(g.createTextNode(" ")),l.appendChild(h);a.appendChild(l)}function g(a,b){for(var c=b.length;--c>=0;){var d=b[c];u.hasOwnProperty(d)?window.console&&console.warn("cannot override language handler %s",d):u[d]=a}}function h(a,b){if(!a||!u.hasOwnProperty(a))a=/^\s*</.test(b)?"default-markup":"default-code";return u[a]}function i(a){var c=a.g;try{var d=b(a.h),e=d.a;a.a=e,a.c=d.c,a.d=0,h(c,e)(a);var f=/\bMSIE\b/.test(navigator.userAgent),c=/\n/g,g=a.a,i=g.length,d=0,j=a.c,k=j.length,e=0,l=a.e,m=l.length,a=0;l[m]=i;var n,o;for(o=n=0;o<m;)l[o]!==l[o+2]?(l[n++]=l[o++],l[n++]=l[o++]):o+=2;m=n;for(o=n=0;o<m;){for(var p=l[o],q=l[o+1],r=o+2;r+2<=m&&l[r+1]===q;)r+=2;l[n++]=p,l[n++]=q,o=r}for(l.length=n;e<k;){var s=j[e+2]||i,t=l[a+2]||i,r=Math.min(s,t),u=j[e+1],v;if(u.nodeType!==1&&(v=g.substring(d,r))){f&&(v=v.replace(c,"\r")),u.nodeValue=v;var w=u.ownerDocument,x=w.createElement("SPAN");x.className=l[a+1];var y=u.parentNode;y.replaceChild(x,u),x.appendChild(u),d<s&&(j[e+1]=u=w.createTextNode(g.substring(r,s)),y.insertBefore(u,x.nextSibling))}d=r,d>=s&&(e+=2),d>=t&&(a+=2)}}catch(z){"console"in window&&console.log(z&&z.stack?z.stack:z)}}var j=["break,continue,do,else,for,if,return,while"],k=[[j,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],l=[k,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],m=[k,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],n=[m,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],k=[k,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],o=[j,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],p=[j,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],j=[j,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],r=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,s=/\S/,t=e({keywords:[l,n,k,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+o,p,j],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),u={};g(t,["default-code"]),g(d([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),g(d([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),g(d([],[["atv",/^[\S\s]+/]]),["uq.val"]),g(e({keywords:l,hashComments:!0,cStyleComments:!0,types:r}),["c","cc","cpp","cxx","cyc","m"]),g(e({keywords:"null,true,false"}),["json"]),g(e({keywords:n,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:r}),["cs"]),g(e({keywords:m,cStyleComments:!0}),["java"]),g(e({keywords:j,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]),g(e({keywords:o,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]),g(e({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]),g(e({keywords:p,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]),g(e({keywords:k,cStyleComments:!0,regexLiterals:!0}),["js"]),g(e({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),g(d([],[["str",/^[\S\s]+/]]),["regex"]),window.prettyPrintOne=function(a,b,c){var d=document.createElement("PRE");return d.innerHTML=a,c&&f(d,c),i({g:b,i:c,h:d}),d.innerHTML},window.prettyPrint=function(a){function b(){for(var c=window.PR_SHOULD_USE_CONTINUATION?j.now()+250:Infinity;k<d.length&&j.now()<c;k++){var e=d[k],g=e.className;if(g.indexOf("prettyprint")>=0){var g=g.match(m),h,n;if(n=!g){n=e;for(var o=void 0,p=n.firstChild;p;p=p.nextSibling)var q=p.nodeType,o=q===1?o?n:p:q===3?s.test(p.nodeValue)?n:o:o;n=(h=o===n?void 0:o)&&"CODE"===h.tagName}n&&(g=h.className.match(m)),g&&(g=g[1]),n=!1;for(o=e.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){n=!0;break}n||((n=(n=e.className.match(/\blinenums\b(?::(\d+))?/))?n[1]&&n[1].length?+n[1]:!0:!1)&&f(e,n),l={g:g,h:e,i:n},i(l))}}k<d.length?setTimeout(b,250):a&&a()}for(var c=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],d=[],e=0;e<c.length;++e)for(var g=0,h=c[e].length;g<h;++g)d.push(c[e][g]);var c=q,j=Date;j.now||(j={now:function(){return+(new Date)}});var k=0,l,m=/\blang(?:uage)?-([\w.]+)(?!\S)/;b()},window.PR={createSimpleLexer:d,registerLangHandler:g,sourceDecorator:e,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}}();